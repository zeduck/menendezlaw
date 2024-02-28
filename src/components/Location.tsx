import { MdCheck } from 'react-icons/md';

export default function Location() {
  const abouts = ['Language assistance', 'Elevator accessible', 'Washroom'];

  return (
    <div className="m-12 md:m-16">
      
      <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Location </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12">My immigration firm offers help completing refugee claims and visitor visa extensions. Located right in the nation's capital, we can work virtually or in person.</p>
        

      <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-6 items-stretch">
        {/* TEXT */}
        <div className="flex-[2] flex flex-col justify-between items-stretch gap-4 md:gap-6">

          {/* HOURS */}
          <div className="flex-1 rounded-3xl p-6 md:p-8 bg-primary text-primary_content">
            <h1 className="text-2xl md:text-3xl pb-6 md:pb-8"> Hours </h1>

            <hr></hr>
            <div className="flex flex-row justify-between text-lg md:text-xl py-6">
              <p>Monday - Friday</p>
              <p>9 am - 5 pm</p>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between text-lg md:text-xl py-6">
              <p>Saturday - Sunday</p>
              <p>Closed</p>
            </div>
            <hr className='pb-2'></hr>
          </div>

          {/* ABOUTS */}
          <div className="flex-1 rounded-3xl p-6 md:p-8 bg-primary text-primary_content flex flex-col justify-evenly gap-3 md:gap-6">
            { abouts.map((about) => 
              <div key={about} className="flex flex-row justify-start gap-4 md:gap-6 overflow-visible">
                <MdCheck className='w-[24px] h-[24px]'/>
                <p className='text-lg md:text-xl'>{about}</p>
              </div>
            ) }
          </div>

        </div>

        {/* MAP */}
        <div className="flex-[2] xl:flex-[3] transition-all">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0791013428743!2d-75.69703852341675!3d45.42790677107342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce052c0ccce04d%3A0xfcb93cdfcca207c3!2sMenendez%20Law%20Refugee%20and%20Immigration!5e0!3m2!1sen!2sca!4v1694661097560!5m2!1sen!2sca" 
            className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
      
    </div>
  );
}
