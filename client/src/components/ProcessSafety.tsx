import { useEffect, useRef, useState } from "react";
import { Wind, Search, Flame } from "lucide-react";

interface SafetySection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  imageUrl: string;
  points: string[];
}

const safetySections: SafetySection[] = [
  {
    id: "ventilation",
    title: "Ventilation",
    icon: Wind,
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    points: [
      "Ventilation is important for maintaining safe hydrogen levels",
      "Keep oxygen concentration between safe operational limits",
      "Ensure continuous air circulation in enclosed spaces"
    ]
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    icon: Search,
    imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    points: [
      "Detecting leaks is vital for preventing accidents",
      "Install hydrogen-specific detection sensors",
      "Regular maintenance and calibration required"
    ]
  },
  {
    id: "flame-detection",
    title: "Flame Detection",
    icon: Flame,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
    points: [
      "Early flame detection prevents catastrophic events",
      "UV and IR sensors provide rapid response",
      "Automatic shutdown systems must be tested regularly"
    ]
  }
];

export default function ProcessSafety() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [inFocusSections, setInFocusSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(sectionId);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const focusObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setInFocusSections(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
                newSet.add(sectionId);
              } else {
                newSet.delete(sectionId);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-10% 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        visibilityObserver.observe(section);
        focusObserver.observe(section);
      }
    });

    return () => {
      visibilityObserver.disconnect();
      focusObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-semibold text-hydrogen-600 mb-6 tracking-tight">
          Safe Hydrogen Practices
        </h1>
        <div className="w-20 lg:w-32 h-1 bg-gray-500 mx-auto rounded"></div>
      </div>

      {/* Safety Sections */}
      <div className="space-y-12 lg:space-y-16">
        {safetySections.map((section, index) => {
          const IconComponent = section.icon;
          const isVisible = visibleSections.has(section.id);
          const isInFocus = inFocusSections.has(section.id);
          const isEven = index % 2 === 0;

          return (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              data-section={section.id}
              className={`
                flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 lg:p-12
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${isInFocus ? 'scale-105' : 'scale-100'}
                ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
              `}
            >
              {/* Image Circle */}
              <div 
                className={`
                  flex-shrink-0 transition-transform duration-500 ease-out
                  ${isInFocus ? 'scale-110' : 'scale-100'}
                `}
              >
                <div className="relative">
                  <img
                    src={section.imageUrl}
                    alt={`${section.title} safety equipment`}
                    className="w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover border-4 lg:border-6 border-hydrogen-600 shadow-2xl"
                    loading="lazy"
                  />
                  {/* Icon overlay */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-hydrogen-600 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-hydrogen-600 mb-6 lg:mb-8 tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-4 lg:space-y-6">
                  {section.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className={`
                        flex items-start gap-4 text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed
                        ${isEven ? 'lg:justify-start' : 'lg:justify-end'}
                      `}
                    >
                      <div className={`flex items-start gap-4 ${!isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <span className="text-hydrogen-600 font-bold text-xl lg:text-2xl mt-1 flex-shrink-0">•</span>
                        <span className="flex-1">{point}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}