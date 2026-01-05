import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import BiogasPlantSafetyCards from "@/components/BiogasPlantSafetyCards";

export default function ProductionSafety() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setLocation("/safety/general")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-product"
          >
            Product
          </button>
          <button
            onClick={() => setLocation("/")}
            className="px-10 py-5 rounded-full font-semibold text-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300 shadow-lg"
            data-testid="button-nav-process"
          >
            Process
          </button>
          <button
            onClick={() => setLocation("/safety/ppe")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-storage"
          >
            Storage
          </button>
          <button
            onClick={() => setLocation("/safety/transportation")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
            data-testid="button-nav-transport"
          >
            Transport
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Production Method Safety
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            The production process of biomethane comes with several inherent risks. Firstly, there are unique biological compounds used throughout the production process, which exposes workers to risks not commonly associated in other natural gas infrastructure. Additionally, many common risks associated with natural gas and hydrogen production are present, due to the nature of biogas and biomethane.
          </p>
        </div>

        <div className="mt-12 w-full max-w-5xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900" data-testid="text-phases-title">
            Phases of Biogas/Biomethane Plant Operations
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6" data-testid="section-normal-operations">
            <h3 className="text-xl font-bold text-orange-600 mb-3">Normal Operations</h3>
            <p className="text-gray-700 leading-relaxed">
              The phase where the plant is continuously operating. During this phase, the plant is expected to function within design parameters. There are still many dangers anticipated within this phase, as mentioned throughout this quadrant.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
            The most dangerous phases of work in a biogas plant are:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl shadow-lg p-6" data-testid="section-maintenance-work">
              <h3 className="text-xl font-bold text-red-700 mb-3">Maintenance Work</h3>
              <p className="text-gray-700 leading-relaxed">
                Only people with relevant experience, knowledge, and qualifications should operate on biogas/biomethane facilities. Appropriate safety measures should be established, and a supervisor appointed.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl shadow-lg p-6" data-testid="section-startup">
              <h3 className="text-xl font-bold text-red-700 mb-3">Start-Up/Commissioning</h3>
              <p className="text-gray-700 leading-relaxed">
                During the start-up phase, there may be air contained within the previously dormant equipment. As biogas begins to flow through the equipment, flammable conditions may form. For this reason, adequate purging with biogas must take place before equipment like a downstream blower or flares can be turned on. This prevents ignition of the gases, or burn-back of flammable mixtures in the equipment.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl shadow-lg p-6" data-testid="section-shutdown">
              <h3 className="text-xl font-bold text-red-700 mb-3">Shut-down</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The shutdown involves several risks, which arise from the change in conditions, and failure to adhere to correct protocol. For any shutdown of a biogas/biomethane facility, ensure that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Electrical Power is fully shut-off to the system</li>
                <li>Pipes and system are checked for areas of flammable gases, that haven't been fully vented</li>
                <li>At the time of shutdown/decommissioning, there may still be input and digestate materials present. Caution should be exercised when emptying digester vessels, to avoid an explosive/toxic gas mixture which can harm workers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BiogasPlantSafetyCards />
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900" data-testid="text-ignition-sources-title">
            Sources of Ignition in Biogas/Biomethane Plants
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden" data-testid="table-ignition-sources">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-6 py-4 text-left font-bold text-lg">Source of ignition</th>
                  <th className="px-6 py-4 text-left font-bold text-lg">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-200 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Hot surfaces</td>
                  <td className="px-6 py-4 text-gray-600">&gt;500 °C (turbochargers)</td>
                </tr>
                <tr className="border-b border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Naked flames</td>
                  <td className="px-6 py-4 text-gray-600">Fire, flames, embers</td>
                </tr>
                <tr className="border-b border-orange-200 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Mechanically generated sparks</td>
                  <td className="px-6 py-4 text-gray-600">Friction, beating, grinding</td>
                </tr>
                <tr className="border-b border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Electrically generated sparks</td>
                  <td className="px-6 py-4 text-gray-600">Switching operations, loose connection, equalising currents</td>
                </tr>
                <tr className="border-b border-orange-200 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Exothermic reaction</td>
                  <td className="px-6 py-4 text-gray-600">Spontaneous combustion of dusts</td>
                </tr>
                <tr className="border-b border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Lightning strike</td>
                  <td className="px-6 py-4 text-gray-600">Missing lightning protection</td>
                </tr>
                <tr className="hover:bg-orange-100 transition-colors">
                  <td className="px-6 py-4 text-gray-800 font-medium">Electrostatic discharge</td>
                  <td className="px-6 py-4 text-gray-600">Caused by missing potential equalization</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4 text-center italic" data-testid="text-ignition-sources-description">
            Potential sources of ignition in biogas plants (TRBS 2153, 2009)
          </p>
        </div>
      </div>
    </div>
  );
}
