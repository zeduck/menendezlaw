import './App.css'
import { initializeApp } from "firebase/app";
import Hero from './components/Hero';
import Services from './components/Services';
import Section from './components/Section';
// import { useInView, animated, SpringValue } from '@react-spring/web';
import { useRef } from 'react';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import Pictures from './components/Pictures';

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

  // useRefs for future navbar
  const services = useRef(null!);
  const location = useRef(null!);
  const aboutus = useRef(null!);
  const pictures = useRef(null!);
  const contact = useRef(null!);

  // --------------------------------- ALL COMMENTS ARE FOR THE POP UP MESSAGES ---------------------------------
  // const messageFade = {
  //   from: { opacity: 0, y: -250, },
  //   to: { opacity: 1, y: 0, },
  // }

  // const [servicesTrigger, serviceMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  // const [locationTrigger, locationMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  // const [aboutusTrigger, aboutusMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })
  // const [contactTrigger, contactMessage] = useInView(() => (messageFade), { rootMargin: '-49% 0px', })

  // const messages: { 
  //   style: {
  //     opacity: SpringValue<number>;
  //     y: SpringValue<number>;
  //   }, 
  //   message: string 
  // }[] = [
  //   {style: serviceMessage, message: "Injustice anywhere is a threat to justice everywhere. As a refugee lawyer, I help people fleeing from persecution to find peace and security in Canada."},
  //   {style: aboutusMessage, message: "If you are looking for a tireless and compassionate advocate for your refugee claim, reach out to me! I can speak Spanish and English. "},
  //   {style: locationMessage, message: "My immigration firm offers help completing refugee claims and visitor visa extensions. Located right in the nation's capital, we can work virtually or in person."},
  //   {style: contactMessage, message: "I look forward to hearing from you!"},
  // ];
  
  return (
    <div className='font-sans text-primary_content'>

      {/* POP UP MESSAGES */}
      {/* { 
        messages.map(({ style, message }) => {
          return (
            <animated.div className="fixed z-50 left-1/2 top-4 md:top-6" style={style}> 
              <div className='-translate-x-1/2 bg-secondary text-secondary_content rounded-[3rem] relative py-6 px-8 w-max max-w-[90vw] lg:max-w-5xl'>
                <p className='relative text-xl md:text-2xl text-center'> { message } </p> 
              </div>
            </animated.div>
          );
        }) 
      } */}
      
      {/* CONTENT */}
      <Hero/>

      <div className='text-center'>
        <Section ref={services}> 
          <Services/> 
          {/* <div ref={servicesTrigger} className='absolute h-3/4 left-1/2 top-1/2 -translate-y-1/2 z-10'/> */}
        </Section>
      </div>

      <div className='text-center'>
        <Section ref={aboutus}> 
          <Aboutus/> 
          {/* <div ref={aboutusTrigger} className='absolute h-3/4 left-1/2 top-1/2 -translate-y-1/2 z-10'/> */}
        </Section>
      </div>

      <div className='text-center'>
        <Section ref={location}> 
          <Location/>
          {/* <div ref={locationTrigger} className='absolute h-3/4 left-1/2 top-1/2 -translate-y-1/2 z-10'/> */}
        </Section>
      </div>

      <div className='text-center'>
        <Section ref={pictures}> 
          <Pictures/> 
          {/* <div ref={contactTrigger} className='absolute h-3/4 left-1/2 top-1/2 -translate-y-1/2 z-10'/> */}
        </Section>
      </div>


      <div className='text-center'>
        <Section ref={contact}> 
          <Contact/> 
          {/* <div ref={contactTrigger} className='absolute h-3/4 left-1/2 top-1/2 -translate-y-1/2 z-10'/> */}
        </Section>
      </div>

      <Footer/>

    </div>
  );
}