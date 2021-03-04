import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGeS0C61phYD4ncpsg-dq9fPecw_84rTk",
    authDomain: "wri-dates.firebaseapp.com",
    projectId: "wri-dates",
    storageBucket: "wri-dates.appspot.com",
    messagingSenderId: "793521858710",
    appId: "1:793521858710:web:fcd77e7c3c8e44a1e8fab7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;