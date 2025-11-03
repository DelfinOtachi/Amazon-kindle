import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/offers');
        setOffers(res.data);
      } catch (err) {
        console.error('Error fetching offers:', err);
      }
    };

    fetchOffers();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer._id} className="bg-white rounded-xl shadow p-4">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">{offer.title}</h3>
            <p className="text-gray-600 mb-2">{offer.description}</p>
            <p className="font-medium text-green-600">
              {offer.discountPercentage}% OFF
            </p>
            <p className="text-sm text-gray-500">
              Valid from {new Date(offer.validFrom).toLocaleDateString()} to {new Date(offer.validTo).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewOffers;
