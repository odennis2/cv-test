// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcs_Xmk1lpdVH7FiPPrYHTWwhAIjKmJgY",
  authDomain: "oscar-online-cv.firebaseapp.com",
  projectId: "oscar-online-cv",
  storageBucket: "oscar-online-cv.firebasestorage.app",
  messagingSenderId: "119568961333",
  appId: "1:119568961333:web:fd9e2a772bcf3f1cf9067c",
  measurementId: "G-DWQ12JJZPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);