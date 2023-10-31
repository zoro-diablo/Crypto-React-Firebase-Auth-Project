
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDRtvT8QSN3oUyiwm0nnDafppyFPIEbNJ8',
  authDomain: 'coin-z-market.firebaseapp.com',
  projectId: 'coin-z-market',
  storageBucket: 'coin-z-market.appspot.com',
  messagingSenderId: '502774870414',
  appId: '1:502774870414:web:4de4fc9ceb5cc3845eb4df',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
