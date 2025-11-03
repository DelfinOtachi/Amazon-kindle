import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);

    //const menus = [
      //{ title: "Breakfast Menu", imgSrc: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Brunch Menu", imgSrc: "https://images.pexels.com/photos/253580/pexels-photo-253580.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Lunch Menu", imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Afternoon Tea", imgSrc: "https://images.pexels.com/photos/4974543/pexels-photo-4974543.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Dinner Menu", imgSrc: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Tasting Menu", imgSrc: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Drinks Menu", imgSrc: "https://images.pexels.com/photos/4753648/pexels-photo-4753648.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Wines & Spirits", imgSrc: "https://images.pexels.com/photos/31961238/pexels-photo-31961238/free-photo-of-elegant-dining-setup-with-wine-and-appetizers.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Dessert Menu", imgSrc: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=600" },
      //{ title: "Kids Menu", imgSrc: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600" }
    //];
    useEffect(() => {
      axios.get('/api/menus')
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
    }, []);
  
    return (
      <section className="text-center py-16 bg-gray-100 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {menuItems.map((menu, index) => (
          <Link to={`/menus/${menu._id}`} key={menu._id} className="block hover:shadow-lg transition">
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={menu.imgSrc} alt={menu.title} className="w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold text-gray-700 p-4">{menu.title}</h3>
            </div>
            </Link>

          ))}
        </div>
      </section>
    );
  };
  
  export default MenuSection;
  