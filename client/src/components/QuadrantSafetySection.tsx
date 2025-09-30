interface QuadrantSafetySectionProps {
  generalText: string;
  safetyPoints: string[];
}

export default function QuadrantSafetySection({ generalText, safetyPoints }: QuadrantSafetySectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* SAFETY Divider */}
      <div className="flex items-center justify-center my-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <div className="px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-wider">
            SAFETY
          </h2>
        </div>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* General Section - Below Title */}
      <div className="mb-8">
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
          {generalText}
        </p>
      </div>

      {/* Safety Points */}
      <div className="space-y-6">
        {safetyPoints.map((point, index) => {
          const [title, ...descriptionParts] = point.split(': ');
          const description = descriptionParts.join(': ');
          return (
            <div key={index} className="flex gap-3">
              <span className="text-hydrogen-600 font-semibold text-lg flex-shrink-0">•</span>
              <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">{title}:</strong> {description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
