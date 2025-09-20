import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { doc, getDoc, setDoc, updateDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

interface Mission {
  id: string;
  title: string;
  description: string;
  category: "organic" | "water" | "soil" | "biodiversity";
  points: number;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  completed: boolean;
  progress: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  dateEarned?: string;
}

interface UserProfile {
  name: string;
  location: string;
  farmSize: string;
  primaryCrop: string;
  sustainabilityScore: number;
  level: number;
  totalPoints: number;
  rank: number;
}

interface UserContextType {
  profile: UserProfile | null;
  missions: Mission[];
  badges: Badge[];
  loading: boolean;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  completeMission: (missionId: string) => Promise<void>;
  updateMissionProgress: (missionId: string, progress: number) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch both user data + global missions
  useEffect(() => {
    if (!user) {
      setProfile(null);
      setMissions([]);
      setBadges([]);
      setLoading(false);
      return;
    }

    let unsubMissions: (() => void) | null = null;

    const fetchData = async () => {
      try {
        // User document
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        let userData: any = {};
        if (userSnap.exists()) {
          userData = userSnap.data();
          setProfile(userData.profile || null);
          setBadges(userData.badges || []);
        } else {
          console.warn("User doc not found in Firestore");
          // Create a blank user doc on first login
          await setDoc(userRef, { profile: {}, missions: [], badges: [] });
        }

        // Global missions listener
        unsubMissions = onSnapshot(collection(db, "missions"), (snapshot) => {
          const globalMissions = snapshot.docs.map(
            (docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Omit<Mission, "completed" | "progress">)
          );

          // Merge global missions with user’s progress
          const userMissions: Mission[] = globalMissions.map((gm) => {
            const progressData = (userData.missions || []).find((m: Mission) => m.id === gm.id);
            return {
              ...gm,
              completed: progressData?.completed || false,
              progress: progressData?.progress || 0,
            };
          });

          setMissions(userMissions);
        });
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (unsubMissions) unsubMissions();
    };
  }, [user]);

  // Update profile in Firestore
  const updateProfile = async (newProfile: Partial<UserProfile>) => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);

    const updated = { ...profile, ...newProfile } as UserProfile;
    setProfile(updated);

    await updateDoc(userRef, { profile: updated });
  };

  // Mark mission as completed
  const completeMission = async (missionId: string) => {
    if (!user) return;
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, completed: true, progress: 100 } : mission
    );
    setMissions(updatedMissions);

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { missions: updatedMissions });
  };

  // Update mission progress
  const updateMissionProgress = async (missionId: string, progress: number) => {
    if (!user) return;
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, progress: Math.min(100, progress) } : mission
    );
    setMissions(updatedMissions);

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { missions: updatedMissions });
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        missions,
        badges,
        loading,
        updateProfile,
        completeMission,
        updateMissionProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
