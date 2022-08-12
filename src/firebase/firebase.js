import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyApC8oCTKovYyDdh2FdAxhVAfAzlZ1my3A",
  authDomain: "kaizen-store-rodrigo-monfasani.firebaseapp.com",
  projectId: "kaizen-store-rodrigo-monfasani",
  storageBucket: "kaizen-store-rodrigo-monfasani.appspot.com",
  messagingSenderId: "852796940831",
  appId: "1:852796940831:web:7d6ceb7747518afed2ab2a"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
