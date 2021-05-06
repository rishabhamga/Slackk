import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAxXY40LY2aSlwi6auZVmNSyOwgkF_6_pU",
    authDomain: "slackk-e485b.firebaseapp.com",
    projectId: "slackk-e485b",
    storageBucket: "slackk-e485b.appspot.com",
    messagingSenderId: "35228686096",
    appId: "1:35228686096:web:ea52c6a0b1b44d455a3795",
    measurementId: "G-JPPHMB118N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db