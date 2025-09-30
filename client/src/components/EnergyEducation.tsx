import { Zap, Battery, Atom } from "lucide-react";

export default function EnergyEducation() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Understanding Energy Systems
        </h2>
        <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
          Understanding the difference between energy source and carriers is crucial to understanding the role of hydrogen in decarbonisation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div 
          className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          data-testid="card-energy-source"
        >
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 p-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Energy Source</h3>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            Naturally occurring sources of energy, which can be converted to other useful forms of energy.
          </p>
        </div>

        <div 
          className="bg-white border-l-4 border-green-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          data-testid="card-energy-carrier"
        >
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-green-100 p-2">
                <Battery className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-green-600">Energy Carrier</h3>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            Defined as something with the ability to store or deliver energy from one place to another.
          </p>
        </div>
      </div>

      <div 
        className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
        data-testid="card-hydrogen-carrier"
      >
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-sky-100 p-2">
              <Atom className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-sky-600">Hydrogen as an Energy Carrier</h3>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-gray-700">
          On earth, hydrogen is an <strong>energy carrier</strong>, rather than an energy source - as naturally hydrogen is founded in very limited amounts. It can store tremendous amounts of energy obtained through renewable sources, including wind, solar, and hydro power, and other non-renewable processes.
        </p>
      </div>
    </div>
  );
}
