import './App.css'
// import { initializeApp } from "firebase/app";
import Hero from './components/Hero';
import Services from './components/Services';
import Section from './components/Section';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import Pictures from './components/Pictures';

// const firebaseConfig: { [id: string]: string | undefined } = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

export default function App() {
  // const app = initializeApp(firebaseConfig);
  
  return (
    <div className='font-sans text-primary_content'>
      
      {/* CONTENT */}
      <Hero/>

      <div className='text-center'>
        <Section> 
          <Services/> 
        </Section>
      </div>

      <div className='text-center'>
        <Section> 
          <Aboutus/> 
        </Section>
      </div>

      <div className='text-center'>
        <Section> 
          <Location/>
        </Section>
      </div>

      <div className='text-center'>
        <Section> 
          <Pictures/> 
        </Section>
      </div>


      <div className='text-center'>
        <Section> 
          <Contact/> 
        </Section>
      </div>

      <Footer/>

    </div>
  );
}