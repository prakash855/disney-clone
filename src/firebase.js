import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYFHlysNLwpB6-ZDYk8OCyjxfsF9IGmtY",
  authDomain: "disney-plus-cdf5c.firebaseapp.com",
  projectId: "disney-plus-cdf5c",
  storageBucket: "disney-plus-cdf5c.appspot.com",
  messagingSenderId: "569715628773",
  appId: "1:569715628773:web:400e75e0509b893751120c",
  measurementId: "G-SRZ5TF3HDD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
