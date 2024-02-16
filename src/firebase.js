import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbTOCwzHCkNEYoNNIEa7pkKK724kpa1nM",
    authDomain: "fir-auth-d0dfe.firebaseapp.com",
    projectId: "fir-auth-d0dfe",
    storageBucket: "fir-auth-d0dfe.appspot.com",
    messagingSenderId: "705929873228",
    appId: "1:705929873228:web:03e3bb13e848591e17b1e9",
    measurementId: "G-S9CFS2WNDC"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };