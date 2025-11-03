import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const truncateWords = (text, wordLimit = 7) => {
  const words = text.split(' ');
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
};

const OccasionList = () => {
  const [occasions, setOccasions] = useState([]);

  useEffect(() => {
    axios.get('/api/occasions')
      .then(res => setOccasions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {occasions.map(o => (
        <Link to={`/occasions/${o._id}`} key={o._id} className="block hover:shadow-lg transition">
          <img src={o.image} alt={o.title} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{o.title}</h3>
          <p className="text-sm text-gray-600">{truncateWords(o.description)}</p>
        </Link>
      ))}
    </div>
  );
};

export default OccasionList;
