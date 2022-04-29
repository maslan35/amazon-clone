import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQVDmespwT5DUJkK0lbLtCw13m-HgAFpk",
    authDomain: "clone-533dc.firebaseapp.com",
    projectId: "clone-533dc",
    storageBucket: "clone-533dc.appspot.com",
    messagingSenderId: "44927896492",
    appId: "1:44927896492:web:39df8ee2c79e209deb8809",
    measurementId: "G-WG315L3GBS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };