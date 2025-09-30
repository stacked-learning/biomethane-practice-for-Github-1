export default function HydrogenAtom() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      {/* Hydrogen Atom Animation with Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            <span style={{ color: '#4a90e2' }}>Hydro</span>
            <span style={{ color: '#7ed321' }}>gen</span>
          </h1>
        </div>

        {/* Animated Atom */}
        <div className="relative w-80 h-80 mb-8">
          {/* Orbital path */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border-4 border-gray-300 rounded-full opacity-60"></div>

          {/* Proton (nucleus) */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full z-10"
            style={{ boxShadow: '0 0 20px rgba(255, 68, 68, 0.3)' }}
          ></div>

          {/* Electron */}
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full z-20"
            style={{
              boxShadow: '0 0 10px rgba(68, 68, 255, 0.5)',
              animation: 'orbit 3s linear infinite',
              transformOrigin: '0 0'
            }}
          ></div>
        </div>

        {/* Etymology */}
        <div className="max-w-2xl text-center mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            The name <span className="font-bold">hydrogen</span> derives from the Greek roots{' '}
            <span className="font-bold" style={{ color: '#4a90e2' }}>hydro-</span> meaning "water" and{' '}
            <span className="font-bold" style={{ color: '#7ed321' }}>-gen</span> meaning "producer," reflecting its role in forming water when burned. It was first identified in the 18th century as a distinct gas that, unlike others, combined with oxygen to produce water.
          </p>
        </div>
      </div>

      {/* Where is Hydrogen Found */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#4a90e2' }}>
          Where is Hydrogen Found?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
          Hydrogen is abundant in the universe but scarce on Earth, as it is locked in compounds or escapes from the upper atmosphere, due to boil-off. It is produced mainly through{' '}
          <span className="font-bold" style={{ color: '#2196f3' }}>water</span>-dependent processes like electrolysis and steam reforming, with{' '}
          <span className="font-bold" style={{ color: '#2196f3' }}>water</span> also forming as a byproduct in its use.
        </p>
      </div>

      {/* Hydrogen Isotopes */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Hydrogen Isotopes
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto mb-12">
          The three main isotopes of hydrogen are protium, the most common form with no neutron; deuterium, which has one neutron and is stable; and tritium, which has two neutrons and is radioactive. In addition to these, there are a few heavier unstable isotopes of hydrogen which exist briefly before decaying.
        </p>

        <div className="space-y-6">
          {/* Protium */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Protium</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Protium is the most abundant form of hydrogen, made up of a single proton and electron with no neutrons. It's widely used in fuel cells, chemical production (like making ammonia), and as a clean-burning energy carrier in emerging hydrogen fuel technologies.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-lg border-2 border-gray-300">
              <div className="relative w-24 h-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Deuterium */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Deuterium</h3>
              <p className="text-base leading-relaxed text-gray-600">
                A stable isotope with one proton and one neutron, found in heavy water and used in nuclear reactors, climate science, medicinal chemistry, etc.
                <br /><br />
                Possesses different properties to hydrogen and its compounds (heavy water), including a slower rate of reaction due to its larger mass.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-lg border-2 border-gray-300">
              <div className="relative w-24 h-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-2 w-6 h-6 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Tritium */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Tritium</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Contains one proton and two neutrons, tritium is radioactive with a half-life of about 12 years. It decays into helium-3 through beta decay. Tritium is used in nuclear fusion research, self-luminous devices (like exit signs), and as a radioactive tracer in scientific studies.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-lg border-2 border-gray-300">
              <div className="relative w-24 h-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-1 translate-y-2 w-6 h-6 bg-gray-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-3 w-6 h-6 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(104px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(104px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
