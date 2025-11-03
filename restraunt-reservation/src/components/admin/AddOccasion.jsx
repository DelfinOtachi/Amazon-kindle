import React, { useState } from 'react';
import axios from 'axios';

const AddOccasion = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    date: '',
    location: '',
    isAvailable: { type: Boolean, default: true },

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/occasions', formData);
      alert('Occasion added successfully!');
    } catch (err) {
      console.error('Error adding occasion:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Occasion</h2>
      
      <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 mb-2 border" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 mb-2 border" />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} className="w-full p-2 mb-2 border" />
      <input type="date" name="date" onChange={handleChange} className="w-full p-2 mb-2 border" />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 mb-4 border" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Occasion</button>
    </form>
  );
};

export default AddOccasion;
