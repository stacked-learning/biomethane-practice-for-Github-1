import { useEffect, useRef, useState } from "react";

export default function HydrogenAtom() {
  const [hydroActive, setHydroActive] = useState(false);
  const [genActive, setGenActive] = useState(false);
  const [hydroCenter, setHydroCenter] = useState(false);
  const [genCenter, setGenCenter] = useState(false);
  const [hydrogenVisible, setHydrogenVisible] = useState(false);
  const [containerFadeUp, setContainerFadeUp] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      if (!componentRef.current) return;
      
      const rect = componentRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      
      const firstTrigger = 100;
      const secondTrigger = 600;
      const thirdTrigger = 800;
      const fourthTrigger = 1000;

      if (scrollProgress > firstTrigger && scrollProgress < secondTrigger) {
        setHydroActive(true);
        setGenActive(true);
        setHydroCenter(false);
        setGenCenter(false);
      } else if (scrollProgress >= secondTrigger && scrollProgress < thirdTrigger) {
        setHydroCenter(true);
        setGenCenter(true);
      } else if (scrollProgress < firstTrigger) {
        setHydroActive(false);
        setGenActive(false);
        setHydroCenter(false);
        setGenCenter(false);
      }

      if (scrollProgress > thirdTrigger && scrollProgress < fourthTrigger) {
        setHydrogenVisible(true);
      } else if (scrollProgress < thirdTrigger) {
        setHydrogenVisible(false);
      }

      if (scrollProgress > fourthTrigger) {
        setContainerFadeUp(true);
        setHydrogenVisible(false);
        setDescriptionVisible(false);
      } else {
        setContainerFadeUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  return (
    <div 
      ref={componentRef}
      className="relative w-full bg-white"
    >
      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center justify-center py-16 bg-white">
        <div className="text-2xl font-semibold text-gray-700 mb-4">Scroll Down</div>
        <svg 
          className="w-8 h-8 text-gray-500 animate-bounce" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Scroll content container */}
      <div style={{ minHeight: '320vh', position: 'relative' }}>
        
        {/* Fixed container for atom and text */}
        {isInView && (
          <div 
            className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none transition-all duration-800 ${
              containerFadeUp ? 'opacity-0 -translate-y-1/2' : ''
            }`}
          >
          {/* Hydro text - left */}
          <div 
            className={`fixed left-[15%] top-1/2 -translate-y-1/2 text-6xl font-bold select-none z-10 transition-all duration-800 ${
              hydroActive && !hydroCenter ? 'opacity-100 translate-x-0' : 
              hydroCenter ? 'opacity-0 translate-x-[200px]' : 
              'opacity-0 -translate-x-[100px]'
            }`}
            style={{ color: '#4a90e2' }}
          >
            Hydro-
          </div>

          {/* Gen text - right */}
          <div 
            className={`fixed right-[15%] top-1/2 -translate-y-1/2 text-6xl font-bold select-none z-10 transition-all duration-800 ${
              genActive && !genCenter ? 'opacity-100 translate-x-0' : 
              genCenter ? 'opacity-0 -translate-x-[200px]' : 
              'opacity-0 translate-x-[100px]'
            }`}
            style={{ color: '#7ed321' }}
          >
            -gen
          </div>

          {/* Atom Container */}
          <div className="relative w-80 h-80 z-20 pointer-events-auto">
            {/* Orbital path */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border-4 border-gray-300 rounded-full opacity-60"></div>

            {/* Proton */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full z-30"
              style={{ boxShadow: '0 0 20px rgba(255, 68, 68, 0.3)' }}
            ></div>

            {/* Electron */}
            <div 
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full z-40 electron"
              style={{
                boxShadow: '0 0 10px rgba(68, 68, 255, 0.5)',
              }}
            ></div>
          </div>

          {/* Hydrogen text below atom */}
          <div 
            className={`fixed left-1/2 -translate-x-1/2 top-[70%] text-5xl font-bold select-none z-10 transition-opacity duration-800 ${
              hydrogenVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span style={{ color: '#4a90e2' }}>Hydro</span>
            <span style={{ color: '#7ed321' }}>gen</span>
          </div>

          {/* Description text */}
          <div 
            className={`fixed left-1/2 -translate-x-1/2 top-[25%] w-4/5 max-w-2xl text-xl leading-relaxed text-gray-700 text-center select-none z-10 transition-opacity duration-800 ${
              descriptionVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            The name <span className="font-bold">hydrogen</span> derives from the Greek roots{' '}
            <span className="font-bold" style={{ color: '#4a90e2' }}>hydro-</span> meaning "water" and{' '}
            <span className="font-bold" style={{ color: '#7ed321' }}>-gen</span> meaning "producer," reflecting its role in forming water when burned.
          </div>
        </div>
        )}

        {/* First scrollable section */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-11/12 max-w-3xl text-center select-none z-10 p-12"
          style={{ top: '150vh' }}
        >
          <h1 className="text-5xl font-bold mb-8">
            <span style={{ color: '#4a90e2' }}>Hydro</span>
            <span style={{ color: '#7ed321' }}>gen</span>
          </h1>
          <div className="text-xl leading-relaxed text-gray-700 mb-16">
            The name <span className="font-bold">hydrogen</span> derives from the Greek roots{' '}
            <span className="font-bold" style={{ color: '#4a90e2' }}>hydro-</span> meaning "water" and{' '}
            <span className="font-bold" style={{ color: '#7ed321' }}>-gen</span> meaning "producer," reflecting its role in forming water when burned. It was first identified in the 18th century as a distinct gas that, unlike others, combined with oxygen to produce water.
          </div>
        </div>

        {/* Second section */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-4/5 max-w-2xl text-center select-none z-10 p-12"
          style={{ top: '190vh' }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#4a90e2' }}>
            Where is Hydrogen Found?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Hydrogen is abundant in the universe but scarce on Earth, as it is locked in compounds or escapes from the upper atmosphere, due to boil-off. It is produced mainly through{' '}
            <span className="font-bold" style={{ color: '#2196f3' }}>water</span>-dependent processes like electrolysis and steam reforming, with{' '}
            <span className="font-bold" style={{ color: '#2196f3' }}>water</span> also forming as a byproduct in its use.
          </p>
        </div>

        {/* Third section - Isotopes */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-11/12 max-w-4xl text-left select-none z-10 p-12"
          style={{ top: '250vh' }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Hydrogen Isotopes</h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto mb-12">
            The three main isotopes of hydrogen are protium, the most common form with no neutron; deuterium, which has one neutron and is stable; and tritium, which has two neutrons and is radioactive.
          </p>

          <div className="space-y-6">
            {/* Protium */}
            <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2 text-gray-900">Protium</div>
                <div className="text-base leading-relaxed text-gray-600">
                  Protium is the most abundant form of hydrogen, made up of a single proton and electron with no neutrons. It's widely used in fuel cells, chemical production (like making ammonia), and as a clean-burning energy carrier in emerging hydrogen fuel technologies.
                </div>
              </div>
              <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Deuterium */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2 text-gray-900">Deuterium</div>
                <div className="text-base leading-relaxed text-gray-600">
                  A stable isotope with one proton and one neutron, found in heavy water and used in nuclear reactors, climate science, medicinal chemistry, etc. Possesses different properties to hydrogen and its compounds (heavy water), including a slower rate of reaction due to its larger mass.
                </div>
              </div>
              <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-2 w-6 h-6 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Tritium */}
            <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2 text-gray-900">Tritium</div>
                <div className="text-base leading-relaxed text-gray-600">
                  A radioactive isotope with one proton and two neutrons, produced in reactors and used as a tracer in biomedical research, and within glow-in-the-dark lighting for emergency and exit signs. Tritium is found in nature, where it is produced from interactions of cosmic rays with gases in the upper atmosphere.
                </div>
              </div>
              <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-1 translate-y-2 w-6 h-6 bg-gray-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-3 w-6 h-6 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .electron {
          animation: orbit 3s linear infinite;
          transform-origin: 0 0;
        }

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
