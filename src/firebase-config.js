import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5d7ESxHzHUFOu-z0wT54ac6fmmax0O_0",
    authDomain: "react-instagram-clone-cd289.firebaseapp.com",
    projectId: "react-instagram-clone-cd289",
    storageBucket: "react-instagram-clone-cd289.appspot.com",
    messagingSenderId: "34279062381",
    appId: "1:34279062381:web:405d326798d1e04bfdf864",
    measurementId: "G-F8MYR5MEW9"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage();

export { db, auth, storage };

// Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg')

// Create a child reference
// const imagesRef = ref(storage, 'images');
// imagesRef now points to 'images'


// export const provider = new GoogleAuthProvider();