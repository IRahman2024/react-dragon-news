// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtja4wn_LtEXHYvl-DTZohAuw4w9azP4",
  authDomain: "react-dragon-news-588d8.firebaseapp.com",
  projectId: "react-dragon-news-588d8",
  storageBucket: "react-dragon-news-588d8.appspot.com",
  messagingSenderId: "953901397980",
  appId: "1:953901397980:web:c4caa94baf8fa27965c119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
