import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSM2vaNufO90tlVM1xNooSlQr4aNOMvgQ",
  authDomain: "geekster-ecommerce.firebaseapp.com",
  projectId: "geekster-ecommerce",
  storageBucket: "geekster-ecommerce.appspot.com",
  messagingSenderId: "367342105111",
  appId: "1:367342105111:web:41dbfed03f77fdc3102252",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
