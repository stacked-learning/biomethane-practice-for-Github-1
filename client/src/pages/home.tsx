import { useState } from "react";
import { Card } from "@/components/ui/card";
import HydrogenRainbow from "@/components/HydrogenRainbow";
import OxygenChart from "@/components/OxygenChart";
import TransportMethods from "@/components/TransportMethods";
import PPESafety from "@/components/PPESafety";
import HydrogenLegislation from "@/components/HydrogenLegislation";
import ProcessSafety from "@/components/ProcessSafety";
import processImg from "@assets/process_img_1754391971848.jpg";
import productImg from "@assets/product_img_1754391991610.jpg";
import storageImg from "@assets/storage_img_1754392017212.jpg";
import transportImg from "@assets/transport_img_1754392022435.jpg";

type Quadrant = "process" | "transport" | "storage" | "product";

interface QuadrantContent {
  title: string;
  subtitle: string;
  description: string;
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
    subtitle: "Technical Considerations",
    description: "Critical hydrogen processing factors and system interactions",
    points: [
      "Joule-Thompson Effect: Unlike most gases, hydrogen heats up when it expands rather than cooling.",
      "Pipeline Considerations: Mixing hydrogen into natural gas pipelines can affect system stability.",
      "Wobbe Index Impact: The Wobbe number of hydrogen is lower than most gases, affecting combustion efficiency.",
      "Combustion Factors: Hydrogen's flame speed, adiabatic flame temperature, and stability must be considered when using it in fuel systems."
    ]
  },
  transport: {
    title: "Transport",
    subtitle: "Storage Methods",
    description: "Hydrogen can be stored in several different ways because no single method works for every situation. Compressed gas storage is the most common, using high-pressure tanks to store hydrogen at up to 700 bar. This method is relatively simple and well understood, making it a practical choice for vehicles, small-scale systems, and applications where quick refuelling or dispensing is needed.",
    points: [
      "Liquid Hydrogen Storage: For larger energy needs or long-distance transport, liquid hydrogen storage is preferred despite the extra energy required to cool it to –253 °C. Liquefaction dramatically increases hydrogen's energy density, allowing more fuel to be stored in the same space — essential for shipping, aerospace, and other applications where weight and volume matter.",
      "Chemical Storage Methods: Some approaches store hydrogen in a chemically bound form, like metal hydrides, ammonia, or liquid organic hydrogen carriers (LOHCs). These methods can be safer and easier to handle, especially for seasonal or remote storage, but require additional energy to release the hydrogen when needed.",
      "Method Selection: Choosing the right storage method depends on the scale, cost, safety requirements, and the end-use application."
    ]
  },
  storage: {
    title: "Storage",
    subtitle: "Critical Energy Infrastructure",
    description: "Hydrogen storage is critical for turning hydrogen into a practical energy carrier, allowing it to be held safely and used on demand. Without storage, hydrogen production would need to perfectly match demand, which is unrealistic for industries, power grids, and transport. Storage enables energy balancing, backup supply, and a reliable hydrogen economy.",
    points: [
      "Storage Method Diversity: Different storage methods exist because hydrogen has a very low natural density, making it challenging to store efficiently. Compressed gas is simple and widely used, liquid hydrogen offers high density for space-critical applications, and geological storage in salt caverns supports massive seasonal energy reserves.",
      "Advanced Storage Solutions: Materials-based options like metal hydrides or ammonia are being developed for safer handling and easier transport, even if they require extra processing.",
      "Safety and Scalability: Safety is central to hydrogen storage. High pressures, cryogenic temperatures, and chemical reactions must be carefully controlled to avoid leaks or ignition. Salt caverns are seen as a safe, scalable option for bulk storage due to their natural sealing properties, while composite tanks and insulated vessels keep compressed or liquid hydrogen secure. These methods work together to make hydrogen a practical, flexible part of future clean energy systems."
    ]
  },
  product: {
    title: "Product",
    subtitle: "Hydrogen ",
    description: "Hydrogen is the simplest and lightest element, made up of just one proton and one electron. In its pure form (H₂), it is a colourless, odourless gas that is extremely flammable. It is widely produced and sold as a clean energy carrier and industrial feedstock, often stored as a compressed gas or liquid.",
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

        {/* Content Area */}
        {isDetailView && selectedQuadrant && (
          <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">

            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {quadrantData[selectedQuadrant].title}
              </h2>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4 font-medium">
                {quadrantData[selectedQuadrant].subtitle}
              </p>
              <ul className="space-y-4">
                {quadrantData[selectedQuadrant].points.map((point, index) => {
                  const [title, ...descriptionParts] = point.split(': ');
                  const description = descriptionParts.join(': ');
                  return (
                    <li key={index} className="flex">
                      <span className="font-semibold text-hydrogen-700 mr-2">•</span>
                      <div>
                        <strong className="text-gray-800">{title}:</strong> {description}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 p-4 bg-hydrogen-50 rounded-lg border border-hydrogen-200">
                <p className="text-sm text-gray-600">
                  Click the <strong>{quadrantData[selectedQuadrant].title}</strong> button again to return to the grid view
                </p>
              </div>
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
                  <div>
                    <ProcessSafety />
                  </div>
                )}
                
                {/* Transport Content */}
                {selectedQuadrant === 'transport' && (
                  <div>
                    <TransportMethods />
                  </div>
                )}
                {/* Storage Content */}
                {selectedQuadrant === 'storage' && (
                  <div className="space-y-12">
                    {/* PPE Safety at the top */}
                    <div>
                      <PPESafety />
                    </div>
                    
                    {/* Vertical spacing divider */}
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    {/* Legislation at the bottom */}
                    <div>
                      <HydrogenLegislation />
                    </div>
                  </div>
                )}
                {/* Product Content */}
                {selectedQuadrant === 'product' && (
                  <div className="space-y-12">
                    {/* Hydrogen Rainbow at the top */}
                    <div>
                      <HydrogenRainbow />
                    </div>
                    
                    {/* Vertical spacing divider */}
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    {/* Oxygen Chart at the bottom */}
                    <div>
                      <OxygenChart />
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
