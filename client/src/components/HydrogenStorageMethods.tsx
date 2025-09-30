import geologicalImg from "@assets/stock_images/underground_salt_cav_e18d797a.jpg";
import compressedImg from "@assets/stock_images/high_pressure_gas_cy_ca0b6dc0.jpg";
import liquifiedImg from "@assets/stock_images/cryogenic_liquid_sto_c002e660.jpg";
import solidStateImg from "@assets/stock_images/advanced_materials_t_1c6b41f7.jpg";
import chemicalImg from "@assets/stock_images/chemical_process_ind_2ba0812d.jpg";

interface StorageMethod {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  costPoints: string[];
}

const storageMethods: StorageMethod[] = [
  {
    id: "geological",
    title: "Geological",
    description: "Salt caverns are one of the most promising options for large-scale hydrogen storage because rock salt is impermeable and self-sealing, which minimises leakage and contamination. They allow rapid injection and withdrawal, making them ideal for balancing fluctuating renewable generation and seasonal demand. On the downside, caverns are only possible where thick salt formations exist, and their creation requires costly solution mining and brine disposal. Despite these limitations, their safety, flexibility, and ability to store pure hydrogen make them a leading candidate for future energy systems.",
    imageUrl: geologicalImg,
    costPoints: [
      "Uses salt caverns, depleted gas reservoirs, or aquifers.",
      "Moderate to high capital cost depending on geology and site preparation.",
      "Economical for large-scale, long-term storage due to low operational energy requirements, but location-dependent and limited by suitable sites."
    ]
  },
  {
    id: "compressed",
    title: "Compressed Hydrogen Storage",
    description: "Hydrogen is stored as a high-pressure to reduce its large natural volume. Compression allows practical storage for transport and energy use, though it remains less dense than liquid hydrogen or hydrocarbons. Tanks must be specially designed with advanced materials (carbon-fibre composites) to withstand pressure and avoid leakage. While safer than cryogenic systems and widely used in vehicles and refuelling stations, the downsides are high compression energy costs, lower energy density, and challenges in scaling up for bulk storage.",
    imageUrl: compressedImg,
    costPoints: [
      "Stored in high-pressure cylinders or tanks.",
      "Lower initial capital cost compared with solid-state or chemical storage.",
      "High operational cost due to energy-intensive compression and need for robust high-pressure infrastructure."
    ]
  },
  {
    id: "liquified",
    title: "Liquified Hydrogen",
    description: "Hydrogen can be stored as a cryogenic liquid at around –253 °C, achieving much higher density than compressed gas. This makes it attractive for applications where volume is critical, such as space launch systems and specialised industries like semiconductors. However, liquefaction is energy-intensive (consuming up to 30–40% of hydrogen's energy content) and requires complex insulated tanks to minimise boil-off losses. The extreme temperatures and costs limit its widespread use, but it remains essential where compact, high-density hydrogen is needed.",
    imageUrl: liquifiedImg,
    costPoints: [
      "Stored at cryogenic temperatures.",
      "Capital-intensive infrastructure for insulation and liquefaction.",
      "High energy cost for cooling and maintaining low temperatures, though offers higher volumetric energy density."
    ]
  },
  {
    id: "solid-state",
    title: "Solid-State Hydrogen Storage",
    description: "Solid-state hydrogen storage is a promising approach for safer, more efficient energy storage, using advanced materials such as metal–organic frameworks (MOFs), carbon nanostructures, and metal hydrides (e.g., magnesium, aluminium alloys, or palladium) to adsorb or absorb hydrogen. By exploiting nanometre-scale pores and crystal lattices, these systems can store significant amounts of hydrogen at far lower pressures than conventional cylinders, improving safety and lowering the risk of leaks or explosions. This reduction in pressure also saves the energy otherwise spent on extreme compression or cryogenic cooling, making the entire storage and transport process more economical and practical for future hydrogen energy systems.",
    imageUrl: solidStateImg,
    costPoints: [
      "High upfront costs due to advanced materials and precision engineering.",
      "Long-term savings possible through lower compression or cooling energy requirements and enhanced safety."
    ]
  },
  {
    id: "chemical",
    title: "Chemical Based Storage",
    description: "Hydrogen can be stored by binding it into solids or liquids that chemically absorb or react with it, such as alkaline carriers like sodium borohydride or ammonia borane, which can release large amounts of hydrogen through hydrolysis, offering high storage density. However, they are costly and require efficient recycling processes. Ammonia (NH₃) is also a leading hydrogen carrier, with nearly double the volumetric energy density of liquefied hydrogen and easier transport, though current cracking technologies are energy-intensive and still developing.",
    imageUrl: chemicalImg,
    costPoints: [
      "High material and processing costs.",
      "Hydrolysis or cracking processes require energy and efficient recycling, increasing total cost per kilogram of hydrogen delivered."
    ]
  }
];

export default function HydrogenStorageMethods() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2" data-testid="text-storage-methods-title">
          Hydrogen Storage Methods
        </h1>
        <p className="text-gray-600" data-testid="text-storage-methods-subtitle">
          Comparing different approaches to hydrogen storage and their applications
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {storageMethods.map((method) => (
          <div 
            key={method.id}
            className="flex flex-col md:flex-row gap-4 rounded-lg transition-all hover:bg-gray-50"
            data-testid={`card-storage-method-${method.id}`}
          >
            {method.imageUrl && (
              <div className="flex-shrink-0 w-full md:w-60 h-48 md:h-auto rounded-lg overflow-hidden">
                <img 
                  src={method.imageUrl} 
                  alt={`${method.title} storage`}
                  className="w-full h-full object-cover"
                  data-testid={`img-storage-${method.id}`}
                />
              </div>
            )}
            
            <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3" data-testid={`text-storage-title-${method.id}`}>
                {method.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4" data-testid={`text-storage-desc-${method.id}`}>
                {method.description}
              </p>
              
              <div className="border-t border-gray-200 pt-3">
                <h4 className="text-sm font-medium text-gray-900 mb-2" data-testid={`text-cost-title-${method.id}`}>
                  Cost Considerations:
                </h4>
                <ul className="flex flex-col gap-1">
                  {method.costPoints.map((point, index) => (
                    <li 
                      key={index}
                      className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                      data-testid={`text-cost-point-${method.id}-${index}`}
                    >
                      <span className="absolute left-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
