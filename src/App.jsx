import DotField from "./components/DotField";

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

      {/* Portfolio */}
      <div className="relative z-10">
        <h1 className="text-white text-6xl font-bold">
          Krishna's Portfolio
        </h1>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
  <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
    <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
      Hi, I am Lorem Ipsum...
    </h1>

    <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>

    </main>
  );
}

export default App;