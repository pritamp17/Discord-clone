// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyASG4tZw6oaWC-1FGAyY93kgzpVue4-hHk",
    authDomain: "discord-245b0.firebaseapp.com",
    databaseURL: "https://discord-245b0.firebaseio.com",
    projectId: "discord-245b0",
    storageBucket: "discord-245b0.appspot.com",
    messagingSenderId: "821547167048",
    appId: "1:821547167048:web:e093c478fb93264408577d",
    measurementId: "G-ZMMWB5V8TY"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export {auth,provider} ;
  // export default db;


// import firebase from 'firebase'

// const firebaseConfig = {
//     // your firebase config
// };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db