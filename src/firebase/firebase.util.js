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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;