import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh8ltNH8Oq66RNfMQbNYLJawFbu68sbFk",
  authDomain: "revison-d96b3.firebaseapp.com",
  projectId: "revison-d96b3",
  storageBucket: "revison-d96b3.appspot.com",
  messagingSenderId: "1049116039173",
  appId: "1:1049116039173:web:d32cebd0d015d6dbf3e46c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
