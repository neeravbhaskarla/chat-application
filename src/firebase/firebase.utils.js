import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBu_qyiWwL3HUZ8snc0VT-rtv76AS5OYls",
    authDomain: "chat-application-a41a4.firebaseapp.com",
    projectId: "chat-application-a41a4",
    storageBucket: "chat-application-a41a4.appspot.com",
    messagingSenderId: "390514762589",
    appId: "1:390514762589:web:8a71c9abeb2ae746357eb4",
    measurementId: "G-1G0Z697GZ4"
};

const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore()  
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()