import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB30WfKUHYD3tjx1D0b-ii3ZyP36z-Azcc",
  authDomain: "marketplace-test-f34db.firebaseapp.com",
  projectId: "marketplace-test-f34db",
  storageBucket: "marketplace-test-f34db.appspot.com",
  messagingSenderId: "519727576177",
  appId: "1:519727576177:web:c75923147a70ef5b0057d0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const database = getDatabase(app);
