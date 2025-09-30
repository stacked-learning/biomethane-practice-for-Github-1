import feedstockImage from "@assets/image_1759206573871.png";

export default function HydrogenProductionFeedstock() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Hydrogen Production Feedstock
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            While water electrolysis is most commonly associated with the production of green hydrogen, other feedstocks such as biomass, biogas, or waste gases can also be used. The choice of feedstock largely depends on the processing technologies available, regional infrastructure, and the local availability of resources, making hydrogen production a flexible pathway that can adapt to different contexts and supply chains.
          </p>
          
          <div className="mt-8">
            <img 
              src={feedstockImage} 
              alt="Hydrogen production feedstock options"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md bg-gray-100 p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
