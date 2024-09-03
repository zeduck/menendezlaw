export default function Aboutus() {

  const texts = [
    'Mi propia familia inmigró a Canadá desde Colombia. Ser un recién llegado aquí me inculcó una pasión por ayudar a otros que lo arriesgan todo para encontrar la felicidad en una tierra extraña.',
    'Soy graduado de la facultad de derecho de la Universidad de Ottawa. Ahora estoy muy familiarizado con Ottawa. He ayudado a guiar a cientos de solicitantes de todo el mundo a completar sus solicitudes.',
    'Si buscas un defensor incansable y compasivo para tu reclamo de refugiado, ¡contáctame! Puedo hablar español e inglés.',
  ];

  return(
    <div className="m-12 md:m-16">
      <h1 className="text-5xl md:text-6xl pb-8 md:pb-12"> Sobre mí </h1>
      {/* FOR SMALL SCREENS (flex col) AND LARGE SCREENS (flex row) */}
      <div className="md:hidden flex lg:flex flex-col lg:flex-row justify-between gap-4 md:gap-6 items-stretch">
        
        {/* TEXT */}
        <div className="flex-[2] flex flex-col gap-3 md:gap-4 items-stretch h-full">     
          {texts.map((text) => (
            <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
              <p className="text-xl md:text-2xl">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className="flex-[2] xl:flex-[1] overflow-hidden transition-all">
          <div className="flex flex-row overflow-y-hidden overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 ">
            {/* { images.map((src) => <img src={src} alt="Image of office" className="snap-center rounded-3xl"/>) } */}
            <img src={"/portrait.jpg"} alt="self portrait" className="snap-center rounded-3xl"></img>
          </div>
        </div>
      </div>

      {/* FOR MEDIUM SIZED SCREENS */}
      <div className="md:flex hidden lg:hidden flex-row justify-between gap-4 md:gap-6 items-stretch">
        
        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-3 md:gap-4 items-stretch h-full">
          
          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[0]}
            </p>
          </div>
          
          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[1]}
            </p>
          </div>

        </div>

        {/* IMAGES AND ONE TEXT BOX*/}
        <div className="flex-1 flex flex-col gap-3 md:gap-4 items-stretch h-full">

          <div className="gap-3 md:gap-4 ">
            <img src={"/portrait.jpg"} alt="self portrait" className="snap-center rounded-3xl"></img>
          </div>

          <div className="rounded-3xl bg-secondary text-secondary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              {texts[2]}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
