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
        </div>

        <div className="mt-12 w-full max-w-5xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900" data-testid="text-key-dangers-title">
            Key Dangers in Biomethane Production Process
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 text-center" data-testid="text-key-dangers-description">
            Content coming soon...
          </p>
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
