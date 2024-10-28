import React from 'react';
function HeroSection() {
  return (
    <section className="text-center py-20 bg-gray-800">
      <h1 className="text-5xl font-bold">We Rent the Highest Caliber Automobiles</h1>
      <p className="mt-4 text-gray-400 max-w-lg mx-auto">
        Choose from a variety of premium cars to make your journey memorable.
      </p>
      <div className="mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg mr-4">Rent Now</button>
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg">Learn More</button>
      </div>
    </section>
  );
}
export default HeroSection;