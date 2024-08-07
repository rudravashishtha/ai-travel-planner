import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-travel-planner-r7.firebaseapp.com",
  projectId: "ai-travel-planner-r7",
  storageBucket: "ai-travel-planner-r7.appspot.com",
  messagingSenderId: "968716838653",
  appId: "1:968716838653:web:2abe2c6376dbc38cddc094",
  measurementId: "G-PD1SFQBL55",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
