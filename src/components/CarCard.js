// src/components/CarCard.js
import React from "react";

function CarCard({ car }) {
  return (
    <div className="car-card bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-image w-full h-40 object-cover mb-2" />
      </div>
      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
      <p className="mb-2">{car.price}</p>
      <p className="text-sm mb-2">Type: {car.type}</p>
      <p className="text-sm mb-2">Doors: {car.doors}</p>
      <p className="text-sm mb-2">Seats: {car.seats}</p>
      <p className="text-sm mb-4">AC/Heater: {car.ac ? "Available" : "Not Available"}</p>
      <div className="flex justify-between">
        <button className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600 transition">
          Details
        </button>
        <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition">
          Book
        </button>
      </div>
    </div>
  );
}

export default CarCard;
