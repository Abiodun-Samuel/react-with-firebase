// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6kvRp5zhZkGwiIWgjcUrwwUuNWmVI-j8",
  authDomain: "blog-with-react-708af.firebaseapp.com",
  projectId: "blog-with-react-708af",
  storageBucket: "blog-with-react-708af.appspot.com",
  messagingSenderId: "328383976133",
  appId: "1:328383976133:web:ffbb3221bd5d0c539b16ac",
  measurementId: "G-GPWN41TD4N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, "posts");

export const provider = new GoogleAuthProvider();
