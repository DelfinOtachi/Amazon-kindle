import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AddOpeningHoursForm = () => {
  const [day, setDay] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      return alert('You must be logged in to add opening hours');
    }

    try {
      await axios.post(
        '/api/opening-hours',
        { day, openTime, closeTime },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      alert('Opening hours added');
      setDay('');
      setOpenTime('');
      setCloseTime('');
    } catch (err) {
      console.error(err);
      alert('Failed to add opening hours');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add Opening Hours</h2>

      <input
        type="text"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Day (e.g., Monday)"
        className="w-full border p-2"
        required
      />

      <input
        type="time"
        value={openTime}
        onChange={(e) => setOpenTime(e.target.value)}
        className="w-full border p-2"
        required
      />

      <input
        type="time"
        value={closeTime}
        onChange={(e) => setCloseTime(e.target.value)}
        className="w-full border p-2"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddOpeningHoursForm;
