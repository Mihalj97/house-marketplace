// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCvf_XrLJU_N9nU5P15p01iVDVYleyNtEg",
    authDomain: "house-marketplace-f3a2a.firebaseapp.com",
    projectId: "house-marketplace-f3a2a",
    storageBucket: "house-marketplace-f3a2a.appspot.com",
    messagingSenderId: "141729883876",
    appId: "1:141729883876:web:33269973c8c4bcf6b2eef1",
    measurementId: "G-9PDF948X9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fb = getFirestore()