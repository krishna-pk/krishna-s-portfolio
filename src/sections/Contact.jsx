import TechText from "../components/TechText";
import Tooltip from "../components/Tooltip";

function Contact() {
  return (
    <section id="contact" className="relative z-10">
      <div className="w-full h-90 bg-black grid grid-cols-2 overflow-hidden">
        <div className="w-full h-90 mt-4 ">
          <TechText
            text="Contact Me !"
            fontWeight={600}
            fontSize={80}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily=""
            color="#ffffff"
            accentColor="#ffffff"
            letterSpacing={-0.05}
            reach={200}
            softness={0.7}
            strokeWidth={1.5}
            speed={1}
            lineStyle="dashed"
            selection
            labels
            draggable
            sweep
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col ml-120 mb-20">
            <div className="w-60 h-15 rounded-2xl flex items-center justify-center  bg-[#2c2e35] text-white  ">
              <a href="mailto:krishnapalani2007@gmail.com">
                krishnapalani2007@gmail.com
              </a>
            </div>
            <div className="w-60 h-15  rounded-2xl flex items-center justify-center   bg-[#2c2e35] text-white mt-2">
              <a href="tel:+91-7845531978">+91-7845531978</a>
            </div>
          </div>
          <div className="">
            <Tooltip />
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-600 text-3xl font-display flex items-center justify-center">
        Krishna © 2026
      </div>
    </section>
  );
}

export default Contact;
