import DotField from "./components/DotField";
import About from "./sections/About";
import Hero from "./sections/Hero";


function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120F17]">
      {/* DotField Background */}
      <div className="fixed inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(168, 85, 247, 0.35)"
          gradientTo="rgba(180, 151, 207, 0.25)"
          glowColor="#120F17"
        />
      </div>

     

      <Hero />
      <About />
     
    </main>
  );
}

export default App;
