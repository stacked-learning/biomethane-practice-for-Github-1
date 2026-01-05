import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import ProductionMethodSafetyCards from "@/components/ProductionMethodSafetyCards";
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
            Hydrogen production methods come with varying safety risks. "Green
            hydrogen" from renewable sources and electrolysis is generally
            safer, though it still poses electrical hazards and risks related to
            flammable gas mixtures. Steam methane reforming (SMR) involves high
            temperatures and pressures, increasing the potential for equipment
            failure and other hazards. Coal and biomass gasification introduce
            risks from toxic chemicals, fire, and high-temperature processes.
            Each method requires stringent safety measures to manage
            environmental, energy, and operational risks.
          </p>
        </div>

        <div className="mt-12">
          <ProductionMethodSafetyCards />
        </div>

        <div className="mt-16">
          <BiogasPlantSafetyCards />
        </div>
      </div>
    </div>
  );
}
