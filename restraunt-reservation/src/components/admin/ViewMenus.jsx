// src/components/admin/ViewMenus.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMenus = () => {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/menus');
        setMenus(res.data);
      } catch (err) {
        setError('Failed to fetch menus');
        console.error(err);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Menus</h2>
      {error && <p className="text-red-600">{error}</p>}
      {menus.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        menus.map((menu) => (
          <div key={menu._id} className="mb-6 border rounded p-4 shadow">
            <h3 className="text-xl font-semibold text-blue-600">{menu.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
              {menu.items.map((item, index) => (
                <div key={index} className="border p-3 rounded shadow-sm">
                  <img src={item.image} alt={item.name} className="h-32 w-full object-cover rounded mb-2" />
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-sm text-green-600 font-medium">Ksh {item.price}</p>
                  {item.calories && <p className="text-xs text-gray-500">Calories: {item.calories}</p>}
                  {item.dietaryInfo && item.dietaryInfo.length > 0 && (
                    <p className="text-xs text-blue-500">Dietary: {item.dietaryInfo.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewMenus;
