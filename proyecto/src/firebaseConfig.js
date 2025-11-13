import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDoO8Lq49w60yEOVl0HAF7-6-deT4lF7OY",
  authDomain: "pokeapi-c68f9.firebaseapp.com",
  projectId: "pokeapi-c68f9",
  storageBucket: "pokeapi-c68f9.firebasestorage.app",
  messagingSenderId: "60073015100",
  appId: "1:60073015100:web:856bb9398a659f89831039"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };