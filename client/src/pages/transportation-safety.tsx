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
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
            Safe and efficient transportation is a critical component of the hydrogen supply chain, ensuring that hydrogen can move reliably from production sites to end users. Current transport options include pipelines, road transport, and tankers, with ongoing development to improve efficiency and safety. Each method presents unique challenges, such as hydrogen embrittlement in pipelines or managing complex systems during road and marine transport. Strict safety procedures and protocols are essential to protect both the workforce and the public, while maintaining the integrity of the hydrogen being transported.
          </p>
          <p className="mt-4 text-lg text-gray-800 font-bold italic max-w-4xl mx-auto">
            Scroll down to learn more about the various hydrogen transportation methods
          </p>
        </div>

        <div className="mt-12">
          <TransportationSafetyCards />
        </div>
      </div>
    </div>
  );
}
