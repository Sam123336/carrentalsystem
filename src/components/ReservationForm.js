import React, { useState } from 'react';
import BMW from "./images/BMW.png";
import Cadillac from "./images/cadalic.png";
import Lamborghini from "./images/Lamborghini.png";
import jeep from "./images/jeep.png";
import ford from "./images/ford.png";
import nisaan from "./images/nisaan.png";

function ReservationForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [selectedCar, setSelectedCar] = useState('');

  const availableCars = [
    { name: 'BMW', imgSrc: BMW, cost: '$150/day' },
    { name: 'Cadillac', imgSrc: Cadillac, cost: '$200/day' },
    { name: 'Ford', imgSrc: ford, cost: '$120/day' },
    { name: 'Jeep', imgSrc: jeep, cost: '$140/day' },
    { name: 'Lamborghini', imgSrc: Lamborghini, cost: '$300/day' },
    { name: 'Nissan', imgSrc: nisaan, cost: '$100/day' }
  ];

  const handleReserve = async (e) => {
    e.preventDefault();
    if (!selectedCar) {
      alert('Please select a car.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: `Reservation Confirmation for ${firstName}`,
          text: `Thank you for reserving a ${selectedCar} with us. Check your email for details.`
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert('Book a car\n\nCheck your email to confirm the order.');
        console.log('Email Preview URL:', result.previewUrl); 
      } else {
        alert('Error sending email: ' + result.message);
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email');
    }

    onClose(); 
  };

  return (
    <form onSubmit={handleReserve} className="space-y-4 bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold text-white">Complete Reservation</h2>
      <p className="text-sm text-gray-400">
        Upon completing this reservation enquiry, you will receive:
      </p>

      <div>
        <label className="text-white">Pick-up Date & Time</label>
        <input
          type="datetime-local"
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
          required
        />
      </div>

      <div>
        <label className="text-white">Drop-off Date & Time</label>
        <input
          type="datetime-local"
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
          required
        />
      </div>

      <div>
        <label className="text-white">First Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-white">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-white">Select Car</label>
        <div className="w-full p-2 border border-gray-600 bg-gray-700 rounded text-white">
          {availableCars.map((car, index) => (
            <div
              key={index}
              onClick={() => setSelectedCar(car.name)}
              className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-600 rounded ${
                selectedCar === car.name ? "bg-gray-600" : ""
              }`}
            >
              <div className="flex items-center">
                <img src={car.imgSrc} alt={`${car.name} car`} className="w-12 h-8 mr-4" />
                <span>{car.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-300">{car.cost}</span>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full bg-black text-gray-200 py-2 rounded hover:bg-gray-700 transition">
        Reserve Now
      </button>
    </form>
  );
}

export default ReservationForm;
