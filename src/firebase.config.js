import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdY6eLYxw8IJvZL2eSASOz1yPZMHzzR5A',
  authDomain: 'house-marketplace-app-24486.firebaseapp.com',
  projectId: 'house-marketplace-app-24486',
  storageBucket: 'house-marketplace-app-24486.appspot.com',
  messagingSenderId: '625104784663',
  appId: '1:625104784663:web:a1c8131dfb95967b74bb52',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
