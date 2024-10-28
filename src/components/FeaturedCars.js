import React from 'react';
function FeaturedCars() {
  const cars = [
    { name: "SUV", price: "$70/day" },
    { name: "Cadillac", price: "$80/day" },
    { name: "Lamborghini", price: "$120/day" },
    { name: "Jeep", price: "$77/day" },
    { name: "Ford", price: "$89/day" },
    { name: "Dodge", price: "$99/day" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">{car.name}</h3>
            <p className="text-gray-400 mt-4">{car.price}</p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">Details</button>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">View All Cars</button>
    </section>
  );
}

export default FeaturedCars;