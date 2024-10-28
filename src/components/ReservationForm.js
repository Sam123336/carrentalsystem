// src/components/ReservationForm.js
import React from 'react';

function ReservationForm({ onClose }) {
  const handleReserve = (e) => {
    e.preventDefault();
    alert("Book a car\n\nCheck your email to confirm the order.");
    onClose(); // Closes the form after alert
  };

  return (
    <form onSubmit={handleReserve} className="space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Complete Reservation</h2>
      <p className="text-sm text-gray-500">Upon completing this reservation enquiry, you will receive:</p>
      {/* Add your form fields here, e.g., location, date, personal information */}
      
      {/* Sample input fields */}
      <div>
        <label>Pick-up Date & Time</label>
        <input type="datetime-local" className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label>Drop-off Date & Time</label>
        <input type="datetime-local" className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label>First Name</label>
        <input type="text" className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" className="w-full p-2 border rounded" required />
      </div>

      {/* Reserve button */}
      <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
        Reserve Now
      </button>
    </form>
  );
}

export default ReservationForm;
