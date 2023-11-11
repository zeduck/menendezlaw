import './App.css'
import { initializeApp } from "firebase/app";
import Hero from './components/Hero';
import Services from './components/Services';
import Section from './components/Section';
import { useInView, animated } from '@react-spring/web';
import { useRef } from 'react';

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

  const services = useRef(null!);
  const location = useRef(null!);
  const aboutus = useRef(null!);
  const contact = useRef(null!);

  const messageFade = {
    from: { opacity: 0, y: -250, },
    to: { opacity: 1, y: 0, },
  }

  const [servicesTrigger, serviceMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [locationTrigger, locationMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [aboutusTrigger, aboutusMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [contactTrigger, contactMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  
  return (
    <div className='font-sans text-primary_content'>
      
      <animated.div className="fixed z-50 left-1/2 top-12 " style={serviceMessage}> 
        <div className='-translate-x-1/2 bg-secondary text-secondary_content rounded-[3rem] relative p-12 text-center'>
          <p className='relative text-5xl text-center'>ONE</p> 
        </div>
      </animated.div>

      <animated.div className="fixed z-50 left-1/2 top-12 " style={locationMessage}> 
        <div className='-translate-x-1/2 bg-secondary text-secondary_content rounded-[3rem] relative p-12 text-center'>
          <p className='relative text-5xl text-center'>TWO</p> 
        </div>
      </animated.div>

      <animated.div className="fixed z-50 left-1/2 top-12 " style={aboutusMessage}> 
        <div className='-translate-x-1/2 bg-secondary text-secondary_content rounded-[3rem] relative p-12 text-center'>
          <p className='relative text-5xl text-center'>THREE</p> 
        </div>
      </animated.div>

      <animated.div className="fixed z-50 left-1/2 top-12 " style={contactMessage}> 
        <div className='-translate-x-1/2 bg-secondary text-secondary_content rounded-[3rem] relative p-12 text-center'>
          <p className='relative text-5xl text-center'>FOUR</p> 
        </div>
      </animated.div>

      
      <Hero/>

      <div ref={servicesTrigger} className='w-full text-center'>
        <Section ref={services}> <Services/> </Section>
      </div>

      <div ref={locationTrigger} className='w-full text-center'>
        <Section ref={location}> <Services/> </Section>
      </div>

      <div ref={aboutusTrigger} className='w-full text-center'>
        <Section ref={aboutus}> <Services/> </Section>
      </div>

      <div ref={contactTrigger} className='w-full text-center'>
        <Section ref={contact}> <Services/> </Section>
      </div>

    </div>
  );
}