import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Gift, Truck, HardHat, Factory } from "lucide-react";
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
    description: "The value of biomethane as a green fuel is closely tied to how it is produced. By converting organic waste streams into usable energy, biomethane supports a circular economy approach that improves resource efficiency across multiple sectors.\n\nIn the process section, we will explore:\nHow biomethane is produced\nThe different feedstocks used in its generation\nThe role of biogas, and how it differs from biomethane",
    safetyDescription: "",
    points: []
  },
  transport: {
    title: "Transport",
    subtitle: "",
    description: "For biomethane to be effectively deployed at scale, suitable transport infrastructure is essential. A key advantage is that, in many cases, existing gas networks and technologies can be readily leveraged, accelerating adoption and reducing the need for entirely new systems.\n\nIn the transport section, we will explore:\nThe key methods used to transport biomethane\nThe advantages and limitations of each approach\nExisting technologies and infrastructure that can be exploited",
    points: []
  },
  storage: {
    title: "Storage",
    subtitle: "",
    description: "Biomethane can be stored using a range of established and emerging gas storage technologies. These approaches are largely aligned with conventional natural gas storage practices, allowing biomethane to be stored using well-understood methods and infrastructure from across the gas industry.\n\nIn the storage section, we will explore:\nCurrent and emerging methods for storing biomethane\nThe benefits and drawbacks of each storage option\nKey safety, operational, and training considerations",
    points: []
  },
  product: {
    title: "Product",
    subtitle: "",
    description: "As decarbonisation efforts continue, biomethane is increasingly recognised as a practical option for replacing conventional fossil fuels in fuel-dependent industrial applications, particularly gas turbines. Its composition being the same as natural gas enables meaningful emissions reduction while continuing to make use of existing assets.\n\nIn the product section, we will explore:\nWhy biomethane is being considered as a viable decarbonisation pathway\nWhere it can be employed in tandem with existing infrastructure\nHow biomethane differs from other low-carbon fuel options such as hydrogen and natural gas (methane gas)",
    points: []
  }
};

export default function Home() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<Quadrant | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [, setLocation] = useLocation();

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
      : "min-h-[140px] md:min-h-[180px] rounded-2xl font-semibold text-2xl md:text-3xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 hover:shadow-xl";
    
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
            Stacked Learning Biomethane Quadrant
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
        </div>

        {/* Quadrant Container */}
        <div className={`transition-all duration-500 ease-out ${isDetailView ? 'nav-mode' : 'grid-mode'}`}>
          {/* Grid View */}
          {!isDetailView && (
            <div className="relative mb-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => handleQuadrantClick("product")}
                  className={getButtonClasses("product")}
                  data-testid="button-product-quadrant"
                >
                  Product
                </button>
                <button
                  onClick={() => handleQuadrantClick("process")}
                  className={getButtonClasses("process")}
                  data-testid="button-process-quadrant"
                >
                  Process
                </button>
                <button
                  onClick={() => handleQuadrantClick("storage")}
                  className={getButtonClasses("storage")}
                  data-testid="button-storage-quadrant"
                >
                  Storage
                </button>
                <button
                  onClick={() => handleQuadrantClick("transport")}
                  className={getButtonClasses("transport")}
                  data-testid="button-transport-quadrant"
                >
                  Transport
                </button>
              </div>
              
              {/* Center Buttons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="relative">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3">
                    <div className="bg-orange-400 px-12 py-2 rounded-lg whitespace-nowrap">
                      <span className="text-white font-semibold text-lg">Safety Quadrant</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setLocation("/safety/general")}
                      className="w-28 h-28 bg-orange-400 hover:bg-orange-300 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200 flex flex-col items-center justify-center"
                      data-testid="button-center-general-safety"
                    >
                      <Gift className="w-8 h-8 mb-1" />
                      <span className="text-xs">General Safety</span>
                    </button>
                    <button
                      onClick={() => setLocation("/safety/production")}
                      className="w-28 h-28 bg-orange-400 hover:bg-orange-300 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200 flex flex-col items-center justify-center"
                      data-testid="button-center-production-safety"
                    >
                      <Factory className="w-8 h-8 mb-1" />
                      <span className="text-xs">Process Safety</span>
                    </button>
                    <button
                      onClick={() => setLocation("/safety/ppe")}
                      className="w-28 h-28 bg-orange-400 hover:bg-orange-300 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200 flex flex-col items-center justify-center"
                      data-testid="button-center-ppe-safety"
                    >
                      <HardHat className="w-8 h-8 mb-1" />
                      <span className="text-xs">PPE Safety</span>
                    </button>
                    <button
                      onClick={() => setLocation("/safety/transportation")}
                      className="w-28 h-28 bg-orange-400 hover:bg-orange-300 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200 flex flex-col items-center justify-center"
                      data-testid="button-center-transportation-safety"
                    >
                      <Truck className="w-8 h-8 mb-1" />
                      <span className="text-xs">Transportation Safety</span>
                    </button>
                  </div>
                </div>
              </div>
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
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process", true)}
              >
                Process
              </button>
              <button
                onClick={() => handleQuadrantClick("storage")}
                className={getButtonClasses("storage", true)}
              >
                Storage
              </button>
              <button
                onClick={() => handleQuadrantClick("transport")}
                className={getButtonClasses("transport", true)}
              >
                Transport
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
                const lines = quadrantData[selectedQuadrant].description.split('\n').filter(line => line.trim());
                const introParagraph = lines[0];
                const sectionTitle = lines[1];
                const bulletPoints = lines.slice(2);
                return (
                  <>
                    <p className="mb-6">{introParagraph}</p>
                    {sectionTitle && (
                      <p className="font-semibold text-gray-800 mb-3">{sectionTitle}</p>
                    )}
                    {bulletPoints.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        {bulletPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <p className="font-bold italic text-gray-800">
                      Scroll down to view the {quadrantData[selectedQuadrant].title} section in more detail.
                    </p>
                  </>
                );
              })()}
            </div>
          </Card>
        )}

      </div>
    </div>
  );
}
