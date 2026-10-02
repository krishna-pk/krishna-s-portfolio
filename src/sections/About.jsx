import GooeyNav from "../components/GooeyNav";
import Card from "../components/Card";
import navLinks from "./../constants/navItems";

function About() {
  return (
    <section id="about" className="relative min-h-screen ">
      <div className="h-150 relative">
        <div className="mt-5 flex items-center justify-center">
          <div className="w-2xl h-20 mt-5 bg-white/10  border-white/20 rounded-md flex items-center mx-6 ">
            <GooeyNav
              items={navLinks}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>

        <Card />
      </div>
    </section>
  );
}

export default About;
