import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDzY3IMMwT9sw8dmIS_Jp6bupxy-HWUDNM",
    authDomain: "shopmock-nm.firebaseapp.com",
    projectId: "shopmock-nm",
    storageBucket: "shopmock-nm.appspot.com",
    messagingSenderId: "243807597697",
    appId: "1:243807597697:web:f0ac60adeb1899c0828980",
    measurementId: "G-H95R299KN1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;