import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AddOccasionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      return alert('You must be logged in to add an occasion');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      await axios.post('/api/occasions', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Occasion added successfully');
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (err) {
      console.error(err);
      alert('Failed to add occasion');
    }
  };

  return (
<div className="mt-[80px] p-3">
<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add Occasion</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2"
        required
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
        accept="image/*"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
</div>
  );
};

export default AddOccasionForm;
