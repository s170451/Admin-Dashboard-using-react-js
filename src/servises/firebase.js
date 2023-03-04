// Import the functions you need from the SDKs you need
import React from 'react';
import ReactDOM from 'react-dom';
import App1 from '../App1';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import { ContextProvider } from '../context/ContextProvider';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwnbcTBNJ5tzFAYTKX6RFoPiYnvsmFbxM",
  authDomain: "miniproject--auth.firebaseapp.com",
  projectId: "miniproject--auth",
  storageBucket: "miniproject--auth.appspot.com",
  messagingSenderId: "19385211356",
  appId: "1:19385211356:web:2336b72dc6d5f1f4eed719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profile= result.user.photoURL;
    

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profile",profile);

    ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <App1 />
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  ); 
  }).catch(error => console.log(error))
}
