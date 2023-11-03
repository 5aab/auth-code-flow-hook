// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZjl8YinzF1MSETixQTtaHyCbK1K0AA8s",
    authDomain: "react-auth-7769e.firebaseapp.com",
    projectId: "react-auth-7769e",
    storageBucket: "react-auth-7769e.appspot.com",
    messagingSenderId: "1043253313992",
    appId: "1:1043253313992:web:3cbb8a715b2138e0fdc0fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export {auth, provider}