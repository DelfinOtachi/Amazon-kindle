// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';

import Login from './components/Login';
import Register from './components/Register';

import Hero from "./components/Hero";
import ImageTextSection from "./components/ImageTextSection";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import MenuSection from './components/MenuSection';
import OccasionSection from './components/OccasionsSection';
import OpeningHours from './components/OpeningHours';
import OffersSection from "./components/OffersSection";
import ReservationForm from "./components/ReservationForm";
import ReviewsSection from "./components/ReviewsSection";

import MenuDetails from './components/MenuDetails';
import OccasionDetails from './components/OccasionDetails';
import AddMenu from './components/addMenu';
import AddOccasion from './components/AddOccasionForm';
import AddReview from './components/AddReviewForm';
import AddOffer from './components/AddOfferForm';
import AddOpeningHoursForm from './components/AddOpeningHoursForm';




//admin routes
import AdminRoute from './components/AdminRoute';
import AddMenus from './components/admin/AddMenu'; // or './pages/admin/AddMenu'
import AddOccasions from './components/admin/AddOccasion';
import AddOpeningHours from './components/admin/AddOpeningHours'; // or './pages/admin/AddMenu'
import AddOffers from './components/admin/AddOffer'; // or './pages/admin/AddMenu'
import ViewOffers from './components/admin/ViewOffers'; // or './pages/admin/AddMenu'
import ViewUsers from './components/admin/ViewUsers'; // or './pages/admin/AddMenu'
import ViewReservations from './components/admin/ViewReservations'; // or './pages/admin/AddMenu'
import ViewMenus from './components/admin/ViewMenus'; // or './pages/admin/AddMenu'
import OccasionsList  from './components/admin/ViewOccassions'; // or './pages/admin/AddMenu' OpeningHoursList
import OpeningHoursList  from './components/admin/OpeningHoursList';
import MyReservations  from './components/MyReservations';


import AdminDashboard from "./components/AdminDashboard";


function App() {
  const [menus, setMenus] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuResponse = await axios.get('/api/menus');
        const occasionResponse = await axios.get('/api/occasions');
        const reviewResponse = await axios.get('/api/reviews');

        setMenus(menuResponse.data);
        setOccasions(occasionResponse.data);
        setReviews(reviewResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
  

    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
                   
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
          <Route index element={<AdminRoute><AddMenus /></AdminRoute>} />   {/* default */}

  <Route path="add-menu" element={<AdminRoute><AddMenus /></AdminRoute>} />
  <Route path="add-occasion" element={<AdminRoute><AddOccasions /></AdminRoute>} />
  <Route path="add-opening-hours" element={<AdminRoute><AddOpeningHours /></AdminRoute>} />
  <Route path="add-offer" element={<AdminRoute><AddOffers /></AdminRoute>} />
  <Route path="view-users" element={<AdminRoute><ViewUsers /></AdminRoute>} />
  <Route path="view-offers" element={<AdminRoute><ViewOffers /></AdminRoute>} />
  <Route path="view-reservations" element={<AdminRoute><ViewReservations /></AdminRoute>} />
  <Route path="view-menus" element={<AdminRoute><ViewMenus /></AdminRoute>} />
  <Route path="view-occassions" element={<AdminRoute><OccasionsList  /></AdminRoute>} />
  <Route path="OpeningHoursList" element={<AdminRoute><OpeningHoursList /></AdminRoute>} />


</Route>
<Route path="/unauthorized" element={<h1 className="text-center text-red-500 text-2xl">Unauthorized Access</h1>} />




          {/* Details */}
          <Route path="/menu/:id" element={<MenuDetails />} />
          <Route path="/occasion/:id" element={<OccasionDetails />} />

          {/* Add forms (protected) */}
          <Route path="/add-menu" element={<ProtectedRoute><AddMenu /></ProtectedRoute>} />
          <Route path="/add-occasion" element={<ProtectedRoute><AddOccasion /></ProtectedRoute>} />
          <Route path="/add-review" element={<ProtectedRoute><AddReview /></ProtectedRoute>} />
          <Route path="/add-offer" element={<ProtectedRoute><AddOffer /></ProtectedRoute>} />
          <Route path="/add-opening-hours" element={<ProtectedRoute><AddOpeningHoursForm /></ProtectedRoute>} />

          {/* Public Routes for each section */}
          <Route path="/menus" element={<MenuSection menus={menus} />} />
          <Route path="/occasions" element={<OccasionSection occasions={occasions} />} />
          <Route path="/reviews" element={<ReviewsSection reviews={reviews} />} />
          <Route path="/offers" element={<OffersSection />} />
          <Route path="/add-reservation" element={<ReservationForm />} /> 
          <Route path="/hours" element={<OpeningHours />} />
          <Route path="/MyReservations" element={<MyReservations />} />

          {/* Home route */}
          <Route path="/" element={
            <>
              <Hero />
              <ImageTextSection
                title="Luxury Weddings"
                description="Elegant venues, stunning décor, and impeccable service to make your wedding unforgettable."
                imageUrl="your-wedding-image-url.jpg"
              />
              <ImageTextSection
                title="Corporate Events"
                description="Whether it's a conference, seminar, or gala, we provide the perfect setting for success."
                imageUrl="your-corporate-events-image-url.jpg"
                reverse
              />
              <BookingCTA />
              <ReviewsSection reviews={reviews} />
              <MenuSection menus={menus} />
              <OffersSection />
              <OccasionSection occasions={occasions} />
              <ReservationForm />
              <OpeningHours />
            </>
          } />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
