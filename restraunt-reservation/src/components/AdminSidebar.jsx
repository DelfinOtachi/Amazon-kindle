// src/components/AdminSidebar.jsx
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/admin/add-menu">➕ Add Menu</Link>
        <Link to="/admin/add-occasion">🎉 Add Occasion</Link>
        <Link to="/admin/add-hours">🕒 Add Hours</Link>
        <Link to="/admin/add-offers">💸 Add Offers</Link>
        <Link to="/admin/view-users">👥 View Users</Link>
        <Link to="/admin/view-menus">📋 View Menus</Link>
        <Link to="/admin/view-reservations">📆 View Reservations</Link>
        <Link to="/admin/view-offers">💰 View Offers</Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
