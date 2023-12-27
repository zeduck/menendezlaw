import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="m-12 md:m-16">

        <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Contact </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12">I look forward to hearing from you!</p>
        

      <div className="bg-primary text-primary_content rounded-3xl w-full p-6 md:p-12 flex flex-col justify-start gap-5 text-xl md:text-2xl">
        
        <div className="flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <MdEmail className="w-5 md:w-7 h-5 md:h-7" />
          <a href="mailto:davidmenendezlaw@gmail.com" className="hover:underline hover:text-secondary_focus hidden sm:grid">davidmenendezlaw@gmail.com</a>
          <a href="mailto:davidmenendezlaw@gmail.com" className="hover:underline hover:text-secondary_focus grid sm:hidden">Email</a>
        </div>

        <div className="flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <MdPhone className="w-5 md:w-7 h-5 md:h-7" />
          <a href="tel:+16138608998" className="hover:underline hover:text-secondary_focus">+1 613 860 8998</a>
        </div>
        
        <div className="flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <FaLinkedin className="w-5 md:w-7 h-5 md:h-7" />
          <a href="https://www.linkedin.com/in/david-ricardo-menéndez-ortiz-a2183091" className="hover:underline hover:text-secondary_focus"> LinkedIn </a>
        </div>

      </div>
    </div>
  );
}
