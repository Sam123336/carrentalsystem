// src/pages/Rented.js
import React, { useContext } from "react";
import { RentedCarsContext } from "./context/RentedCarsContext"; // Adjust the path if necessary

function Rented() {
  const { rentedCars } = useContext(RentedCarsContext); // Get rented cars from context

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white">Rented Cars</h2>
      <ul className="space-y-4 mt-4">
        {rentedCars.length > 0 ? (
          rentedCars.map((car, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-semibold text-white">{car.name}</h3>
              <p className="text-gray-400">Rental Date: {car.rentalDate}</p>
              <p className="text-gray-400">Cost: {car.cost}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No cars rented yet.</p> // Show message if no cars rented
        )}
      </ul>
    </div>
  );
}

export default Rented;
