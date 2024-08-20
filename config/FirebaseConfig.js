// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAzxq3f8sAEjdnbDrc1fy6xJgf4AKXNn7U",
  authDomain: "hotel-377e5.firebaseapp.com",
  projectId: "hotel-377e5",
  storageBucket: "hotel-377e5.appspot.com",
  messagingSenderId: "810415414394",
  appId: "1:810415414394:web:98e824c049699d12ed2fc3",
  measurementId: "G-FB1P35W796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(db)
// const analytics = getAnalytics(app);