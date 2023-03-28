import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFqfdtYHEo5Y9nlgHLRU2DKTyxfAxmn_4",
  authDomain: "netflix-clone-d7ea7.firebaseapp.com",
  projectId: "netflix-clone-d7ea7",
  storageBucket: "netflix-clone-d7ea7.appspot.com",
  messagingSenderId: "680975892499",
  appId: "1:680975892499:web:f930a55a05aa3374d23fe6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db