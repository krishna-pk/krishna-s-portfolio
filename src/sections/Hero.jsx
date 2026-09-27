import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import StrokeText from "../components/StrokeText";
import SpecularButton from "../components/SpecularButton";

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
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        {/* Hero Glass Card */}
        <div
          ref={heroRef}
          className="w-full h-full flex flex-col items-start text-left"
        >
          {/* Profile */}
          {/* <div className="flex w-[40%] items-center justify-center">
          <div className="h-78 w-78 rounded-full bg-white" />
        </div> */}

          {/* Content */}
          <div className="w-[60%] text-left">
            <p className="mb-4 text-5xl  text-purple-300">Hi,I'm</p>

            {/* Animated Name */}
            <div className="w-full max-w-9xl">
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

            <p className="mt-5 text-9xl font-medium text-purple-200 md:text-2xl">
              Aspiring Software Engineer & Computer Science Student
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              A passionate Computer Science student and freelance developer,
              turning ideas into clean, modern, and practical digital solutions.
              I build user-focused websites and software that bring ideas to
              life and solve real-world problems.
            </p>

            <div className=" mt-5">
              <SpecularButton
                size="lg"
                radius={18}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#f5f5f5"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({behavior:SlowMo});
                }}
              >
                Get Started
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
