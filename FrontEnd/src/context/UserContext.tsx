import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { doc, getDoc, updateDoc, collection, onSnapshot } from "firebase/firestore";
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
  accepted: boolean;
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
  acceptMission: (missionId: string) => Promise<void>;
  completeMission: (missionId: string) => Promise<void>;
  updateMissionProgress: (missionId: string, progress: number) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

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
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setProfile(userData.profile || null);
          setBadges(userData.badges || []);
        }

        // Fetch global missions
        unsubMissions = onSnapshot(collection(db, "missions"), (snapshot) => {
          const globalMissions = snapshot.docs.map(
            (docSnap) =>
              ({
                id: docSnap.id,
                ...docSnap.data(),
              } as Omit<Mission, "completed" | "progress" | "accepted">)
          );

          const userMissions: Mission[] = (userSnap.data()?.missions || []).map((m: Mission) => m);

          const merged: Mission[] = globalMissions.map((gm) => {
            const progressData = userMissions.find((m) => m.id === gm.id);
            return {
              ...gm,
              completed: progressData?.completed || false,
              progress: progressData?.progress || 0,
              accepted: progressData?.accepted || false,
            };
          });

          setMissions(merged);
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

  // Update profile
  const updateProfile = async (newProfile: Partial<UserProfile>) => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);
    const updated = { ...profile, ...newProfile } as UserProfile;
    setProfile(updated);
    await updateDoc(userRef, { profile: updated });
  };

  const acceptMission = async (missionId: string) => {
    if (!user) return;
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, accepted: true, progress: 0 } : mission
    );
    setMissions(updatedMissions);

    const acceptedOnly = updatedMissions.filter((m) => m.accepted);
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { missions: acceptedOnly });
  };

 const completeMission = async (missionId: string) => {
  if (!user) return;

  const updatedMissions = missions.map((mission) =>
    mission.id === missionId
      ? { ...mission, completed: true, progress: 100, accepted: true }
      : mission
  );

  setMissions(updatedMissions);

  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, { missions: updatedMissions });
};

  const updateMissionProgress = async (missionId: string, progress: number) => {
    if (!user) return;
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, progress: Math.min(100, progress) } : mission
    );
    setMissions(updatedMissions);

    const acceptedOnly = updatedMissions.filter((m) => m.accepted);
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { missions: acceptedOnly });
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        missions,
        badges,
        loading,
        updateProfile,
        acceptMission,
        completeMission,
        updateMissionProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
