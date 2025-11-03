import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AddBookingForm = () => {
    const [details, setDetails] = useState('');
    const { user } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/bookings', { details }, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        alert('Booking added');
      } catch (err) {
        alert('Error');
      }
    };
  
    if (!user) return <p>Please login to book</p>;
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Booking Details" />
        <button type="submit">Book</button>
      </form>
    );
  };
  export default AddBookingForm;

  