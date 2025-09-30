import { useState } from "react";
import transportCostsImg from "@assets/image_1759272982996.png";

interface TransportMethod {
  id: string;
  title: string;
  description: string;
}

const methods: TransportMethod[] = [
  {
    id: "pipelines",
    title: "Pipelines",
    description: "Pipelines involve high establishment costs because of the need to build infrastructure and secure rights of way for ongoing maintenance. However, once operational, they are the most cost-effective option for transporting large volumes of hydrogen, as their running costs are relatively low compared with other methods. This makes pipelines especially attractive for large-scale, long-term projects."
  },
  {
    id: "road",
    title: "Road",
    description: "Road transportation of hydrogen requires much less upfront investment, since vehicles and equipment are cheaper to construct than an entire pipeline network. That said, trucks are limited to smaller quantities of hydrogen, making them suitable for short distances or flexible deliveries. Their operational cost is higher on a per-unit basis, as it depends heavily on the distance travelled and whether the hydrogen is stored as liquefied or compressed gas."
  },
  {
    id: "tankers",
    title: "Tankers",
    description: "Shipping hydrogen is currently expensive, given the price of specialised tankers, estimated at $310–533 million AUD per vessel. Infrastructure exists for moving ammonia, which is often used as a hydrogen carrier, but is not yet well-established for hydrogen itself. Despite the high establishment costs, shipping becomes economically viable over very long distances—beyond 5,000 kilometers."
  }
];

export default function TransportationCosts() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Image */}
      <div className="mb-8 flex justify-center">
        <img 
          src={transportCostsImg} 
          alt="Transportation costs comparison" 
          className="w-full max-w-4xl h-auto rounded-lg"
          data-testid="img-transport-costs"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(selectedMethod === method.id ? null : method.id)}
            className={`px-12 py-5 rounded-lg text-xl font-semibold text-white transition-all duration-200 ${
              selectedMethod === method.id
                ? 'bg-blue-700 shadow-lg scale-105'
                : 'bg-blue-500 hover:bg-blue-600 shadow-md'
            }`}
            data-testid={`button-${method.id}`}
          >
            {method.title}
          </button>
        ))}
      </div>

      {/* Description */}
      {selectedMethod && (
        <div 
          className="bg-gray-50 border border-gray-200 rounded-lg p-6 animate-fade-in max-w-4xl mx-auto"
          data-testid={`description-${selectedMethod}`}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {methods.find(m => m.id === selectedMethod)?.title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {methods.find(m => m.id === selectedMethod)?.description}
          </p>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
