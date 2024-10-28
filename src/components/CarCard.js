// src/components/CarCard.js
import React from "react";

function CarCard({ car }) {
  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
      <p className="mb-2">{car.price}</p>
      <p className="text-sm mb-2">Type: {car.type}</p>
      <p className="text-sm mb-2">Doors: {car.doors}</p>
      <p className="text-sm mb-2">Seats: {car.seats}</p>
      <p className="text-sm mb-4">AC/Heater: {car.ac ? "Available" : "Not Available"}</p>
      <div className="flex justify-between">
        <button className="bg-gray-500 text-white py-1 px-4 rounded">Details</button>
        <button className="bg-blue-600 text-white py-1 px-4 rounded">Book</button>
      </div>
    </div>
  );
}

export default CarCard;
