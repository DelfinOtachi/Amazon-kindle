import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AddReviewForm = () => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);
    const { user } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/reviews', { comment, rating }, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        alert('Review submitted');
      } catch (err) {
        alert('Failed to submit review');
      }
    };
  
    if (!user) return <p>Login to write a review</p>;
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a review" />
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max={5} min={1} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default AddReviewForm;
  