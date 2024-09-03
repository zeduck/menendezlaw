import { Link } from "react-router-dom";
import { useInView, animated } from "@react-spring/web";

export default function Hero() {

  const [faderef, fadein] = useInView(
    () => ({ from: { y: -200, }, to: { y: 0, }, }),
    { rootMargin: '-20% 0px', }
  )

  return (
    <>
      <animated.div style={fadein} className="fixed top-10 right-10 md:top-14 md:right-14 z-50">
        <Link to={'/'}>
          <div className="bg-primary hover:bg-primary_focus text-primary_content text-2xl md:text-3xl lg:text-4xl rounded-3xl p-6 md:p-8">
            English
          </div>
        </Link>
      </animated.div>
    
      <div ref={faderef} className="m-3 md:m-6 mb-12 md:mb-24 border-2 border-transparent relative overflow-hidden rounded-[3rem]">
        
        <div 
          className="absolute w-full h-full brightness-[.6] bg-center bg-cover saturate-50 blur-[1px]"
          style={{ backgroundImage: "url('/bricks.jpg')" }}
        />
        
        <div className="my-36 md:my-48 xl:my-64 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] pb-8 md:pb-12 font-medium">Menéndez Law</h1>
          <p className="text-2xl md:text-4xl lg:text-6xl font-medium">Refugio e Inmigración</p>
        </div>
      
      </div>
    </>
  );
}
