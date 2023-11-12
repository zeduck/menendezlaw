import './App.css'
import { initializeApp } from "firebase/app";
import Hero from './components/Hero';
import Services from './components/Services';
import Section from './components/Section';
import { useInView, animated, SpringValue } from '@react-spring/web';
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
    from: { opacity: 0, y: 250, },
    to: { opacity: 1, y: 0, },
  }

  const [servicesTrigger, serviceMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [locationTrigger, locationMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [aboutusTrigger, aboutusMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  const [contactTrigger, contactMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })

  const messages: { 
    style: {
      opacity: SpringValue<number>;
      y: SpringValue<number>;
    }, 
    message: string 
  }[] = [
    {style: serviceMessage, message: 'Injustice anywhere is a threat to justice everywhere. As a refugee lawyer, I help people fleeing from persecution find peace and security in Canada.'},
    {style: locationMessage, message: 'My own family immigrated to Canada from Colombia. Being a newcomer here instilled in me a passion for others who brave everything to find happiness in a strange land.'},
    {style: aboutusMessage, message: 'If you are looking for a tireless and compassionate advocate for your refugee claim, reach out to me! I can speak Spanish and English.'},
    {style: contactMessage, message: 'My immigration firm offers help completing refugee claims and visitor visa extensions. Located right in the nation”s capital, we can work virtually or in person. I look forward to hearing from you.'},
  ];
  
  return (
    <div className='font-sans text-primary_content'>

      {/* POP UP MESSAGES */}
      { 
        messages.map(({ style, message }) => {
          return (
            <animated.div className="fixed z-50 right-12 bottom-12" style={style}> 
              <div className='bg-secondary text-secondary_content rounded-[3rem] relative py-6 px-8 ml-12 text-center md:max-w-4xl'>
                <p className='relative text-xl md:text-2xl text-center'> { message } </p> 
              </div>
            </animated.div>
          );
        }) 
      }
      
      {/* CONTENT */}
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