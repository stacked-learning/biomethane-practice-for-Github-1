import hydrogenBlendingImage from "@assets/image_1759277435065.png";

export default function HydrogenBlending() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Hydrogen Blending
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={hydrogenBlendingImage} 
              alt="Hydrogen blending industrial facility with natural gas pipelines"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            />
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Hydrogen blending helps achieve short-term emissions reductions without the need for significant overhauls or changes to existing infrastructure. Hydrogen is introduced into natural gas pipelines or gas-powered plants, with a proportion of up to 20-25% by volume, allowing for a smooth integration. At this hydrogen concentration, the gas mixture can perform effectively with the existing combustion equipment, minimising the need for additional modifications. The resulting blend has a lower density and specific gravity than natural gas, which affects its overall characteristics and energy content. This reduction in density and specific gravity leads to a decrease in energy delivery capacity of the pipeline, especially when operating at the same pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
