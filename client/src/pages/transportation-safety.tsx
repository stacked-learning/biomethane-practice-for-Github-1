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
        </div>

        <div className="mt-12">
          <TransportationSafetyCards />
        </div>
      </div>
    </div>
  );
}
