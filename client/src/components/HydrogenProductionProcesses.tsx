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
            <ul className="ml-6 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-gray-700">Steam Methane Reforming</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-gray-700">Coal</span>
              </li>
            </ul>
          </div>

          {/* Electrolysis */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Electrolysis</h3>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-gray-700">Photolytic</span>
              </li>
            </ul>
          </div>

          {/* Thermochemical */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Thermochemical</h3>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-gray-700">Sulphur-Iodine (S-I) Cycle</span>
              </li>
            </ul>
          </div>

          {/* Biomass */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Biomass</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
