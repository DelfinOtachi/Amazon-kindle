// components/MyReservations.jsx
import React, { useEffect, useState } from 'react';

const MyReservations = ({ token }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/my-reservations', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Reservations</h2>
      <ul>
        {reservations.map(r => (
          <li key={r._id} className="border p-3 mb-2 rounded bg-gray-100">
            <strong>{r.date} at {r.time}</strong> for {r.guests} guests
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
