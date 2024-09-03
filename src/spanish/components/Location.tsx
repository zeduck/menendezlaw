import { MdCheck } from 'react-icons/md';
import { Suspense, lazy } from 'react';
import Loading from './mapsLoad/Loading.tsx';

export default function Location() {
  const abouts = ['Asistencia lingüística', 'Acceso a ascensor', 'Baño'];
  const Maps = lazy(() => import("./mapsLoad/maps.tsx"));
  
  return (
    <div className="m-12 md:m-16">
      
      <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Ubicación </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12">Mi firma de inmigración ofrece ayuda para completar reclamos de refugiados y extensiones de visas de visitante. Ubicados en la capital de la nación, podemos trabajar virtualmente o en persona.</p>
        

      <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-6 items-stretch">
        {/* TEXT */}
        <div className="flex-[2] flex flex-col justify-between items-stretch gap-4 md:gap-6">

          {/* HOURS */}
          <div className="flex-1 rounded-3xl p-6 md:p-8 bg-secondary text-secondary_content">
            <h1 className="text-xl md:text-2xl pb-6 md:pb-8"> Horario </h1>

            <hr></hr>
            <div className="flex flex-row justify-between text-lg md:text-xl py-6">
              <p>Lunes a viernes</p>
              <p>9 am - 5 pm</p>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between text-lg md:text-xl py-6">
              <p>Sábado a domingo</p>
              <p>Cerrado</p>
            </div>
            <hr className='pb-2'></hr>
          </div>

          {/* ABOUTS */}
          <div className="flex-1 rounded-3xl p-6 md:p-8 bg-secondary text-secondary_content flex flex-col justify-evenly gap-3 md:gap-6">
            { abouts.map((about) => 
              <div key={about} className="flex flex-row justify-start gap-4 md:gap-6 overflow-visible">
                <MdCheck className='w-[24px] h-[24px]'/>
                <p className='text-lg md:text-xl'>{about}</p>
              </div>
            ) }
          </div>

        </div>

        {/* MAP */}
        <Suspense fallback={<Loading/>}>
          <Maps />
        </Suspense>

      </div>
      
    </div>
  );
}
