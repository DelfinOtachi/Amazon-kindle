import React, { useState } from 'react';
import axios from 'axios';

const AddOffers = () => {
  const [title, setTitle] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [description, setDescription] = useState('');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');

  const [image, setImage] = useState('');  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/offers', {
        title,
        discountPercentage,
        description,
        validFrom,
        validTo,
        image
      }, {
        
      });
      alert('Offer added successfully!');
    } catch (error) {
      console.error('Failed to add offer:', error);
    }
  };

  return (
    
   <div>
    <form onSubmit={handleSubmit}>
      <h2>Add Offer</h2>
      <input
        type="text"
        placeholder="Offer Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Discount (e.g., 20% OFF)"
        value={discountPercentage}
        onChange={(e) => setDiscountPercentage(e.target.value)}
        required
      />
      <textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      /> 
      <input
        type="date"
        placeholder="valid From"
        value={validFrom}
        onChange={(e) => setValidFrom(e.target.value)}
        required
      />
      <input
  type="date"
  placeholder="valid To"
  value={validTo}
  onChange={(e) => setValidTo(e.target.value)} // ✅ Correct
  required
/>

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Offer</button>
    </form>
   </div>
  );
};

export default AddOffers;
