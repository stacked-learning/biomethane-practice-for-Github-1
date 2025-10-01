export default function VolumetricDensity() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
          Volumetric versus Energy Density
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          There are two main forms of assessing hydrogens energy content
        </p>
        <div className="w-full h-px bg-blue-600 opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-xl font-medium text-blue-600">
            Volumetric Density
          </h2>
          
          <div className="flex justify-center items-center">
            <svg 
              className="w-20 h-20 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="font-medium text-blue-600 opacity-80">
              Energy per kilogram
            </p>
            <p className="text-sm text-blue-600 opacity-60">
              [kJ/kg]
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-xl font-medium text-emerald-600">
            Energy Density
          </h2>
          
          <div className="flex justify-center items-center">
            <svg 
              className="w-20 h-20 text-emerald-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="font-medium text-emerald-600">
              Volumetric Density: Energy per
            </p>
            <p className="font-medium text-emerald-600">
              unit volume
            </p>
            <p className="text-sm text-emerald-600 opacity-60">
              [kJ/L] or [kJ/m³]
            </p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Hydrogen has the highest energy density by mass of any fuel owing to its lightweight. However, its volumetric energy density is lower than most other fuels and energy carriers.
        </p>
      </div>
    </div>
  );
}
