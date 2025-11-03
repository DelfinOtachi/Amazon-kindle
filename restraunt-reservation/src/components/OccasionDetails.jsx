import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OccasionDetails = () => {
  const { id } = useParams();
  const [occasion, setOccasion] = useState(null);

  useEffect(() => {
    axios.get(`/api/occasions/${id}`)
      .then(res => setOccasion(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!occasion) return <p>Loading...</p>;

  return (
    <div>
      <img src={occasion.image} alt={occasion.title} className="w-full max-w-md mb-4" />
      <h1 className="text-2xl font-bold mb-2">{occasion.title}</h1>
      <p>{occasion.description}</p>
    </div>
  );
};

export default OccasionDetails;
