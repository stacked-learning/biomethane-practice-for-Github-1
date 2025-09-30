import compressorImg from "@assets/stock_images/industrial_hydrogen__775e2fdc.jpg";

export default function HydrogenCompression() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <article className="flex flex-col gap-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={compressorImg}
            alt="Industrial hydrogen compressor system with blue machinery and supporting infrastructure"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-prose mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Hydrogen Compression Technology
          </h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hydrogen is typically produced at lower pressures (20-30 bar) than what is 
            required for storage or transportation. Compressors are integral to ensuring 
            hydrogen can be supplied to the end-user in adequate condition.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Compressor Types
            </h2>
            
            <p className="text-base text-gray-600">
              Compressor types commonly used on hydrogen include:
            </p>

            <ul className="flex flex-col gap-3 text-base md:text-lg">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800">Reciprocating</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800">Rotary</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800">Ionic</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-800">Centrifugal</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
