import { useState } from "react";

export default function Services() {
  const cards: { 
    title: string, 
    body: string
  }[] = [
    {
      title: 'Refugee claim applications and hearing preparation',
      body: 'If you believe you are at risk of persecution or serious harm in your country of origin, I can guide you through the process of preparing a claim for refugee protection and attending your hearing at the Refugee Protection Division (RPD).'
    }, {
      title: 'Visitor visa extensions',
      body: 'I can help you prepare an application to prolong your visitor status here in Canada.'
    }, {
      title: 'Humanitarian & compassionate ground applications',
      body: 'For humanitarian applications - I regularly prepare applications for permanent residence on humanitarian grounds (“H&C Applications”). These are paper-based applications made to Immigration, Refugees and Citizenship Canada (IRCC).'
    }, {
      title: 'Permanent residency applications',
      body: ''
    }
  ];

  const [ visible1, setVisible1 ] = useState(false);
  const [ visible2, setVisible2 ] = useState(false);
  const [ visible3, setVisible3 ] = useState(false);
  const [ visible4, setVisible4 ] = useState(false);

  return (
      <div className="m-12 md:m-16">
        <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Services </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12"> Injustice anywhere is a threat to justice everywhere. As a refugee lawyer, I help people fleeing from persecution to find peace and security in Canada. I accept legal aid certificates and private clients.</p>
        <div className="flex flex-col justify-between gap-4 md:gap-6">
          
          <div onClick={() => setVisible1(!visible1)} className={`bg-primary text-primary_content rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 hover:bg-primary_focus hover:cursor-pointer break-words overflow-hidden transition-all`}>
            <h1 className="text-2xl lg:text-3xl"> { cards[0].title } </h1>
            <p className={`text-lg md:text-xl pt-4 md:pt-6 transition-all ${!visible1 && 'hidden'} ${visible1 && 'grid'}`}> { cards[0].body } </p>
          </div>
          
          <div onClick={() => setVisible2(!visible2)} className={`bg-primary text-primary_content rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 hover:bg-primary_focus hover:cursor-pointer break-words overflow-hidden transition-all`}>
            <h1 className="text-2xl lg:text-3xl"> { cards[1].title } </h1>
            <p className={`text-lg md:text-xl pt-4 md:pt-6 transition-all ${!visible2 && 'hidden'} ${visible2 && 'grid'}`}> { cards[1].body } </p>
          </div>
          
          <div onClick={() => setVisible3(!visible3)} className={`bg-primary text-primary_content rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 hover:bg-primary_focus hover:cursor-pointer break-words overflow-hidden transition-all`}>
            <h1 className="text-2xl lg:text-3xl"> { cards[2].title } </h1>
            <p className={`text-lg md:text-xl pt-4 md:pt-6 transition-all ${!visible3 && 'hidden'} ${visible3 && 'grid'}`}> { cards[2].body } </p>
          </div>

          <div onClick={() => setVisible4(!visible4)} className={`bg-primary text-primary_content rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 hover:bg-primary_focus hover:cursor-pointer break-words overflow-hidden transition-all`}>
            <h1 className="text-2xl lg:text-3xl"> { cards[3].title } </h1>
            <p className={`text-lg md:text-xl pt-4 md:pt-6 transition-all ${!visible4 && 'hidden'} ${visible4 && 'grid'}`}> { cards[3].body } </p>
          </div>
          
          {/* {
            cards.map(({ title, body}) => {
              return (
                <div onClick={toggleVisible} className={`bg-primary text-primary_content rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 hover:bg-primary_focus break-words overflow-hidden ${!visible && 'h-24'} ${visible && 'h-full'} transition-all`}>
                  <h1 className="text-2xl lg:text-3xl"> { title } </h1>
                  <p className="text-lg md:text-xl pt-4 md:pt-6"> { body } </p>
                </div>
              );
            })
          } */}
        </div>
      </div>

  );
}