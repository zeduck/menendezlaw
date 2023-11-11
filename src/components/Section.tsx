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
    <animated.div ref={faderef} style={fadein}>
      <div ref={ref} className="m-3 md:m-6 mb-12 md:mb-24 border-2 border-transparent bg-base_100 relative rounded-[3rem] max-w-[100rem] inline-block text-left">
        { children }
      </div>
    </animated.div>
  );
}