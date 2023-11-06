import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage,  } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_GAx1J1r_uPVH4Jva8Eg0UUvm5zYw1Lg",
  authDomain: "gym-link-4e8d0.firebaseapp.com",
  projectId: "gym-link-4e8d0",
  storageBucket: "gym-link-4e8d0.appspot.com",
  messagingSenderId: "372294035257",
  appId: "1:372294035257:web:d41b1c08384141b8f5aae8",
  measurementId: "G-GM5BRJNWSH",
  storage: "gs://gym-link-4e8d0.appspot.com"
};

let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (error) {
    console.log(error)
  }
} else {
  app = getApp();
  auth = getAuth();
}

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };