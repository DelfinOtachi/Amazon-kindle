import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex mt-[80px]">
      <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <Link to="add-menu">Add Menu</Link>
          <Link to="add-occasion">Add Occasion</Link>
          <Link to="add-opening-hours">Add Opening Hours</Link>
          <Link to="add-offer">Add Offer</Link>
          <Link to="view-users">View Users</Link>
          <Link to="view-offers">View Offers</Link>
          <Link to="view-reservations">View Reservations</Link>
          <Link to="view-menus">View Menus</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
