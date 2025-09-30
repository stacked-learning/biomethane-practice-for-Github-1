import turbineImage from "@assets/image_1759235067918.png";

export default function HydrogenGasTurbines() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl lg:text-4xl font-bold text-hydrogen-600 mb-6 text-center">
          Hydrogen and Gas Turbines
        </h2>
        <div className="w-20 h-1 bg-hydrogen-500 mx-auto rounded-full mb-8"></div>
        
        <div className="mb-8">
          <img
            src={turbineImage}
            alt="Gas turbine engine cross-section"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            data-testid="img-gas-turbine"
          />
        </div>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Hydrogen offers a promising short-term solution for reducing emissions from fossil fuel-dependent equipment and machinery, such as gas turbine engines, with water being the main byproduct of its combustion. Replacing natural gas with green hydrogen is a crucial step towards achieving a carbon-free energy system.
          </p>
          
          <p className="text-lg leading-relaxed font-medium">
            However, hydrogen presents unique challenges compared to currently utilized fuels.
          </p>
          
          <ul className="space-y-3 text-lg leading-relaxed">
            <li className="flex items-start">
              <span className="font-semibold text-hydrogen-700 mr-2">•</span>
              <span>Hydrogen production, storage, and transportation are more complex.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-hydrogen-700 mr-2">•</span>
              <span>Hydrogen requires larger volumes than other fuels.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-hydrogen-700 mr-2">•</span>
              <span>Higher hydrogen blends also necessitate modifications to existing turbine engines, especially to the combustion system, and control mechanisms employed.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-hydrogen-700 mr-2">•</span>
              <span>Additionally, hydrogen's higher burning temperature can shorten component lifespan, requiring significant changes to cooling systems and coatings.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
