// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wChBBDQYtjqn6cbwbCuzkqASaVi8gPg",
  authDomain: "travel-guide-155be.firebaseapp.com",
  projectId: "travel-guide-155be",
  storageBucket: "travel-guide-155be.appspot.com",
  messagingSenderId: "567556802451",
  appId: "1:567556802451:web:66c20b03b73a87ca7d8a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;