import { useEffect, useRef, useState } from 'react';

const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', col: 1, row: 1 },
  { number: 2, symbol: 'He', name: 'Helium', col: 18, row: 1 },
  { number: 3, symbol: 'Li', name: 'Lithium', col: 1, row: 2 },
  { number: 4, symbol: 'Be', name: 'Beryllium', col: 2, row: 2 },
  { number: 5, symbol: 'B', name: 'Boron', col: 13, row: 2 },
  { number: 6, symbol: 'C', name: 'Carbon', col: 14, row: 2 },
  { number: 7, symbol: 'N', name: 'Nitrogen', col: 15, row: 2 },
  { number: 8, symbol: 'O', name: 'Oxygen', col: 16, row: 2 },
  { number: 9, symbol: 'F', name: 'Fluorine', col: 17, row: 2 },
  { number: 10, symbol: 'Ne', name: 'Neon', col: 18, row: 2 },
  { number: 11, symbol: 'Na', name: 'Sodium', col: 1, row: 3 },
  { number: 12, symbol: 'Mg', name: 'Magnesium', col: 2, row: 3 },
  { number: 13, symbol: 'Al', name: 'Aluminum', col: 13, row: 3 },
  { number: 14, symbol: 'Si', name: 'Silicon', col: 14, row: 3 },
  { number: 15, symbol: 'P', name: 'Phosphorus', col: 15, row: 3 },
  { number: 16, symbol: 'S', name: 'Sulfur', col: 16, row: 3 },
  { number: 17, symbol: 'Cl', name: 'Chlorine', col: 17, row: 3 },
  { number: 18, symbol: 'Ar', name: 'Argon', col: 18, row: 3 },
  { number: 19, symbol: 'K', name: 'Potassium', col: 1, row: 4 },
  { number: 20, symbol: 'Ca', name: 'Calcium', col: 2, row: 4 },
  { number: 21, symbol: 'Sc', name: 'Scandium', col: 3, row: 4 },
  { number: 22, symbol: 'Ti', name: 'Titanium', col: 4, row: 4 },
  { number: 23, symbol: 'V', name: 'Vanadium', col: 5, row: 4 },
  { number: 24, symbol: 'Cr', name: 'Chromium', col: 6, row: 4 },
  { number: 25, symbol: 'Mn', name: 'Manganese', col: 7, row: 4 },
  { number: 26, symbol: 'Fe', name: 'Iron', col: 8, row: 4 },
  { number: 27, symbol: 'Co', name: 'Cobalt', col: 9, row: 4 },
  { number: 28, symbol: 'Ni', name: 'Nickel', col: 10, row: 4 },
  { number: 29, symbol: 'Cu', name: 'Copper', col: 11, row: 4 },
  { number: 30, symbol: 'Zn', name: 'Zinc', col: 12, row: 4 },
  { number: 31, symbol: 'Ga', name: 'Gallium', col: 13, row: 4 },
  { number: 32, symbol: 'Ge', name: 'Germanium', col: 14, row: 4 },
  { number: 33, symbol: 'As', name: 'Arsenic', col: 15, row: 4 },
  { number: 34, symbol: 'Se', name: 'Selenium', col: 16, row: 4 },
  { number: 35, symbol: 'Br', name: 'Bromine', col: 17, row: 4 },
  { number: 36, symbol: 'Kr', name: 'Krypton', col: 18, row: 4 },
  { number: 37, symbol: 'Rb', name: 'Rubidium', col: 1, row: 5 },
  { number: 38, symbol: 'Sr', name: 'Strontium', col: 2, row: 5 },
  { number: 39, symbol: 'Y', name: 'Yttrium', col: 3, row: 5 },
  { number: 40, symbol: 'Zr', name: 'Zirconium', col: 4, row: 5 },
  { number: 41, symbol: 'Nb', name: 'Niobium', col: 5, row: 5 },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', col: 6, row: 5 },
  { number: 43, symbol: 'Tc', name: 'Technetium', col: 7, row: 5 },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', col: 8, row: 5 },
  { number: 45, symbol: 'Rh', name: 'Rhodium', col: 9, row: 5 },
  { number: 46, symbol: 'Pd', name: 'Palladium', col: 10, row: 5 },
  { number: 47, symbol: 'Ag', name: 'Silver', col: 11, row: 5 },
  { number: 48, symbol: 'Cd', name: 'Cadmium', col: 12, row: 5 },
  { number: 49, symbol: 'In', name: 'Indium', col: 13, row: 5 },
  { number: 50, symbol: 'Sn', name: 'Tin', col: 14, row: 5 },
  { number: 51, symbol: 'Sb', name: 'Antimony', col: 15, row: 5 },
  { number: 52, symbol: 'Te', name: 'Tellurium', col: 16, row: 5 },
  { number: 53, symbol: 'I', name: 'Iodine', col: 17, row: 5 },
  { number: 54, symbol: 'Xe', name: 'Xenon', col: 18, row: 5 },
  { number: 55, symbol: 'Cs', name: 'Cesium', col: 1, row: 6 },
  { number: 56, symbol: 'Ba', name: 'Barium', col: 2, row: 6 },
  { number: 57, symbol: 'La', name: 'Lanthanum', col: 4, row: 9 },
  { number: 58, symbol: 'Ce', name: 'Cerium', col: 5, row: 9 },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', col: 6, row: 9 },
  { number: 60, symbol: 'Nd', name: 'Neodymium', col: 7, row: 9 },
  { number: 61, symbol: 'Pm', name: 'Promethium', col: 8, row: 9 },
  { number: 62, symbol: 'Sm', name: 'Samarium', col: 9, row: 9 },
  { number: 63, symbol: 'Eu', name: 'Europium', col: 10, row: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', col: 11, row: 9 },
  { number: 65, symbol: 'Tb', name: 'Terbium', col: 12, row: 9 },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', col: 13, row: 9 },
  { number: 67, symbol: 'Ho', name: 'Holmium', col: 14, row: 9 },
  { number: 68, symbol: 'Er', name: 'Erbium', col: 15, row: 9 },
  { number: 69, symbol: 'Tm', name: 'Thulium', col: 16, row: 9 },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', col: 17, row: 9 },
  { number: 71, symbol: 'Lu', name: 'Lutetium', col: 3, row: 6 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', col: 4, row: 6 },
  { number: 73, symbol: 'Ta', name: 'Tantalum', col: 5, row: 6 },
  { number: 74, symbol: 'W', name: 'Tungsten', col: 6, row: 6 },
  { number: 75, symbol: 'Re', name: 'Rhenium', col: 7, row: 6 },
  { number: 76, symbol: 'Os', name: 'Osmium', col: 8, row: 6 },
  { number: 77, symbol: 'Ir', name: 'Iridium', col: 9, row: 6 },
  { number: 78, symbol: 'Pt', name: 'Platinum', col: 10, row: 6 },
  { number: 79, symbol: 'Au', name: 'Gold', col: 11, row: 6 },
  { number: 80, symbol: 'Hg', name: 'Mercury', col: 12, row: 6 },
  { number: 81, symbol: 'Tl', name: 'Thallium', col: 13, row: 6 },
  { number: 82, symbol: 'Pb', name: 'Lead', col: 14, row: 6 },
  { number: 83, symbol: 'Bi', name: 'Bismuth', col: 15, row: 6 },
  { number: 84, symbol: 'Po', name: 'Polonium', col: 16, row: 6 },
  { number: 85, symbol: 'At', name: 'Astatine', col: 17, row: 6 },
  { number: 86, symbol: 'Rn', name: 'Radon', col: 18, row: 6 },
  { number: 87, symbol: 'Fr', name: 'Francium', col: 1, row: 7 },
  { number: 88, symbol: 'Ra', name: 'Radium', col: 2, row: 7 },
  { number: 89, symbol: 'Ac', name: 'Actinium', col: 4, row: 10 },
  { number: 90, symbol: 'Th', name: 'Thorium', col: 5, row: 10 },
  { number: 91, symbol: 'Pa', name: 'Protactinium', col: 6, row: 10 },
  { number: 92, symbol: 'U', name: 'Uranium', col: 7, row: 10 },
  { number: 93, symbol: 'Np', name: 'Neptunium', col: 8, row: 10 },
  { number: 94, symbol: 'Pu', name: 'Plutonium', col: 9, row: 10 },
  { number: 95, symbol: 'Am', name: 'Americium', col: 10, row: 10 },
  { number: 96, symbol: 'Cm', name: 'Curium', col: 11, row: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelium', col: 12, row: 10 },
  { number: 98, symbol: 'Cf', name: 'Californium', col: 13, row: 10 },
  { number: 99, symbol: 'Es', name: 'Einsteinium', col: 14, row: 10 },
  { number: 100, symbol: 'Fm', name: 'Fermium', col: 15, row: 10 },
  { number: 101, symbol: 'Md', name: 'Mendelevium', col: 16, row: 10 },
  { number: 102, symbol: 'No', name: 'Nobelium', col: 17, row: 10 },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', col: 3, row: 7 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', col: 4, row: 7 },
  { number: 105, symbol: 'Db', name: 'Dubnium', col: 5, row: 7 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', col: 6, row: 7 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', col: 7, row: 7 },
  { number: 108, symbol: 'Hs', name: 'Hassium', col: 8, row: 7 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', col: 9, row: 7 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', col: 10, row: 7 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', col: 11, row: 7 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', col: 12, row: 7 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', col: 13, row: 7 },
  { number: 114, symbol: 'Fl', name: 'Flerovium', col: 14, row: 7 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', col: 15, row: 7 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', col: 16, row: 7 },
  { number: 117, symbol: 'Ts', name: 'Tennessine', col: 17, row: 7 },
  { number: 118, symbol: 'Og', name: 'Oganesson', col: 18, row: 7 }
];

export default function PeriodicTableHydrogen() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const hydrogenDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hydrogenDetailRef.current) return;

      const rect = hydrogenDetailRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.7;

      if (rect.top < triggerPoint) {
        const cardIds = ['card-atomic-number', 'card-element-symbol', 'card-element-name', 'card-atomic-weight'];
        cardIds.forEach((cardId, index) => {
          if (!visibleCards.has(cardId)) {
            setTimeout(() => {
              setVisibleCards(prev => new Set(prev).add(cardId));
            }, index * 200);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  return (
    <div className="w-full">
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold tracking-tight mb-3">The Periodic Table of Elements</h1>
            <p className="text-base text-gray-600 mb-12">Scroll down to explore hydrogen in detail.</p>
            <p className="text-base text-gray-900 mb-8">Hydrogen is the lightest and most abundant element in the universe.</p>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="grid gap-0.5 min-w-[600px] max-w-[900px] mx-auto" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridTemplateRows: 'repeat(10, minmax(0, 1fr))' }}>
              {elements.map((element) => (
                <div
                  key={element.number}
                  className={`relative flex flex-col items-center justify-center min-h-[48px] md:min-h-[54px] p-1.5 border rounded-md transition-all duration-150 ${
                    element.number === 1
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 text-white'
                      : 'bg-white border-gray-200 hover:shadow-md'
                  }`}
                  style={{ gridColumn: element.col, gridRow: element.row }}
                  data-testid={`element-${element.symbol}`}
                >
                  <span className={`text-[10px] font-medium ${element.number === 1 ? 'text-white/80' : 'text-gray-400'}`}>
                    {element.number}
                  </span>
                  <span className="text-base font-semibold">{element.symbol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div ref={hydrogenDetailRef} className="relative min-h-[80vh] flex items-center justify-center">
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl p-6 w-56 h-56 flex flex-col items-center justify-center z-10" data-testid="card-hydrogen-detail">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white px-3 py-0.5 rounded-full text-xs font-semibold mb-2">
                1
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl mb-2">
                <div className="text-4xl font-bold">H</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-1.5">
                Hydrogen
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                1.008
              </div>
            </div>

            <div
              className={`absolute w-64 p-6 rounded-2xl shadow-xl text-white transition-all duration-700 ease-out ${
                visibleCards.has('card-atomic-number') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } top-[25%] left-4 md:left-12 lg:left-24 bg-gradient-to-br from-purple-500 to-purple-600`}
              data-testid="card-atomic-number"
            >
              <h3 className="text-xl font-bold mb-2">Atomic Number</h3>
              <p className="text-sm leading-relaxed opacity-95">
                Atomic number is the count of protons in an atom's nucleus, which specific to an element.
              </p>
            </div>

            <div
              className={`absolute w-64 p-6 rounded-2xl shadow-xl text-white transition-all duration-700 ease-out ${
                visibleCards.has('card-element-symbol') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } top-[25%] right-4 md:right-12 lg:right-24 bg-gradient-to-br from-orange-500 to-orange-600`}
              data-testid="card-element-symbol"
            >
              <h3 className="text-xl font-bold mb-2">Element Symbol</h3>
              <p className="text-sm leading-relaxed opacity-95">
                An element symbol is the one- or two-letter shorthand used to represent an element on the periodic table.
              </p>
            </div>

            <div
              className={`absolute w-64 p-6 rounded-2xl shadow-xl text-white transition-all duration-700 ease-out ${
                visibleCards.has('card-element-name') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } bottom-[25%] left-4 md:left-12 lg:left-24 bg-gradient-to-br from-cyan-400 to-cyan-500`}
              data-testid="card-element-name"
            >
              <h3 className="text-xl font-bold mb-2">Element Name</h3>
              <p className="text-sm leading-relaxed opacity-95">
                The full name of the chemical element
              </p>
            </div>

            <div
              className={`absolute w-64 p-6 rounded-2xl shadow-xl text-white transition-all duration-700 ease-out ${
                visibleCards.has('card-atomic-weight') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } bottom-[25%] right-4 md:right-12 lg:right-24 bg-gradient-to-br from-emerald-500 to-emerald-600`}
              data-testid="card-atomic-weight"
            >
              <h3 className="text-xl font-bold mb-2">Atomic Weight</h3>
              <p className="text-sm leading-relaxed opacity-95">
                The weighted average mass of atoms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
