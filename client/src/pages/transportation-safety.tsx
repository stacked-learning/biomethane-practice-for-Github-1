import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import TransportationSafetyCards from "@/components/TransportationSafetyCards";

export default function TransportationSafety() {
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
            Transportation Safety
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
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
