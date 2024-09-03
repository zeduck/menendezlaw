export default function Pictures() {

	const images = ["/office1.jpg", "/office2.jpg"];

  return (
    <div className="m-12 md:m-16">
      
      <h1 className="text-5xl md:text-6xl pb-8 md:pb-12"> Pictures </h1>
				{/* <p className="text-xl md:text-2xl pb-8 md:pb-12"></p> */}

      <div className="flex flex-row h-48 sm:h-72 md:h-80 lg:h-[30rem] justify-start gap-4 md:gap-6 items-start overflow-scroll overflow-y-auto">
				{ images.map((src) => <img src={src} alt="Office" key={src} className="snap-center rounded-3xl h-full"/>) }

      </div>
      
    </div>
  );
}
