import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Gift, Truck, HardHat, Factory } from "lucide-react";
import processImg from "@assets/process_img_1754391971848.jpg";
import productImg from "@assets/product_img_1754391991610.jpg";
import storageImg from "@assets/storage_img_1754392017212.jpg";
import transportImg from "@assets/transport_img_1754392022435.jpg";
import methaneMolecule from "@assets/image_1767226700710.png";
import hydrogenMolecule from "@assets/image_1767227019937.png";
import carbonDioxideMolecule from "@assets/image_1767227093105.png";

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

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Product Section - What is Biomethane? */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                What is Biomethane?
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Biomethane, also known as Renewable Natural Gas (RNG) refers to an almost pure-methane gas obtained from "upgrading" biogas. It is physically indistinguishable from natural gas, differing as it is produced through green methods.
              </p>
              <div className="bg-hydrogen-50 border-l-4 border-hydrogen-500 p-4 rounded-r-lg">
                <p className="font-semibold text-gray-800">Definition: Dispatchable Energy</p>
                <p className="text-gray-700">Energy that can be dispatched to users as required.</p>
              </div>
              <p>
                When compared with other renewable energy sources, biomethane is dispatchable, avoiding the pitfalls of solar and wind energy. This enables it to replace natural gas - completely or within a blend, especially for industrial equipment and infrastructure, including existing gas turbine engines.
              </p>
              <p>
                Biomethane production can be tailored for many places globally, with various organic feedstocks being suitable for its production. These production methods contribute to establishing a circular economy, where waste feed-stocks from other sectors are reused.
              </p>
              
              {/* Subsection: Biomethane vs Natural Gas vs Hydrogen */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Biomethane vs Natural Gas vs Hydrogen</h4>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row gap-6 w-full md:w-4/5">
                    {/* Biomethane Tile */}
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 min-h-[450px] flex flex-col">
                      <h5 className="text-lg font-bold text-gray-800 mb-3 text-center">Biomethane</h5>
                      <div className="w-full rounded-lg mb-4 flex items-center justify-center h-[100px]">
                        <img src={methaneMolecule} alt="Methane molecule CH4" className="h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                          <li>Content coming soon</li>
                        </ul>
                      </div>
                    </div>
                    {/* Natural Gas Tile */}
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 min-h-[450px] flex flex-col">
                      <h5 className="text-lg font-bold text-gray-800 mb-3 text-center">Natural Gas</h5>
                      <div className="w-full rounded-lg mb-4 flex items-center justify-center h-[100px]">
                        <img src={methaneMolecule} alt="Methane molecule CH4" className="h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                          <li>Content coming soon</li>
                        </ul>
                      </div>
                    </div>
                    {/* Hydrogen Tile */}
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 min-h-[450px] flex flex-col">
                      <h5 className="text-lg font-bold text-gray-800 mb-3 text-center">Hydrogen</h5>
                      <div className="w-full rounded-lg mb-4 flex items-center justify-center h-[100px]">
                        <img src={hydrogenMolecule} alt="Hydrogen molecule H2" className="h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                          <li>Content coming soon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Product Section - What Role Can Biomass Play? */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                What Role Can Biomass Play?
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Not enough biomass to replace gas. It is expected that 29% of natural gas can be replaced by biomethane.
              </p>
              <p>
                In certain countries, biomethane can completely replace natural gas.
              </p>
              <p>
                In others, it can help reduce dependence on gas imports, increasing energy security.
              </p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Product Section - Sectors Biomethane Can Be Used In */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Sectors Biomethane Can Be Used In
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-hydrogen-600">Heavy Industry</h4>
                <p className="text-gray-600 text-base">Energy-intensive manufacturing processes requiring high-temperature heat and consistent fuel supply.</p>
              </div>
              <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-hydrogen-600">Aviation</h4>
                <p className="text-gray-600 text-base">Accounts for 3% of global and 10% of transport-related energy consumption. This sector currently employs energy dense fuels such as kerosene.</p>
              </div>
              <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-hydrogen-600">Shipping</h4>
                <p className="text-gray-600 text-base">Heavily reliant on low-grade fossil fuels. Despite being a less carbon-intensive transportation method, it is a major emitter of greenhouse gases, given the scale of shipping operations. Overall, 3% of global energy consumption, and 10% of transport-related energy consumption is from shipping.</p>
              </div>
              <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-hydrogen-600">Trucking</h4>
                <p className="text-gray-600 text-base">Emits a quarter of all transportation carbon dioxide emissions, being more than the shipping and aviation sectors combined. Employs fuels such as diesel, petrol, and natural gas.</p>
              </div>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Product Section - Biomethane Constitution */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Biomethane Constitution
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Product Section - Methane vs Carbon Dioxide Emissions */}
        {isDetailView && selectedQuadrant === "product" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Methane vs Carbon Dioxide Emissions
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col md:flex-row gap-6 w-full md:w-3/5">
                {/* Methane Tile */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 min-h-[450px] flex flex-col">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Methane</h4>
                  <div className="w-full rounded-lg mb-4 flex items-center justify-center h-[120px]">
                    <img src={methaneMolecule} alt="Methane molecule CH4" className="h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Content coming soon</li>
                    </ul>
                  </div>
                </div>
                {/* Carbon Dioxide Tile */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-hydrogen-500 hover:shadow-lg transition-all duration-300 min-h-[450px] flex flex-col">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Carbon Dioxide</h4>
                  <div className="w-full rounded-lg mb-4 flex items-center justify-center h-[120px]">
                    <img src={carbonDioxideMolecule} alt="Carbon dioxide molecule CO2" className="h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Content coming soon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Section - How is Biogas Obtained? */}
        {isDetailView && selectedQuadrant === "process" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                How is Biogas Obtained?
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "process" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Process Section - Biomethane Production */}
        {isDetailView && selectedQuadrant === "process" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Biomethane Production
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "process" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Process Section - Conditioning/Upgrading Biogas */}
        {isDetailView && selectedQuadrant === "process" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Conditioning/Upgrading Biogas
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Transport Section - Biomethane Transportation Forms */}
        {isDetailView && selectedQuadrant === "transport" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Biomethane Transportation Forms
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "transport" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Transport Section - Main Transportation Modes */}
        {isDetailView && selectedQuadrant === "transport" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Main Transportation Modes
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "transport" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Transport Section - Injection into Natural Gas Pipelines */}
        {isDetailView && selectedQuadrant === "transport" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Injection into Natural Gas Pipelines
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Storage Section - Key Biomethane Storage Considerations */}
        {isDetailView && selectedQuadrant === "storage" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Key Biomethane Storage Considerations
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {/* Section Divider */}
        {isDetailView && selectedQuadrant === "storage" && (
          <div className="flex justify-center my-6">
            <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
          </div>
        )}

        {/* Storage Section - Biomethane Storage Options */}
        {isDetailView && selectedQuadrant === "storage" && (
          <div className="mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Biomethane Storage Options
              </h3>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {/* Underground */}
              <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Underground</h4>
                  <p className="text-gray-600 mb-4">The biomethane storage method with the largest volume holding capacity. There are three main underground storage methods: depleted oil and gas reservoirs, salt caverns, and aquifers.</p>
                  <ul className="text-gray-600 space-y-3 ml-4">
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span><strong className="text-gray-700">Salt Caverns:</strong> Smaller capacities than oil and gas reservoirs, but provide higher gas injection and withdrawal rates, and minimal leakage. Their high turnover rate is suitable for integration with intermittent renewable sources (solar, wind, etc). Salt caverns are a common environment within many countries.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span><strong className="text-gray-700">Oil and Gas Reservoir:</strong> Low turnover rates, and are typically operated on an annual seasonal-based cycle. Simpler than other below-ground methods, and possess lower investment costs.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span><strong className="text-gray-700">Aquifers:</strong> Rarely used for gas storage due to limited tightness, low turnover-rates, and the geological nature of aquifers. Used when there are no better options.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compressed Biomethane (CBM) */}
              <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Compressed Biomethane (CBM)</h4>
                  <ul className="text-gray-600 space-y-3 ml-4">
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Various different options exist for CBM, including: spherical, cylindrical, pipe tanks, and gas bottles.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Due to pressures involved, CBM storage facilities require adequate safety devices, such as: rupture disks, pressure relief valves.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>These devices can excel with fast filling times.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>The main cost associated with CBM is the cost of compression.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Safety considerations can make identifying suitable sites for CBM storage more difficult.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Liquefied Biomethane (LBM) */}
              <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Liquefied Biomethane (LBM)</h4>
                  <ul className="text-gray-600 space-y-3 ml-4">
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>LBM like LNG involves cooling methane gas to -162°C. It is very space efficient, taking up 1/600th of the volume gaseous biomethane would.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Heat leakage into tank can severely reduce storage efficiency by vaporizing the LBM. Boil-off complicates LBM transportation and on-site maintenance.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Improved safety due to non-explosive and non-toxic process. However, the cold temperatures pose unique risks.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Material Adsorption - Adsorbed Biomethane (ABM) */}
              <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Material Adsorption - Adsorbed Biomethane (ABM)</h4>
                  <ul className="text-gray-600 space-y-3 ml-4">
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>An emerging technology, which allows a material to adsorb significant amount of biomethane at lower pressures than more well-established methods.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>Enhanced safety due to reduced risk of fires, explosions, and lower pressures.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-hydrogen-500">•</span>
                      <span>The various challenges concerning ABM include: managing heat during adsorption process, inability to connect to high pressure devices, and the high costs associated with ABM materials.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
