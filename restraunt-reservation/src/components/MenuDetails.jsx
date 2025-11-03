import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MenuDetails = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios.get(`/api/menus/${id}`)
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!menu) return <p>Loading...</p>;

  return (
    <div>
      <img src={menu.image} alt={menu.title} className="w-full max-w-md mb-4" />
      <h1 className="text-2xl font-bold mb-2">{menu.title}</h1>
      <p>{menu.description}</p>
    </div>
  );
};

export default MenuDetails;
