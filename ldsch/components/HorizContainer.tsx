
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HorizContainer = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-430vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000 bottom",
          scrub: 0.3,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden overflow-x-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-[100vh] w-[520vw] relative flex flex-row md:ml-[10em] bg-[#fddffd]">
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center border bg-fondo-2">
            <h3>Section 1</h3>
            <img src='logo-long_WhiteCentered.png' alt='/' className="pl-[10em] border" />
          </div>
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center border bg-gray">
            <h3>Section 2</h3>
            <img src='logo-long_WhiteCentered.png' alt='/' />
          </div>
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center border bg-fondo-2">
            <h3>Section 3</h3>
            <img src='logo-long_WhiteCentered.png' alt='/' />
          </div>
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center border bg-active-item">
            <h3>Section 4</h3>
            <img src='logo-long_WhiteCentered.png' alt='/' />
          </div>
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center bg-gray">
            <h3>Section 5</h3>
          </div>
          <div className="h-[100vh] w-[87vw] flex flex-col justify-center items-center border bg-fondo-2">
            <h3> 6</h3>
            {/* <img src='logo-long_WhiteCentered.png' alt='/' className="sticky border" /> */}
            <div className="h-[10em] w-[90%] bg-fondo-1 border"></div>
          </div>
        </div>

      </div>
    </section>
  );
}



export default HorizContainer;