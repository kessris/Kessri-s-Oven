import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

const config = {
    apiKey: "AIzaSyDG8bZ_Cte8Kju_PcFsiz8xV18IQULBSvQ",
    authDomain: "kessri-s-oven.firebaseapp.com",
    databaseURL: "https://kessri-s-oven.firebaseio.com",
    projectId: "kessri-s-oven",
    storageBucket: "kessri-s-oven.appspot.com",
    messagingSenderId: "626356081774",
    appId: "1:626356081774:web:5c0d4d9b39c0d67081027f",
    measurementId: "G-P7PEZYCBXL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
