import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO-FT8kYp5EtXMwtZIfvJxFaeOoYtOyYs",
  authDomain: "fir-18742.firebaseapp.com",
  projectId: "fir-18742",
  storageBucket: "fir-18742.appspot.com",
  messagingSenderId: "937278411259",
  appId: "1:937278411259:web:f28087272347192a087b5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
