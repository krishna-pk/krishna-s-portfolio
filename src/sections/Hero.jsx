import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import StrokeText from "../components/StrokeText";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

      {/* Hero Glass Card */}
      <div
        ref={heroRef}
        className="flex h-150 w-full max-w-6xl items-center gap-12 rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm"
      >

        {/* Profile */}
        <div className="flex w-[40%] items-center justify-center">
          <div className="h-78 w-78 rounded-full bg-white" />
        </div>

        {/* Content */}
        <div className="w-[60%] text-left">

          <p className="mb-4 text-2xl leading-none text-purple-300">
            Hi, I'm
          </p>

          {/* Animated Name */}
          <div className="w-full max-w-2xl">
            <StrokeText
              
              text="KRISHNA KUMAR P"
              strokeColor="#A78BFA"
              fillColor="#FFFFFF"
              strokeWidth={1.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.05}
              fontSize={110}
              fontWeight={800}
              letterSpacing={-4}
              trigger="mount"
              fillMode="wipe"
            />
          </div>

          {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-white/80 md:text-4xl">
            Kumar P
          </h2> */}

          <p className="mt-5 text-xl font-medium text-purple-200 md:text-2xl">
            Computer Science Student
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            A passionate Computer Science student building real-world
            software solutions by turning ideas into clean, useful,
            and modern digital experiences.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;