// components/OccasionsList.jsx
import React, { useEffect, useState } from 'react';

const OccasionsList = () => {
  const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/occasions')
    .then((res) => res.json())
      .then((data) => {
        setOccasions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch occasions:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading occasions...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Occasions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {occasions.map((occasion) => (
          <div key={occasion._id} className="bg-white rounded-xl shadow p-4">
            {occasion.imageUrl && (
              <img src={occasion.imageUrl} alt={occasion.title} className="rounded-lg mb-3 w-full h-40 object-cover" />
            )}
            <h3 className="text-xl font-semibold mb-2">{occasion.title}</h3>
            <p className="text-sm text-gray-500 mb-1">
              Date: {new Date(occasion.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm">{occasion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionsList;
