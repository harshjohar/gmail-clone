// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDK6axWm118FmK-2OnPuTRcTBKLMUvnHZE',
  authDomain: 'harsh-bf6c2.firebaseapp.com',
  projectId: 'harsh-bf6c2',
  storageBucket: 'harsh-bf6c2.appspot.com',
  messagingSenderId: '992176249879',
  appId: '1:992176249879:web:48e1a2bffcb6aab7ad5052',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider();
export { db, auth, provider }
