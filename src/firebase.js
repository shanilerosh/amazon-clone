import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUXBBGIuPXsh0_Kaa9GY6KylFz6ukAq7k",
  authDomain: "challlenge-6b3bd.firebaseapp.com",
  projectId: "challlenge-6b3bd",
  storageBucket: "challlenge-6b3bd.appspot.com",
  messagingSenderId: "362860174595",
  appId: "1:362860174595:web:3ed86798d3d54116fd9d36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
