import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // for redirect

const Navbar = () => {
  const navItems = [
    "Menus",
    "Offers",
    "Opening Hours",
    "Occasions",
    "Gallery",
    "Press",
    "Find Us",
    "Contact",
  ];

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // or navigate("/") depending on your routing
  };

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-widest">1947</h1>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-base font-semibold uppercase text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#ff6600] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {user ? (
            <div className="flex items-center gap-4 text-white">
              <p>{user.name}</p>
              console.log("User object:", user); // 👈 Add this

              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-white">Please log in</p>
          )}

          <button className="ml-4 bg-[#ffb300] hover:bg-[#ff9e00] text-white font-bold py-2 px-4 rounded-full transition">
            Book Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
