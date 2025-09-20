import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6LShnmiJQpE5KWGTnaTTaCKzS8KlSaA0",
  authDomain: "aurafarmers.firebaseapp.com",
  projectId: "aurafarmers",
  storageBucket: "aurafarmers.firebasestorage.app",
  messagingSenderId: "869379543910",
  appId: "1:869379543910:web:0ac1749b416ec97789eea7",
  measurementId: "G-N5JGC1YC4V"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };