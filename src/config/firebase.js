import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB30WfKUHYD3tjx1D0b-ii3ZyP36z-Azcc",
  authDomain: "marketplace-test-f34db.firebaseapp.com",
  projectId: "marketplace-test-f34db",
  storageBucket: "marketplace-test-f34db.appspot.com",
  messagingSenderId: "519727576177",
  appId: "1:519727576177:web:c75923147a70ef5b0057d0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
