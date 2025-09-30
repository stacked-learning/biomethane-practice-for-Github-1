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
            <div className="ml-6 space-y-3">
              <h4 className="text-xl font-semibold text-gray-700">Steam Methane Reforming</h4>
              <h4 className="text-xl font-semibold text-gray-700">Coal</h4>
            </div>
          </div>

          {/* Electrolysis */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Electrolysis</h3>
            <div className="ml-6 space-y-3">
              <h4 className="text-xl font-semibold text-gray-700">Photolytic</h4>
            </div>
          </div>

          {/* Thermochemical */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Thermochemical</h3>
            <div className="ml-6 space-y-3">
              <h4 className="text-xl font-semibold text-gray-700">Sulphur-Iodine (S-I) Cycle</h4>
            </div>
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
