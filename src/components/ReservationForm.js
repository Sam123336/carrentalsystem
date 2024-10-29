// src/components/ReservationForm.js
import React, { useState } from 'react';

function ReservationForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleReserve = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: `Reservation Confirmation for ${firstName}`,
          text: 'Thank you for reserving with us. Check your email for details.'
        })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Book a car\n\nCheck your email to confirm the order.');
        console.log('Email Preview URL:', result.previewUrl); // Logs the email preview URL in console
      } else {
        alert('Error sending email: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email');
    }

    onClose(); // Closes the form after sending the email
  };

  return (
    <form onSubmit={handleReserve} className="space-y-4 bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold text-white">Complete Reservation</h2>
      <p className="text-sm text-gray-400">Upon completing this reservation enquiry, you will receive:</p>

      <div>
        <label className="text-white">Pick-up Date & Time</label>
        <input type="datetime-local" className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
      </div>
      <div>
        <label className="text-white">Drop-off Date & Time</label>
        <input type="datetime-local" className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
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

      <button type="submit" className="w-full bg-black text-gray-200 py-2 rounded hover:bg-gray-700 transition">
        Reserve Now
      </button>
    </form>
  );
}

export default ReservationForm;
