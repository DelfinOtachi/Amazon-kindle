import React, { useState } from 'react';

const AddOpeningHours = () => {
  const [form, setForm] = useState({
    day: 'Monday',
    openTime: '',
    closeTime: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/opening-hours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message || 'Added!');
      setForm({ day: 'Monday', openTime: '', closeTime: '' });
    } catch (err) {
      alert('Error adding opening hour');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add Opening Hour</h2>
      <select name="day" value={form.day} onChange={handleChange} className="w-full border p-2 rounded">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <input
        type="time"
        name="openTime"
        value={form.openTime}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="time"
        name="closeTime"
        value={form.closeTime}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default AddOpeningHours;
