import smrImage1 from "@assets/image_1759204576499.png";
import smrImage2 from "@assets/image_1759204635699.png";
import coalImage from "@assets/image_1759205299825.png";
import siCycleImage from "@assets/image_1759205433166.png";
import biomassImage from "@assets/image_1759205922340.png";
import photolyticImage from "@assets/image_1759206231104.png";

export default function HydrogenProductionProcesses() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Hydrogen Production Processes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Fossil Fuel Production */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Fossil Fuel Production</h3>
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Steam Methane Reforming</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Steam Methane Reforming (SMR) is the dominant method of hydrogen production worldwide, operating at very high temperatures. The process generates significant amounts of carbon dioxide as a by-product, though carbon capture can be applied to reduce emissions. Most facilities use natural gas as the feedstock, while some also process and utilise landfill gas as an alternative source.
                </p>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <img 
                      src={smrImage1} 
                      alt="Steam methane reforming reaction diagram"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md bg-gray-50 p-4"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2 italic">
                      Combining methane with water under high temperatures results in carbon monoxide and hydrogen gas being produced.
                    </p>
                  </div>
                  
                  <div>
                    <img 
                      src={smrImage2} 
                      alt="Water-shift reaction diagram"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md bg-gray-50 p-4"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2 italic">
                      Carbon monoxide is a byproduct of steam methane reforming. It can further be converted to hydrogen through a water-shift reaction.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Coal</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Hydrogen is produced from coal through a variety of gasification processes including: fixed bed, fluidised bed or entrained flow processes.
                </p>
                
                <div className="mt-6">
                  <img 
                    src={coalImage} 
                    alt="Coal gasification reaction diagram"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md bg-gray-50 p-4"
                  />
                  <p className="text-sm text-gray-600 text-center mt-2 italic">
                    The reaction of coal with water under high temperatures produces carbon monoxide and water.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Electrolysis */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Electrolysis</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Electrolysis splits water into hydrogen and oxygen with no by-products other than those two gases. When powered by renewable electricity, this process produces green hydrogen, offering a truly carbon-free fuel. If the electricity source is fossil-based, however, the hydrogen cannot be considered green, as its production indirectly carries the carbon footprint of the power grid.
            </p>
            <div className="ml-6 space-y-3">
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">Photolytic</h4>
                
                <div className="mb-4">
                  <img 
                    src={photolyticImage} 
                    alt="Photolytic hydrogen production setup"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md bg-gray-50 p-4"
                  />
                </div>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Photolytic (Photocatalytic) Hydrogen Production uses a simple setup that requires only water, a suitable photocatalyst, and a light source. It is a clean method, producing only hydrogen and oxygen as by-products.
                </p>
              </div>
            </div>
          </div>

          {/* Thermochemical */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Thermochemical</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Also known as the Thermochemical Water Splitting Cycle (TWSC), these use heat, alongside chemical reactions to produce hydrogen and oxygen. This method is being considered due to its lack of carbon emissions, and potential to use heat generated from other processes.
            </p>
            <div className="ml-6 space-y-3">
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Sulphur-Iodine (S-I) Cycle</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  The Sulfur–Iodine (S–I) cycle is a type of thermochemical water-splitting process that undergoes three main reactions. Water enters the cycle as the main feed, while hydrogen and oxygen are produced as the final outputs. The iodine and sulphur dioxide act as recyclable agents, driving the reactions without being consumed.
                </p>
                
                <div className="mt-6">
                  <img 
                    src={siCycleImage} 
                    alt="Sulphur-Iodine cycle process diagram"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md bg-gray-50 p-4"
                  />
                  <p className="text-sm text-gray-600 text-center mt-2 italic">
                    Illustration of the Sulphur-Iodine cycle thermochemical process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biomass */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Biomass</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Biomass Gasification is another pathway for producing hydrogen, where organic feedstocks are converted into synthesis gas that can be processed to release hydrogen. However, biomass sources often suffer from inconsistency and variable quality control, which makes scaling up this method more difficult compared to natural gas reforming or electrolysis.
            </p>
            
            <div className="mt-6">
              <img 
                src={biomassImage} 
                alt="Biomass gasification process flowsheet"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-md bg-gray-50 p-4"
              />
              <p className="text-sm text-gray-600 text-center mt-2 italic">
                Generic flow sheet for hydrogen, methanol, or FT diesel production via biomass gasification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
