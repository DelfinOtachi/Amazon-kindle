import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext'; // adjust path as needed

import { useState } from 'react';
import axios from 'axios';

const AddMenus = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); // Just a string URL
  const [calories, setCalories] = useState('');
  const [dietaryInfo, setDietaryInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/menus', {
        name,
        price,
        description,
        image,        // URL only
        calories,
        dietaryInfo,
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`, // send token for auth
        },
      });

      alert('Menu added!');
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setCalories('');
      setDietaryInfo('');
    } catch (err) {
      console.error(err);
      alert('Error adding menu');
    }
  };

  if (!user) return <p>You must be logged in to add a menu.</p>;

  return (
    <div className="mt-[80px] p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Dish name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="text" placeholder="Calories" value={calories} onChange={e => setCalories(e.target.value)} />
        <input type="text" placeholder="Dietary Info" value={dietaryInfo} onChange={e => setDietaryInfo(e.target.value)} />

        {/* Image URL Input */}
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <button type="submit">Add Menu</button>
      </form>
    </div>
  );
};

export default AddMenus;
