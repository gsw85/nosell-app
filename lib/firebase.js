// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  ref,
  getDownloadURL,
  getMetadata,
  listAll,
  uploadBytes,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_ANALYTIC_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google Analytic, Firebase Authentication, Firestore, and Storage

// Checking for window object for Google analytic
export let analytics;
if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref;
export const getStorageDownloadURL = getDownloadURL;

export const getStorageMetadata = getMetadata;
export const storageListAll = listAll;
export const storageUploadFileData = uploadBytes;

// other exports
export const authState = onAuthStateChanged;
export const signIN = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
