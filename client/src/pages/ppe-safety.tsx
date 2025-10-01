import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import PPESafety from "@/components/PPESafety";

export default function PPESafetyPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setLocation("/")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-hydrogen-500 hover:bg-hydrogen-600 text-white transition-all duration-300"
            data-testid="button-nav-product"
          >
            Product
          </button>
          <button
            onClick={() => setLocation("/")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-hydrogen-500 hover:bg-hydrogen-600 text-white transition-all duration-300"
            data-testid="button-nav-transport"
          >
            Transport
          </button>
          <button
            onClick={() => setLocation("/")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-hydrogen-500 hover:bg-hydrogen-600 text-white transition-all duration-300"
            data-testid="button-nav-storage"
          >
            Storage
          </button>
          <button
            onClick={() => setLocation("/")}
            className="px-8 py-4 rounded-full font-medium text-lg bg-hydrogen-500 hover:bg-hydrogen-600 text-white transition-all duration-300"
            data-testid="button-nav-process"
          >
            Process
          </button>
        </div>

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
            Personal Protective Equipment Safety
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Each hydrogen production method presents unique safety risks. Green hydrogen, made through electrolysis, involves electrical hazards and pressurised gases. Steam methane reforming carries risks of leaks, explosions, and hazardous gases like carbon monoxide. Coal and biomass gasification introduce additional dangers, such as toxic by-products and explosion hazards. Safety measures must be tailored to each method's specific risks.
          </p>
        </div>

        <div className="mt-12">
          <PPESafety />
        </div>
      </div>
    </div>
  );
}
