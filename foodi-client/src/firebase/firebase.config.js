// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6wkLN-0lOuaM8EYOo_17D5jK9tCa0Eg",
  authDomain: "groccery-ecommerce.firebaseapp.com",
  projectId: "groccery-ecommerce",
  storageBucket: "groccery-ecommerce.appspot.com",
  messagingSenderId: "937994526481",
  appId: "1:937994526481:web:f129b7352331ff6b7036b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;