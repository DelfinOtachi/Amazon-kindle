import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OfferList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get('/api/offers')
      .then(res => setOffers(res.data))
      .catch(err => console.error('Error fetching offers:', err));
  }, []);

  return (
    <div>
      <h2>Current Offers</h2>
      <div className="offer-list">
        {offers.map((offer) => (
          <div key={offer._id} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.discount}</p>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferList;
