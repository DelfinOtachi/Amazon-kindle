import React, { useEffect, useState } from 'react';

const OpeningHoursList = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/opening-hours')
      .then((res) => res.json())
      .then((data) => {
        // Make sure you adjust based on what the backend sends
        setHours(Array.isArray(data) ? data : data.hours || []);
      })
      .catch((err) => {
        console.error('Error fetching opening hours:', err);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
      <ul className="space-y-2">
        {hours.map((hour) => (
          <li key={hour._id} className="bg-gray-100 p-3 rounded shadow">
            <strong>{hour.day}</strong>: {hour.openTime} - {hour.closeTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHoursList;
