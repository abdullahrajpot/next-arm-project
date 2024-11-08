// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAGpZnQdHsTnLZUH7zlYD2zPJFc0qdJFk",
  authDomain: "nextarm-44.firebaseapp.com",
  projectId: "nextarm-44",
  storageBucket: "nextarm-44.appspot.com",
  messagingSenderId: "495322252779",
  appId: "1:495322252779:web:456b6cc703ce8b196385ae",
  measurementId: "G-1163RPHV16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);


export { storage };