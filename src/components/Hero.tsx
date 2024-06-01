export default function Hero() {
  return (
    <div className="m-3 md:m-6 mb-12 md:mb-24 border-2 border-transparent relative overflow-hidden rounded-[3rem]">
      
      <div 
        className="absolute w-full h-full brightness-[.6] bg-center bg-cover saturate-50 blur-[1px]"
        style={{ backgroundImage: "url('/bricks.jpg')" }}
      />
      
      <div className="my-36 md:my-48 xl:my-64 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl lg:text-[8rem] pb-8 md:pb-12 font-medium">Menendez Law</h1>
        <p className="text-2xl md:text-4xl lg:text-6xl font-medium">Refugee and Immigration</p>
      </div>
    
    </div>
  );
}
