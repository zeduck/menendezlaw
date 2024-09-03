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
      body: 'For humanitarian applications, I regularly prepare applications for permanent residence on humanitarian grounds (“H&C Applications”). These are paper-based applications made to Immigration, Refugees and Citizenship Canada (IRCC).'
    }, {
      title: 'Permanent residency applications',
      body: ''
    }
  ];
  const visible = [useState(false), useState(false), useState(false)];

  return (
      <div className="m-12 md:m-16">
        <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Services </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12"> Injustice anywhere is a threat to justice everywhere. As a refugee lawyer, I help people fleeing from persecution to find peace and security in Canada. I accept legal aid certificates and private clients.</p>
        <div className="flex flex-col justify-between gap-4 md:gap-6">
          
          {visible.map(([getVisible, setVisible], index) => {
            return (
              <button onClick={() => setVisible(!getVisible)} className={`bg-primary text-primary_content text-left rounded-3xl w-full p-6 md:p-8 hover:-translate-y-1 hover:bg-primary_focus hover:cursor-pointer break-words overflow-hidden transition-all`}>
                <h1 className="text-2xl md:text-3xl"> { cards[index].title } </h1>
                <p className={`text-lg md:text-xl transition-all ${!getVisible && 'max-h-0 text-transparent'} ${getVisible && 'max-h-96 pt-4 md:pt-6'}`}> { cards[index].body } </p>
              </button>
            )
          })}

          <button className={`bg-primary text-primary_content text-left rounded-3xl w-full p-4 md:p-8 hover:-translate-y-1 break-words overflow-hidden transition-all`}>
            <h1 className="text-2xl md:text-3xl"> { cards[3].title } </h1>
          </button> 

        </div>
      </div>

  );
}