import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXdyJj-eqaXNba5JoFJT2Aq6S3JVjqmRE",
    authDomain: "instagram-clone-69a91.firebaseapp.com",
    projectId: "instagram-clone-69a91",
    storageBucket: "instagram-clone-69a91.appspot.com",
    messagingSenderId: "707307277966",
    appId: "1:707307277966:web:0c66402aaae82dcbbd03df",
    measurementId: "G-DDVM1LH1PE"
})


// import firebase from 'firebase';

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};