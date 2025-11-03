// src/components/admin/AddMenu.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AddMenu = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
      category: '', // ← Add this line
    price: '',
    description: '',
    image: '',
    calories: '',
    dietaryInfo: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/menus', formData, {
       
      });

      setSuccess('Menu added successfully!');
      setError('');
      setFormData({
        name: '',
        category: '',
        price: '',
        description: '',
        image: '',
        calories: '',
        dietaryInfo: ''
      });
    } catch (err) {
      setError('Failed to add menu.');
      setSuccess('');
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add New Menu Item</h2>
      {success && <p className="text-green-600 mb-2">{success}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  required
>
  <option value="">Select Category</option>
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Dinner">Dinner</option>
  <option value="Drinks">Drinks</option>
  <option value="Desserts">Desserts</option>
</select>


        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="calories"
          placeholder="Calories"
          className="w-full border p-2 rounded"
          value={formData.calories}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dietaryInfo"
          placeholder="Dietary Info"
          className="w-full border p-2 rounded"
          value={formData.dietaryInfo}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
