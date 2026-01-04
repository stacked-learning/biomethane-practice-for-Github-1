import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import TransportationSafetyCards from "@/components/TransportationSafetyCards";

export default function TransportationSafety() {
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
            onClick={() => setLocation("/safety/production")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-orange-400 hover:bg-orange-300 text-white transition-all duration-300"
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
            onClick={() => setLocation("/")}
            className="px-10 py-5 rounded-full font-semibold text-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300 shadow-lg"
            data-testid="button-nav-transport"
          >
            Transport
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Transportation Safety
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <h2 className="mt-8 text-2xl font-semibold text-gray-800 mb-4">
            Critical Safety Considerations for Hydrogen Transportation Methods
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            There are various means of transporting hydrogen from the production
            point to the end user, and each option involves specific safety
            considerations. For example, pipeline transport is efficient but can
            be prone to issues like hydrogen embrittlement, where the material
            becomes brittle and more prone to cracking due to the presence of
            hydrogen. Road and tanker transport, while flexible, face the
            challenge of ensuring secure containment under pressure or in
            cryogenic states. Additionally, hydrogen is highly flammable, so
            managing risks such as leakage, combustion, and proper ventilation
            is crucial to prevent accidents. To maintain the safety of workers
            and the public, robust safety procedures must be followed, including
            regular inspections, monitoring for leaks, and managing potential
            ignition sources.
          </p>

          {/* Common Causes of Pipeline Leaks */}
          <div className="mt-12 text-left">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Common Causes of Pipeline Leaks
              </h3>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Unauthorised Excavation and Construction Activities",
                "Extreme Weather Damaging Pipes",
                "Pinholes from Corrosion in Pipes"
              ].map((cause, index) => (
                <div
                  key={index}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-xl p-6 flex items-center justify-center text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-default min-h-[100px]"
                  data-testid={`button-pipeline-cause-${index}`}
                >
                  {cause}
                </div>
              ))}
            </div>
          </div>

          {/* Gas Related Pipeline Emergencies */}
          <div className="mt-12">
            <div className="border-b border-gray-200 pb-4 mb-6 text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Gas Related Pipeline Emergencies
              </h3>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
            <div className="max-w-4xl text-gray-700 text-lg leading-relaxed text-left">
              <ul className="space-y-4 list-disc list-outside ml-6">
                <li>
                  The area is isolated from the general public. Unauthorised persons, the public, and the media should be prevented from entering.
                </li>
                <li>
                  An exclusion zone can be established around the location of fires, or where vapour clouds may form. The pipeline licensee should be contacted about establishing an exclusion zone - they will have calculated the exclusion zone distance.
                  <ul className="mt-6 space-y-4 list-[circle] list-outside ml-12 text-gray-700">
                    <li>
                      Additionally with low-pressure leaks of natural gas, a reading greater than 1% Gas-in-Air or 20% Lower Explosive Limit (LEL) will be inside this zone.
                    </li>
                    <li>
                      An exclusion zone is necessary due to heat radiation from fires.
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="mt-8 overflow-hidden rounded-xl border border-red-200 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-red-600 text-white uppercase text-xs">
                    <tr>
                      <th className="px-6 py-4 font-bold border-b border-red-700">Heat intensity (kW/m²)</th>
                      <th className="px-6 py-4 font-bold border-b border-red-700">Effect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-red-100">
                    <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-red-100/30">4.7</td>
                      <td className="px-6 py-4 text-gray-600">
                        Exposure causes pain within 15-20 seconds, and injury occurs after 30 seconds, typically resulting in at least second-degree burns.
                      </td>
                    </tr>
                    <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 bg-red-100/30">12.6</td>
                      <td className="px-6 py-4 text-gray-600 space-y-4">
                        <p>High probability of injury. Extended exposure carries a significant risk of fatality.</p>
                        <p>Prolonged exposure can raise the temperature of wooden structures to the point where they may ignite if a flame is present.</p>
                        <p>Thin steel surfaces with insulation on the side away from the fire may experience enough thermal stress to lead to structural failure.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-left text-sm italic text-gray-600">
                An exclusion zone is neccesary due to the irradiated heat from fires. This table shows the consequences of different fire heat intensities.
              </p>

              <div className="mt-8 text-gray-700 text-lg leading-relaxed text-left">
                <ul className="space-y-4 list-disc list-outside ml-6">
                  <li>
                    No excavations should be attempted to identify the pressure or diameter of the pipes. Instead, the gas company should be contacted for advice on the asset and the exclusion zone.
                  </li>
                  <li>
                    Any ignition sources should be removed. This can be undertaken by:
                    <ul className="mt-2 space-y-2 list-[circle] list-outside ml-12">
                      <li>Restricting any vehicle traffic/access</li>
                      <li>Contacting electricity distribution businesses to request isolation or de-energisation of electrical infrastructure.</li>
                      <li>Prohibiting usage of unsafe electrical equipment (for instance anything producing sparks, mobile phones, etc).</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <TransportationSafetyCards />
        </div>
      </div>
    </div>
  );
}
