import { useState } from "react";
import { Card } from "@/components/ui/card";
import HydrogenRainbow from "@/components/HydrogenRainbow";
import OxygenChart from "@/components/OxygenChart";
import TransportMethods from "@/components/TransportMethods";
import PPESafety from "@/components/PPESafety";
import ProcessSafety from "@/components/ProcessSafety";
import HydrogenStorageMethods from "@/components/HydrogenStorageMethods";
import QuadrantSafetySection from "@/components/QuadrantSafetySection";
import HydrogenSafetyCards from "@/components/HydrogenSafetyCards";
import HydrogenAtom from "@/components/HydrogenAtom";
import VolumetricDensity from "@/components/VolumetricDensity";
import HydrogenCompression from "@/components/HydrogenCompression";
import TransportationCosts from "@/components/TransportationCosts";
import HydrogenProductionProcesses from "@/components/HydrogenProductionProcesses";
import HydrogenProductionFeedstock from "@/components/HydrogenProductionFeedstock";
import HydrogenBlending from "@/components/HydrogenBlending";
import ProductionMethodSafetyCards from "@/components/ProductionMethodSafetyCards";
import TransportationSafetyCards from "@/components/TransportationSafetyCards";
import EnergyEducation from "@/components/EnergyEducation";
import HydrogenGasTurbines from "@/components/HydrogenGasTurbines";
import PeriodicTableHydrogen from "@/components/PeriodicTableHydrogen";
import processImg from "@assets/process_img_1754391971848.jpg";
import productImg from "@assets/product_img_1754391991610.jpg";
import storageImg from "@assets/storage_img_1754392017212.jpg";
import transportImg from "@assets/transport_img_1754392022435.jpg";

type Quadrant = "process" | "transport" | "storage" | "product";

interface QuadrantContent {
  title: string;
  subtitle: string;
  description: string;
  safetyDescription?: string;
  points: string[];
}

const quadrantImages: Record<Quadrant, string> = {
  process: processImg,
  transport: transportImg,
  storage: storageImg,
  product: productImg
};

const quadrantData: Record<Quadrant, QuadrantContent> = {
  process: {
    title: "Process",
    subtitle: "",
    description: "There are several methods for producing hydrogen, collectively represented by the hydrogen \"rainbow.\" Hydrogen generated using renewable energy and electrolysis is referred to as green hydrogen. The most common production method remains steam methane reforming, though alternative approaches such as coal and biomass gasification are also employed. The choice of feedstock largely depends on the local availability of resources and the technologies in place.\nScroll down to learn more about the various ways in which hydrogen is produced.",
    safetyDescription: "Each hydrogen production method presents unique safety risks. Green hydrogen, made through electrolysis, involves electrical hazards and pressurised gases. Steam methane reforming carries risks of leaks, explosions, and hazardous gases like carbon monoxide. Coal and biomass gasification introduce additional dangers, such as toxic by-products and explosion hazards. Safety measures must be tailored to each method's specific risks.",
    points: []
  },
  transport: {
    title: "Transport",
    subtitle: "",
    description: "Safe and efficient transportation is a critical component of the hydrogen supply chain, ensuring that hydrogen can move reliably from production sites to end users. Current transport options include pipelines, road transport, and tankers, with ongoing development to improve efficiency and safety. Each method presents unique challenges, such as hydrogen embrittlement in pipelines or managing complex systems during road and marine transport. Strict safety procedures and protocols are essential to protect both the workforce and the public, while maintaining the integrity of the hydrogen being transported.\n\nScroll down to learn more about the various hydrogen transportation methods",
    points: []
  },
  storage: {
    title: "Storage",
    subtitle: "",
    description: "An important consideration in the hydrogen supply chain is how it is stored. There are several storage options available, ranging from traditional compressed gas storage to more advanced systems involving cryogenic liquefaction and micro-structured technologies. Each method comes with its own set of challenges, including cost, efficiency, and safety concerns. Given the inherent dangers of hydrogen, including its flammability and potential for leakage, those involved in hydrogen storage must be fully aware of the specific risks and safety protocols associated with each storage method.\n\nScroll down to discover the different hydrogen storage methods and their associated risks.",
    points: []
  },
  product: {
    title: "Product",
    subtitle: "Hydrogen ",
    description: "Hydrogen is emerging as a key fuel in the global decarbonisation efforts, offering a cleaner alternative to traditional fossil fuels. As the lightest element in the universe, hydrogen is not naturally found on Earth, but its unique properties make it a valuable energy carrier. While non-toxic, hydrogen's characteristics pose challenges: it is highly flammable, can cause hydrogen embrittlement in metals, and burns with nearly invisible flames, making it particularly hazardous to handle. In the context of gas turbine engines, hydrogen is increasingly seen as a replacement for conventional fuels, driving forward the transition to a carbon-free energy network. This shift is vital for achieving decarbonisation goals, but it requires overcoming technical challenges related to its storage, transportation, and combustion characteristics.\nScroll down to learn more about the hydrogen.",
    points: [
      "Energy Applications: It is used as a fuel for power generation, transport (through hydrogen fuel cells), and as a feedstock for chemical processes like ammonia production, methanol synthesis, and petroleum refining.",
      "Clean Energy Role: Because it can be generated from renewable energy, hydrogen is seen as a key player in decarbonising hard-to-electrify sectors.",
      "Safety Considerations: Hydrogen is not toxic, but it poses unique safety challenges. It disperses quickly, burns with an almost invisible flame, and forms explosive mixtures with air. Safe use relies on good ventilation, leak detection, and strict ignition control to prevent accidents and ensure safe handling."
    ]
  }
};

export default function Home() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<Quadrant | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const handleQuadrantClick = (quadrant: Quadrant) => {
    if (selectedQuadrant === quadrant && isDetailView) {
      // Return to grid view
      setSelectedQuadrant(null);
      setIsDetailView(false);
    } else {
      // Show detail view
      setSelectedQuadrant(quadrant);
      setIsDetailView(true);
    }
  };

  const getButtonClasses = (quadrant: Quadrant, isNav: boolean = false) => {
    const baseClasses = isNav
      ? "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 hover:shadow-lg"
      : "min-h-[140px] md:min-h-[180px] rounded-2xl font-semibold text-2xl md:text-3xl transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 hover:shadow-xl active:scale-95";
    
    const isActive = selectedQuadrant === quadrant && isDetailView;
    const colorClasses = isActive
      ? "bg-hydrogen-700 text-white ring-4 ring-hydrogen-300 shadow-lg"
      : "bg-hydrogen-500 hover:bg-hydrogen-600 text-white focus:ring-hydrogen-200";
    
    return `${baseClasses} ${colorClasses}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Hydrogen Quadrant
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
        </div>

        {/* Quadrant Container */}
        <div className={`transition-all duration-500 ease-out ${isDetailView ? 'nav-mode' : 'grid-mode'}`}>
          {/* Grid View */}
          {!isDetailView && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 animate-fade-in">
              <button
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product")}
              >
                Product
              </button>
              <button
                onClick={() => handleQuadrantClick("transport")}
                className={getButtonClasses("transport")}
              >
                Transport
              </button>
              <button
                onClick={() => handleQuadrantClick("storage")}
                className={getButtonClasses("storage")}
              >
                Storage
              </button>
              <button
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process")}
              >
                Process
              </button>
            </div>
          )}

          {/* Navigation View */}
          {isDetailView && (
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-down">
              <button
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product", true)}
              >
                Product
              </button>
              <button
                onClick={() => handleQuadrantClick("transport")}
                className={getButtonClasses("transport", true)}
              >
                Transport
              </button>
              <button
                onClick={() => handleQuadrantClick("storage")}
                className={getButtonClasses("storage", true)}
              >
                Storage
              </button>
              <button
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process", true)}
              >
                Process
              </button>
            </div>
          )}

          {/* Instruction Text */}
          <div className="text-center text-gray-600 text-lg mb-8">
            {isDetailView && selectedQuadrant
              ? `Click the ${selectedQuadrant.charAt(0).toUpperCase() + selectedQuadrant.slice(1)} button again to return to the grid view`
              : "Hover over each quadrant to explore, click to view details"
            }
          </div>
        </div>

        {/* Content Area - Unified Format for All Quadrants */}
        {isDetailView && selectedQuadrant && (
          <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {quadrantData[selectedQuadrant].title}
              </h2>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              {(() => {
                const lines = quadrantData[selectedQuadrant].description.split('\n');
                const mainText = lines.slice(0, -1).join('\n');
                const scrollText = lines[lines.length - 1];
                return (
                  <>
                    <p className="mb-6">{mainText}</p>
                    <p className="font-bold italic text-gray-800">{scrollText}</p>
                  </>
                );
              })()}
            </div>
          </Card>
        )}

        {/* External Content Integration with Vertical Divider */}
        {isDetailView && selectedQuadrant && (
          <div className="mt-8">
            {/* Vertical Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-300 to-transparent"></div>
              <div className="px-4">
                <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-300 to-transparent"></div>
            </div>
            
            {/* External Content Area */}
            <div className="space-y-8">
              <div id={`${selectedQuadrant}-content`} className="animate-slide-up">
                {/* Process Content */}
                {selectedQuadrant === 'process' && (
                  <div className="space-y-12">
                    <div>
                      <ProcessSafety />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenProductionFeedstock />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenProductionProcesses />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenBlending />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <QuadrantSafetySection 
                        generalText={quadrantData.process.safetyDescription || quadrantData.process.description}
                        safetyPoints={quadrantData.process.points}
                      />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <ProductionMethodSafetyCards />
                    </div>
                  </div>
                )}
                
                {/* Transport Content */}
                {selectedQuadrant === 'transport' && (
                  <div className="space-y-12">
                    <div>
                      <TransportMethods />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <TransportationCosts />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenCompression />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <QuadrantSafetySection 
                        generalText={quadrantData.transport.safetyDescription || quadrantData.transport.description}
                        safetyPoints={quadrantData.transport.points}
                      />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <TransportationSafetyCards />
                    </div>
                  </div>
                )}
                {/* Storage Content */}
                {selectedQuadrant === 'storage' && (
                  <div className="space-y-12">
                    <div>
                      <HydrogenStorageMethods />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <VolumetricDensity />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <QuadrantSafetySection 
                        generalText={quadrantData.storage.safetyDescription || quadrantData.storage.description}
                        safetyPoints={quadrantData.storage.points}
                      />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <PPESafety />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <OxygenChart />
                    </div>
                  </div>
                )}
                {/* Product Content */}
                {selectedQuadrant === 'product' && (
                  <div className="space-y-12">
                    {/* Periodic Table Hydrogen */}
                    <div>
                      <PeriodicTableHydrogen />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    {/* Hydrogen Atom */}
                    <div>
                      <HydrogenAtom />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <EnergyEducation />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenGasTurbines />
                    </div>
                    
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    <div>
                      <HydrogenSafetyCards />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
