import React, { useState } from 'react';
import axios from 'axios';

const AddOfferForm = () => {
  const [title, setTitle] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/offers', {
        title,
        discount,
        description,
        image,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Offer added successfully!');
    } catch (error) {
      console.error('Failed to add offer:', error);
    }
  };

  return (
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
        type="text"
        placeholder="Discount (e.g., 20% OFF)"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        required
      />
      <textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
  );
};

export default AddOfferForm;
