import { Layers, Truck, Anchor, Zap, DollarSign, MapPin, TrendingUp, Shield, Clock, Settings } from "lucide-react";

interface TransportMethod {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  pros: string[];
  cons: string[];
}

interface Factor {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const transportMethods: TransportMethod[] = [
  {
    id: "pipeline",
    title: "Pipeline",
    icon: Layers,
    pros: [
      "Most cost-effective method for large-scale, continuous hydrogen transportation over medium to long distances",
      "Dedicated pipeline infrastructure ensures high purity and minimal contamination risks",
      "Hydrogen pipelines typically operate between 20-100 bars of pressure",
      "Ideal for connecting production facilities to industrial clusters and refueling stations"
    ],
    cons: [
      "Requires significant upfront capital investment for infrastructure development",
      "Limited flexibility once pipeline routes are established",
      "Long development timelines for new pipeline projects",
      "Potential for hydrogen embrittlement in pipelines over time"
    ]
  },
  {
    id: "road",
    title: "Road",
    icon: Truck,
    pros: [
      "Flexible and versatile transportation using high-pressure tube trailers or liquid hydrogen trucks",
      "Compressed hydrogen trailers operate at 200-500 bar pressure with typical capacity of 300-1000 kg",
      "Liquid hydrogen trucks offer higher capacity but require cryogenic storage at around -253°C or below",
      "Excellent for last-mile delivery and reaching remote or distributed locations"
    ],
    cons: [
      "Higher per-unit costs compared to pipeline transportation",
      "Limited capacity per trip, further reduced by safety regulations",
      "Increased safety considerations for high-pressure transport on public roads",
      "Weather and traffic conditions can impact delivery schedules and costs"
    ]
  },
  {
    id: "tankers",
    title: "Tankers",
    icon: Anchor,
    pros: [
      "Maritime transportation using specialized liquid hydrogen carriers for international trade",
      "More cost-effective than pipelines for long-distance shipping (over 5,000km)",
      "Advanced vacuum-insulated storage systems maintain cryogenic temperatures during transit",
      "Essential for global hydrogen supply chains and intercontinental energy trade"
    ],
    cons: [
      "Emerging technology with limited commercial deployment and operational experience",
      "High energy losses due to hydrogen boil-off during long ocean voyages",
      "Requires specialized port infrastructure for loading and unloading operations",
      "Weather conditions and sea states can impact delivery schedules"
    ]
  },
  {
    id: "other",
    title: "Other",
    icon: Zap,
    pros: [
      "Railway and inland waterways allow different options for transport",
      "Some methods (e.g. LOHCs, ammonia) leverage existing fuel or chemical infrastructure, removing many challenges associated with hydrogen alone",
      "Solid-state (metal hydrides) and LOHCs are safer to store/handle than compressed or cryogenic H₂",
      "Underground hydrogen storage in salt caverns or depleted gas fields for seasonal storage"
    ],
    cons: [
      "Many of these methods require energy-intensive processes (e.g. hydrogenation, cracking ammonia)",
      "High Capital or Operating Costs due to railcars, barges, cryogenic tanks, and hydride systems need special equipment and infrastructure",
      "Multiple energy steps result in efficiency losses compared to direct hydrogen transport",
      "Some technologies (e.g. drones, LOHCs) are still emerging or niche, not yet viable for mass deployment"
    ]
  }
];

const factors: Factor[] = [
  {
    id: "economic",
    title: "Economic Considerations",
    description: "Capital investment requirements, operational costs, infrastructure development expenses, and long-term financial viability across different transportation distances and volumes.",
    icon: DollarSign
  },
  {
    id: "geography",
    title: "Distance & Geography",
    description: "Transportation distance, terrain challenges, existing infrastructure availability, and geographical constraints that influence method selection and feasibility.",
    icon: MapPin
  },
  {
    id: "volume",
    title: "Volume & Scale",
    description: "Required hydrogen quantities, delivery frequency, scalability potential, and capacity utilization rates that determine the most efficient transportation approach.",
    icon: TrendingUp
  },
  {
    id: "safety",
    title: "Safety & Reliability",
    description: "Safety protocols, risk assessment, regulatory compliance, environmental impact, and system reliability requirements for secure hydrogen transportation.",
    icon: Shield
  },
  {
    id: "time",
    title: "Time Sensitivity",
    description: "Delivery schedule requirements, supply chain timing, storage capabilities, and the urgency of hydrogen supply for end-use applications.",
    icon: Clock
  },
  {
    id: "technical",
    title: "Technical Requirements",
    description: "Hydrogen purity specifications, pressure and temperature requirements, compatibility with existing infrastructure, and technological maturity of available solutions.",
    icon: Settings
  }
];

export default function TransportMethods() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          Hydrogen Transportation Methods
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-normal">
          Explore the different methods used to transport hydrogen efficiently and safely
        </p>
      </div>

      {/* Transportation Methods Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {transportMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <div
              key={method.id}
              className={`
                bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 
                shadow-lg border border-gray-200 transition-all duration-300 
                hover:shadow-xl hover:-translate-y-2 animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center mb-8 pb-6 border-b-2 border-gray-200">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 hover:scale-105">
                  <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2} />
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 tracking-wide">
                  {method.title}
                </h2>
              </div>

              {/* Card Content */}
              <div className="space-y-6">
                {/* Pros Section */}
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-3 pb-2 border-b-2 border-gray-200">
                    Pros
                  </h4>
                  <ul className="space-y-3">
                    {method.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-600 font-bold text-lg flex-shrink-0 mt-0.5">•</span>
                        <span className="text-base lg:text-lg leading-relaxed">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons Section */}
                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-3 pb-2 border-b-2 border-gray-200">
                    Cons
                  </h4>
                  <ul className="space-y-3">
                    {method.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-start gap-3 text-gray-700">
                        <span className="text-red-600 font-bold text-lg flex-shrink-0 mt-0.5">•</span>
                        <span className="text-base lg:text-lg leading-relaxed">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Factors Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 tracking-tight">
            Key Factors in Transportation Method Selection
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-normal">
            When choosing the optimal hydrogen transportation method, several critical factors must be evaluated
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {factors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <div
                key={factor.id}
                className={`
                  flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 
                  rounded-2xl border border-gray-200 shadow-md transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 animate-slide-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 hover:scale-105">
                  <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3 tracking-wide">
                    {factor.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}