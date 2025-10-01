import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import HydrogenStorageMethods from "@/components/HydrogenStorageMethods";
import VolumetricDensity from "@/components/VolumetricDensity";
import PPESafety from "@/components/PPESafety";
import OxygenChart from "@/components/OxygenChart";

export default function StorageSafety() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-hydrogen-600 hover:text-hydrogen-700 font-medium mb-6 transition-colors"
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Quadrant
        </button>

        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Storage Safety
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
            An important consideration in the hydrogen supply chain is how it is stored. There are several storage options available, ranging from traditional compressed gas storage to more advanced systems involving cryogenic liquefaction and micro-structured technologies. Each method comes with its own set of challenges, including cost, efficiency, and safety concerns. Given the inherent dangers of hydrogen, including its flammability and potential for leakage, those involved in hydrogen storage must be fully aware of the specific risks and safety protocols associated with each storage method.
          </p>
          <p className="mt-4 text-lg text-gray-800 font-bold italic max-w-4xl mx-auto">
            Scroll down to discover the different hydrogen storage methods and their associated risks.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <div>
            <HydrogenStorageMethods />
          </div>
          
          <div className="flex items-center justify-center py-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
            <div className="px-4">
              <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
          </div>
          
          <div>
            <VolumetricDensity />
          </div>
          
          <div className="flex items-center justify-center py-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
            <div className="px-4">
              <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
          </div>
          
          <div>
            <PPESafety />
          </div>
          
          <div className="flex items-center justify-center py-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
            <div className="px-4">
              <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
          </div>
          
          <div>
            <OxygenChart />
          </div>
        </div>
      </div>
    </div>
  );
}
