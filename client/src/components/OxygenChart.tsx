import { useState, useRef, useEffect } from "react";

interface OxygenZone {
  title: string;
  content: string;
  range: string;
}

const oxygenZones: Record<string, OxygenZone> = {
  death: {
    title: "Death",
    content: "Oxygen levels this low are immediately life-threatening. Loss of consciousness occurs within seconds, followed by cardiac arrest and death within minutes. Immediate rescue and medical attention required.",
    range: "0-6%"
  },
  unconsciousness: {
    title: "Unconsciousness", 
    content: "Severe oxygen deficiency causing immediate loss of consciousness. Victims cannot help themselves and require immediate rescue. Prolonged exposure leads to permanent brain damage or death.",
    range: "6-12%"
  },
  drowsiness: {
    title: "Drowsiness", 
    content: "Noticeable impairment of mental functions, coordination, and judgment. Increased breathing rate, fatigue, and drowsiness occur. Evacuation to fresh air is necessary.",
    range: "12-16%"
  },
  safe: {
    title: "Normal Oxygen Levels",
    content: "Optimal oxygen concentration for human health. Normal breathing, clear thinking, and proper bodily functions. This is the safe range found in Earth's natural atmosphere.",
    range: "19-23%"
  },
  fire: {
    title: "Increased Fire Risk",
    content: "Elevated oxygen levels significantly increase fire and explosion risks. Materials that normally don't burn easily become highly flammable. Smoking and ignition sources must be avoided.",
    range: "23-25%"
  },
  brain: {
    title: "Brain Damage",
    content: "Oxygen toxicity occurs at very high concentrations, particularly under pressure. Can cause seizures, lung damage, and central nervous system effects. Medical supervision required.",
    range: "25-100%"
  }
};

const iconData = [
  { zone: "death", icon: "💀", label: "Death", color: "bg-blue-500" },
  { zone: "unconsciousness", icon: "💼", label: "Unconsciousness", color: "bg-violet-600" },
  { zone: "drowsiness", icon: "🛏️", label: "Drowsiness", color: "bg-purple-500" },
  { zone: "safe", icon: "✅", label: "Normal Levels", color: "bg-green-500" },
  { zone: "fire", icon: "🔥", label: "Increased Fire Risk", color: "bg-red-500" },
  { zone: "brain", icon: "🧠", label: "Brain Damage", color: "bg-red-700" }
];

const zoneColors = {
  death: "bg-blue-500",
  unconsciousness: "bg-violet-600", 
  drowsiness: "bg-purple-500",
  safe: "bg-green-500",
  fire: "bg-red-500",
  brain: "bg-red-700"
};

interface TooltipData {
  show: boolean;
  zone: string;
  x: number;
  y: number;
}

export default function OxygenChart() {
  const [tooltip, setTooltip] = useState<TooltipData>({ show: false, zone: "", x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoneHover = (zone: string, event: React.MouseEvent) => {
    setTooltip({
      show: true,
      zone,
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleZoneLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  const handleZoneMove = (event: React.MouseEvent) => {
    if (tooltip.show) {
      setTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }));
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setTooltip(prev => ({ ...prev, show: false }));
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setTooltip(prev => ({ ...prev, show: false }));
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const tooltipData = tooltip.zone ? oxygenZones[tooltip.zone] : null;

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-6" data-testid="text-oxygen-description">
          During maintainence procedures in confined areas, the displacement of oxygen by hydrogen can significantly reduce the breathable air, creating an asphyxiation risk. Such environments, where ventilation is limited, increase the danger of hydrogen accumulation, making it critical to monitor gas levels closely to prevent oxygen deprivation, and ensure safety of work members.
        </p>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Oxygen Percentage & Health Effects
        </h1>
        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Interactive visualization showing the relationship between atmospheric oxygen levels and their corresponding health impacts. Hover over each zone to learn more.
        </p>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-xl p-6 lg:p-8 mb-6 shadow-2xl border border-gray-200">
        {/* Icons Row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {iconData.map((item) => (
            <div key={item.zone} className="text-center">
              <div className={`
                inline-flex items-center justify-center w-12 h-12 rounded-full text-white text-lg mb-2 shadow-lg
                ${item.color}
              `}>
                {item.icon}
              </div>
              <div className="text-xs lg:text-sm font-semibold text-gray-700">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Strip */}
        <div className="relative my-8">
          <div className="h-4 rounded-lg overflow-hidden flex shadow-inner border border-gray-300">
            {Object.entries(zoneColors).map(([zone, colorClass]) => (
              <div
                key={zone}
                className={`
                  flex-1 cursor-pointer transition-all duration-300 relative
                  ${colorClass} hover:brightness-110
                `}
                onMouseEnter={(e) => handleZoneHover(zone, e)}
                onMouseLeave={handleZoneLeave}
                onMouseMove={handleZoneMove}
                tabIndex={0}
                role="button"
                aria-label={`${oxygenZones[zone].title}: ${oxygenZones[zone].content}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    setTooltip({
                      show: true,
                      zone,
                      x: centerX,
                      y: centerY
                    });
                    setTimeout(() => setTooltip(prev => ({ ...prev, show: false })), 5000);
                  }
                }}
              >
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Percentage Labels */}
        <div className="flex justify-between items-center text-center">
          {["6%", "12%", "16%", "19-23%", "25%", "100%"].map((label, index) => (
            <div key={index} className="flex-1 text-sm lg:text-base font-semibold text-gray-600">
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
              ℹ️
            </div>
            <h3 className="font-semibold text-gray-800">Normal Air</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Earth's atmosphere contains approximately 21% oxygen, which is optimal for human health and normal bodily functions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-3">
              ⚠️
            </div>
            <h3 className="font-semibold text-gray-800">Warning Zones</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Oxygen levels below 16% or above 25% can cause serious health effects and require immediate attention.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">
              ❤️
            </div>
            <h3 className="font-semibold text-gray-800">Emergency</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Extreme oxygen levels can be life-threatening. Always ensure proper ventilation and oxygen monitoring in enclosed spaces.
          </p>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.show && tooltipData && (
        <div
          className="fixed z-50 bg-gray-800 text-white p-4 rounded-lg shadow-2xl max-w-sm pointer-events-none transition-opacity duration-300"
          style={{
            left: Math.min(tooltip.x - 192, window.innerWidth - 400), // 192px = half of max-width
            top: tooltip.y - 200 > 10 ? tooltip.y - 200 : tooltip.y + 15
          }}
        >
          <div className="font-bold text-lg mb-2">{tooltipData.title}</div>
          <div className="text-sm leading-relaxed mb-2">{tooltipData.content}</div>
          <div className="text-xs text-gray-300 font-mono">
            Oxygen Range: {tooltipData.range}
          </div>
        </div>
      )}
    </div>
  );
}