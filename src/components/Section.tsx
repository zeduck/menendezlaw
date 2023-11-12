import { Ref } from "react";
import { useInView, animated } from "@react-spring/web";

export default function Section({
  ref,
  children 
}: {
  ref: Ref<HTMLDivElement>,
  children: React.ReactNode
}) {

  const [faderef, fadein] = useInView(
    () => ({ from: { opacity: 0, y: 20, }, to: { opacity: 1, y: 0, }, }),
    { rootMargin: '-15% 0px', }
  )

  return (
    <animated.div ref={faderef} style={fadein} className="w-full">
      <div ref={ref} className="m-3 md:m-6 mb-8 md:mb-16 bg-base_100 text-base_content relative rounded-[3rem] w-[90vw] xl:max-w-7xl inline-block text-left">
        { children }
      </div>
    </animated.div>
  );
}