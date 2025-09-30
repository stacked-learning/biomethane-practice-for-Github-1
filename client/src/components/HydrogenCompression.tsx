import compressorImg from "@assets/image_1759239790369.png";

export default function HydrogenCompression() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <article className="flex flex-col gap-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={compressorImg}
            alt="Rotary screw compressor cross-section showing internal components"
            className="w-full h-auto object-cover"
            data-testid="img-compressor"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-prose mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" data-testid="heading-compression">
            Hydrogen Compression
          </h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hydrogen is typically produced at lower pressures (20-30 bar) than what is required for efficient storage or transportation. Compression densifies the hydrogen gas, reducing its volume, making it easier to handle. Additionally, compressors are integral to ensuring hydrogen can be supplied to the end-user in adequate condition such as high pressure applications.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Compressor types commonly used on hydrogen include:
            </p>

            <ul className="flex flex-col gap-3 text-base md:text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800"><strong>Reciprocating Air Compressors:</strong> Use a piston moving back and forth in a cylinder to compress air.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800"><strong>Axial Compressors:</strong> Use rotating blades to accelerate and compress air along the axis of the shaft.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800"><strong>Centrifugal Compressors:</strong> Use rotating impellers to increase air velocity and convert it into pressure.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800"><strong>Rotary Screw Compressors:</strong> Use interlocking screws to progressively compress air or gas.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800"><strong>Ionic Compressors:</strong> Use electric fields to accelerate and compress ions or air particles, typically in small-scale or specialized applications.</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
