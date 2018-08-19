import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}

const fire = firebase.initializeApp(config)
export default fire