// src/components/BookingCTA.js
import React from "react";

const BookingCTA = () => {
  return (
    <section className="bg-blue-900 text-white py-20 text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
        Ready to Plan Your Event?
      </h2>
      <p className="text-lg mb-8">
        Contact us today, and let's make your dream event a reality.
      </p>
      <button className="px-10 py-3 bg-orange-500 text-white rounded-full text-xl font-semibold hover:bg-orange-400 transition-colors duration-300">
        Book Now
      </button>
    </section>
  );
};

export default BookingCTA;
