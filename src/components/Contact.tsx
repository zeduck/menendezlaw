import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="m-12 md:m-16">

      <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Contact </h1>
      <p className="text-xl md:text-2xl pb-8 md:pb-12">I look forward to hearing from you!</p>
      
      <div className="flex flex-col w-full justify-start gap-5">
        <a href="mailto:davidmenendezlaw@gmail.com" className="bg-primary text-primary_content hover:bg-primary_focus hover:-translate-y-1 transition-all rounded-3xl w-full p-6 md:p-8 text-xl md:text-2xl flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <MdEmail className="w-5 md:w-7 h-5 md:h-7 min-w-5" />
          <p className="break-all select-all">davidmenendezlaw@gmail.com</p>
        </a>
        
        <a href="tel:+16138608998" className="bg-primary text-primary_content hover:bg-primary_focus rounded-3xl hover:-translate-y-1 transition-all w-full p-6 md:p-8 text-xl md:text-2xl flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <MdPhone className="w-5 md:w-7 h-5 md:h-7 min-w-5" />
          <p className="break-all select-all">+1 613 860 8998</p>
        </a>
        
        <a href="https://www.linkedin.com/in/david-ricardo-menéndez-ortiz-a2183091" className="bg-primary text-primary_content hover:bg-primary_focus hover:-translate-y-1 transition-all rounded-3xl w-full p-6 md:p-8 text-xl md:text-2xl flex flex-row justify-start gap-2 sm:gap-4 items-center">
          <FaLinkedin className="w-5 md:w-7 h-5 md:h-7 min-w-5" />
          <p className="break-all select-all">LinkedIn</p>
        </a>
      </div>

    </div>
  );
}
