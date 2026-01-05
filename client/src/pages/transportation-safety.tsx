import { useLocation } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import TransportationSafetyCards from "@/components/TransportationSafetyCards";
import { useState } from "react";

interface EmergencyCardData {
  id: string;
  title: string;
  content: React.ReactNode;
}

function PipelineEmergencyCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const emergencyCards: EmergencyCardData[] = [
    {
      id: "isolation",
      title: "Public Safety and Isolation",
      content: (
        <p className="text-base leading-relaxed text-gray-700">
          The area is isolated from the general public. Unauthorised persons, the public, and the media should be prevented from entering.
        </p>
      )
    },
    {
      id: "exclusion",
      title: "Exclusion Zones",
      content: (
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-700">
            An exclusion zone can be established around the location of fires, or where vapour clouds may form. The pipeline licensee should be contacted about establishing an exclusion zone - they will have calculated the exclusion zone distance.
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700 ml-2">
            <li>Additionally with low-pressure leaks of natural gas, a reading greater than 1% Gas-in-Air or 20% Lower Explosive Limit (LEL) will be inside this zone.</li>
            <li>An exclusion zone is necessary due to heat radiation from fires.</li>
          </ul>
          
          <div className="overflow-hidden rounded-xl border border-red-200 shadow-sm bg-white mt-4">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-red-600 text-white uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 font-bold border-b border-red-700">Heat intensity (kW/m²)</th>
                  <th className="px-4 py-3 font-bold border-b border-red-700">Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-red-50/50">4.7</td>
                  <td className="px-4 py-3 text-gray-600">
                    Exposure causes pain within 15-20 seconds, and injury occurs after 30 seconds, typically resulting in at least second-degree burns.
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-red-50/50">12.6</td>
                  <td className="px-4 py-3 text-gray-600 space-y-2">
                    <p>High probability of injury. Extended exposure carries a significant risk of fatality.</p>
                    <p>Prolonged exposure can raise the temperature of wooden structures to the point where they may ignite if a flame is present.</p>
                    <p>Thin steel surfaces with insulation on the side away from the fire may experience enough thermal stress to lead to structural failure.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "excavation",
      title: "Excavation Restrictions",
      content: (
        <p className="text-base leading-relaxed text-gray-700">
          No excavations should be attempted to identify the pressure or diameter of the pipes. Instead, the gas company should be contacted for advice on the asset and the exclusion zone.
        </p>
      )
    },
    {
      id: "ignition",
      title: "Ignition Source Removal",
      content: (
        <div className="space-y-3">
          <p className="text-base leading-relaxed text-gray-700">Any ignition sources should be removed. This can be undertaken by:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-700 ml-2">
            <li>Restricting any vehicle traffic/access</li>
            <li>Contacting electricity distribution businesses to request isolation or de-energisation of electrical infrastructure.</li>
            <li>Prohibiting usage of unsafe electrical equipment (for instance anything producing sparks, mobile phones, etc).</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {emergencyCards.map((card) => (
        <div
          key={card.id}
          className="cursor-pointer perspective-1000"
          onClick={() => toggleCard(card.id)}
          data-testid={`flip-card-${card.id}`}
        >
          <div
            className="relative w-full"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
              transform: flippedCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front */}
            <div
              className="w-full bg-orange-50 border-2 border-orange-200 rounded-xl p-6"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                opacity: flippedCards.has(card.id) ? 0 : 1,
                position: flippedCards.has(card.id) ? 'absolute' : 'relative'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
            </div>

            {/* Back */}
            <div
              className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-6"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                opacity: flippedCards.has(card.id) ? 1 : 0,
                position: flippedCards.has(card.id) ? 'relative' : 'absolute',
                top: flippedCards.has(card.id) ? 'auto' : 0
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
              
              <div className="text-left">
                {card.content}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <p className="text-center mt-2 text-sm text-gray-500">
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}

interface TransportMethodData {
  id: string;
  title: string;
  risks: string[];
}

function TransportationMethodCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const transportMethods: TransportMethodData[] = [
    {
      id: "pipeline",
      title: "Pipeline Transport",
      risks: [
        "Hydrogen embrittlement can weaken pipeline materials over time, making them prone to cracking and leaks.",
        "High-pressure systems require continuous monitoring for pressure fluctuations and potential failures.",
        "Third-party interference from construction activities poses significant damage risks."
      ]
    },
    {
      id: "road",
      title: "Road Transport (Tube Trailers)",
      risks: [
        "Compressed gas cylinders operate at extremely high pressures (up to 500 bar), increasing explosion risks during accidents.",
        "Vehicle collisions can rupture containers, leading to rapid gas release and potential ignition.",
        "Driver training and route planning are critical to minimize exposure to populated areas."
      ]
    },
    {
      id: "cryogenic",
      title: "Cryogenic Liquid Transport",
      risks: [
        "Liquid hydrogen is stored at -253°C, creating severe frostbite and cold burn hazards.",
        "Boil-off occurs continuously, requiring proper venting systems to prevent pressure buildup.",
        "Thermal insulation failures can lead to rapid vaporization and container rupture."
      ]
    },
    {
      id: "ship",
      title: "Ship Transport",
      risks: [
        "Large-scale hydrogen carriers face unique maritime hazards including wave damage and collision risks.",
        "Hydrogen storage tanks must withstand sea conditions while maintaining cryogenic temperatures.",
        "Emergency response at sea is more complex due to limited access and evacuation challenges."
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {transportMethods.map((method) => (
        <div
          key={method.id}
          className="cursor-pointer perspective-1000"
          onClick={() => toggleCard(method.id)}
          data-testid={`flip-card-transport-${method.id}`}
        >
          <div
            className="relative w-full"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
              transform: flippedCards.has(method.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front */}
            <div
              className="w-full bg-red-50 border border-red-200 rounded-lg p-6"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                opacity: flippedCards.has(method.id) ? 0 : 1,
                position: flippedCards.has(method.id) ? 'absolute' : 'relative'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-800" />
                <h3 className="text-xl font-semibold text-red-900">
                  {method.title}
                </h3>
              </div>
            </div>

            {/* Back */}
            <div
              className="w-full bg-red-50 border border-red-200 rounded-lg p-6"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                opacity: flippedCards.has(method.id) ? 1 : 0,
                position: flippedCards.has(method.id) ? 'relative' : 'absolute',
                top: flippedCards.has(method.id) ? 'auto' : 0
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-800 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-red-900">
                  {method.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {method.risks.map((risk, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 flex-shrink-0" />
                    <p className="text-base leading-relaxed text-red-900">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <p className="text-center mt-2 text-sm text-gray-500">
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}

export default function TransportationSafety() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setLocation("/safety/general")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-product"
          >
            Product
          </button>
          <button
            onClick={() => setLocation("/safety/production")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-process"
          >
            Process
          </button>
          <button
            onClick={() => setLocation("/safety/ppe")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-storage"
          >
            Storage
          </button>
          <button
            onClick={() => setLocation("/")}
            className="px-10 py-5 rounded-full font-semibold text-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300 shadow-lg"
            data-testid="button-nav-transport"
          >
            Transport
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Transportation Safety
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Biomethane can be transported using pipelines, road vehicles, or tankers, with safety considerations largely aligned to those of conventional natural gas systems. Key risks include leakage, ignition, and accumulation in confined spaces, requiring effective gas detection, ventilation, and adherence to established gas quality and pressure standards. When transported in liquefied form, additional controls are required to manage cryogenic temperatures, handling procedures, and personnel training to ensure safe operation.
          </p>

          {/* Common Causes of Pipeline Leaks */}
          <div className="mt-12 text-left">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Common Causes of Pipeline Leaks
              </h3>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Unauthorised Excavation and Construction Activities",
                "Extreme Weather Damaging Pipes",
                "Pinholes from Corrosion in Pipes"
              ].map((cause, index) => (
                <div
                  key={index}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-xl p-6 flex items-center justify-center text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-default min-h-[100px]"
                  data-testid={`button-pipeline-cause-${index}`}
                >
                  {cause}
                </div>
              ))}
            </div>
          </div>

          {/* Gas Related Pipeline Emergencies */}
          <div className="mt-12 text-left">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Gas Related Pipeline Emergencies
              </h3>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <PipelineEmergencyCards />
            </div>

            <div className="mt-10 max-w-5xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Explosive Reignition</h4>
              <p className="text-gray-700 mb-4">
                A pipeline-fueled fire should never be extinguished unless the pipeline has been isolated.
              </p>
              <p className="text-gray-700">
                If a fire has been extinguished, but the gas pipeline isn't isolated, gas can migrate until it finds another ignition source. This is termed 'explosive re-ignition', and can endanger lives.
              </p>
            </div>
          </div>

          {/* Transportation Method Dangers */}
          <div className="mt-12 text-left">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Transportation Method Dangers
              </h3>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <TransportationSafetyCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
