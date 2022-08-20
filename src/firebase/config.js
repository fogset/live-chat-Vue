import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLpVP35Rd70yNoxslQfrCHocu8XxCgRIQ",
    authDomain: "udemy-vue-firebase-sites-d6a28.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-d6a28",
    storageBucket: "udemy-vue-firebase-sites-d6a28.appspot.com",
    messagingSenderId: "619188637818",
    appId: "1:619188637818:web:84e0c227e0c3ad69fcebc3",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
