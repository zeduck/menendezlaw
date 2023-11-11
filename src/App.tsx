import './App.css'
import { initializeApp } from "firebase/app";

const firebaseConfig: { [id: string]: string | undefined } = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export default function App() {
  // const app = 
  initializeApp(firebaseConfig);
  
  return (
    <div className=' font-sans'>

      <h1 className="max-h-screen max-w-screen text-center text-7xl mt-10">Mendendez Law</h1>
    </div>
  );
}