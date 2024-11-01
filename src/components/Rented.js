// src/pages/Rented.js
import React from "react";

function Rented() {
  // Placeholder data for rented cars; replace with data from your app's state or backend
  const rentedCars = [
    { name: "BMW", rentalDate: "2024-11-01", cost: "$150/day" },
    { name: "Cadillac", rentalDate: "2024-11-02", cost: "$200/day" }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white">Rented Cars</h2>
      <ul className="space-y-4 mt-4">
        {rentedCars.map((car, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold text-white">{car.name}</h3>
            <p className="text-gray-400">Rental Date: {car.rentalDate}</p>
            <p className="text-gray-400">Cost: {car.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rented;
