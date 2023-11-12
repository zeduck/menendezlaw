export default function Aboutus() {

  const images = ["/office1.jpg", "/office2.jpg"];

  return(
    <div className="m-12 md:m-16">
      <h1 className="text-5xl md:text-6xl pb-8 md:pb-12 w-full"> About me </h1>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 items-stretch">
        
        {/* TEXT */}
        <div className="flex-[2]">
          <div className="rounded-3xl bg-primary text-primary_content p-6 md:p-8">
            <p className="text-xl md:text-2xl">
              My own family immigrated to Canada from Colombia. 
              <br/><br/> 
              Being a newcomer here instilled in me a passion for others who brave everything to find happiness in a strange land. 
            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="flex-[2] xl:flex-[3] overflow-hidden transition-all">
          <div className="flex flex-row overflow-y-hidden overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 ">
            { images.map((src) => <img src={src} alt="Image of office" className="snap-center rounded-3xl"/>) }
          </div>
        </div>
      </div>
    </div>
  );
}
