import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDhBMDU3rpZXXGLSyWXyYtcwaNNfHbLJgE",
  authDomain: "luanvan200399.firebaseapp.com",
  databaseURL:
    "https://luanvan200399-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luanvan200399",
  storageBucket: "luanvan200399.appspot.com",
  messagingSenderId: "768442659528",
  appId: "1:768442659528:web:4bcca5417d7abc722febfd",
  measurementId: "G-KPB4LLYHK3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export {db, auth};
