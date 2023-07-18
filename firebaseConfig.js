// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvnICQ5K9vAp5hFwb3teNU8mXbAr3ARKo",
  authDomain: "village-square-shipping.firebaseapp.com",
  projectId: "village-square-shipping",
  storageBucket: "village-square-shipping.appspot.com",
  messagingSenderId: "744334598163",
  appId: "1:744334598163:web:090e829698b0aa46f89fe6",
  measurementId: "G-T9V0NCQZD4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// export const analytics = getAnalytics(app);
