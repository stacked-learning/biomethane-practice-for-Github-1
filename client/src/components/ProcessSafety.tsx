import HydrogenRainbow from "./HydrogenRainbow";

export default function ProcessSafety() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Introduction Box */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-hydrogen-200">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-hydrogen-600 mb-4">
            Introduction
          </h2>
          <div className="w-20 h-1 bg-hydrogen-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Welcome to the Process section. Explore the different types of hydrogen production methods and their environmental impacts through the hydrogen rainbow below.
          </p>
        </div>
      </div>

      {/* Hydrogen Rainbow */}
      <HydrogenRainbow />
    </div>
  );
}
