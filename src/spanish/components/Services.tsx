import { useState } from "react";

export default function Services() {
  const cards: { 
    title: string, 
    body: string
  }[] = [
    {
      title: 'Aplicaciones de reclamo de refugiados y preparación para audiencias',
      body: 'Si crees que estás en riesgo de persecución o daño grave en tu país de origen, puedo guiarte a través del proceso de preparar una solicitud de protección de refugiados y asistir a tu audiencia en la División de Protección de Refugiados (RPD).'
    }, {
      title: 'Extensiones de visas de visitante',
      body: 'Puedo ayudarte a preparar una solicitud para prolongar tu estatus de visitante aquí en Canadá.'
    }, {
      title: 'Solicitudes por razones humanitarias y compasivas',
      body: 'Para aplicaciones humanitarias, preparo regularmente solicitudes de residencia permanente por razones humanitarias ("Solicitudes H&C"). Estas son solicitudes basadas en papel hechas a Inmigración, Refugiados y Ciudadanía de Canadá (IRCC).'
    }, {
      title: 'Solicitudes de residencia permanente',
      body: ''
    }
  ];
  const visible = [useState(false), useState(false), useState(false)];

  return (
      <div className="m-12 md:m-16">
        <h1 className="text-5xl md:text-6xl pb-6 md:pb-8"> Servicios </h1>
        <p className="text-xl md:text-2xl pb-8 md:pb-12"> La injusticia en cualquier lugar es una amenaza para la justicia en todas partes. Como abogado de refugiados, ayudo a personas que huyen de la persecución a encontrar paz y seguridad en Canadá. Acepto certificados de asistencia legal y clientes privados. </p>
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