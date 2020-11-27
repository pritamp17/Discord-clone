// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
 "your firebasse configs"
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
