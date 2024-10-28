// src/components/CarListPage.js
import React, { useState } from "react";
import CarCard from "./CarCard";

function CarListPage() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  const carData = [
    { id: 1, name: "BMW", price: "$70 / Day", type: "Sedan", doors: 4, seats: 4, ac: true },
    { id: 2, name: "Cadillac", price: "$80 / Day", type: "SUV", doors: 4, seats: 5, ac: true },
    { id: 3, name: "Lamborghini", price: "$120 / Day", type: "Convertible", doors: 2, seats: 2, ac: true },
    { id: 4, name: "Jeep", price: "$77 / Day", type: "SUV", doors: 4, seats: 6, ac: true },
    { id: 5, name: "Ford", price: "$89 / Day", type: "Truck", doors: 4, seats: 4, ac: true },
    { id: 6, name: "DODGE", price: "$120 / Day", type: "Van", doors: 3, seats: 2, ac: true },
  ];

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a car..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarListPage;
