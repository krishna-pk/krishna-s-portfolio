import React from "react";
import SpecularButton from "./SpecularButton";

const Card = () => {
  return (
    <div className="bg-black/40 text-white p-6 rounded-lg w-250 h-125 mt-16 ml-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="w-3 h-3 rounded-full bg-red-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
    
        <p className="font-display text-2xl">$ whoami </p>
        <p className="font-display text-2xl ml-5 ">-- Hi Iam Krishna</p>
        <p className="font-display text-2xl mt-20">$ what_i_do</p>
        <p className="font-display text-2xl ml-5">--I'm a Computer Science student at Panimalar Engineering College and freelance developer who turns ideas into practical, engaging, and impactful digital solutions.</p>
        <div className=" mt-25 ml-85">
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
                  document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
                }}
              >
                Download Resume
              </SpecularButton>
            </div>

      </div>
    </div>
  );
};

export default Card;
