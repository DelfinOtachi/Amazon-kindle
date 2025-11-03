import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext'; // adjust path as needed

import axios from 'axios';

const ReservationForm = () => {
    const { user } = useAuth();
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    time: '',
    specialRequest: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem('token');
    if (!authToken) return alert('You must be logged in to reserve');
    
    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || 'Reservation successful');
    } catch (err) {
      alert('Reservation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-3 mt-[80px]">
      <h2 className="text-xl font-bold">Book a Table</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="number" name="guests" placeholder="Guests" onChange={handleChange} min="1" required className="w-full p-2 border rounded" />
      <input type="date" name="date" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="time" name="time" onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="specialRequest" placeholder="Special Requests" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Reserve</button>
    </form>
  );
};

export default ReservationForm;
