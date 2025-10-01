import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import HydrogenSafetyCards from "@/components/HydrogenSafetyCards";

export default function GeneralSafety() {
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
            General Hydrogen Safety
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the fundamental safety considerations when working with hydrogen
          </p>
        </div>

        <div className="mt-12">
          <HydrogenSafetyCards />
        </div>
      </div>
    </div>
  );
}
