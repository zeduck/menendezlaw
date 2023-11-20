export default function Contact() {
  return (
    <div className="m-12 md:m-16">

        <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Contact </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12">I look forward to hearing from you!</p>
        

      <div className="bg-primary text-primary_content rounded-3xl w-full p-6 md:p-12 flex flex-col justify-start gap-5 text-xl md:text-2xl">
        {/* <div>
          <a href="mailto:example@email.com" className="underline hover:text-secondary_focus">example@email.com</a>
        </div> */}
        <div>
          <a href="tel:+16138608998" className="underline hover:text-secondary_focus">+1 613 860 8998</a>
        </div>
      </div>
    </div>
  );
}
