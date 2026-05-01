import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.vite_firebase_api_ley,
  authDomain: iconst firebaseConfig = {
  apiKey: import.meta.env.vite_firebase_api_key,
  authDomain: import.meta.env.vite_firebase_auth_domain,
  projectId: import.meta.env.vite_firebase_project_id,
  storageBucket: import.meta.env.vite_firebase_storage_bucket,
  messagingSenderId: import.meta.env.vite_firebase_messaging_sender_id,
  appId: import.meta.env.vite_firebase_app_id
};