// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600')", // Update path to your image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase mb-4">
          1947 London
        </h1>
        <p className="text-xl md:text-2xl mb-4">Modern Indian Cuisine</p>
        <button
  className="bg-[#d87c36] text-white text-sm font-medium px-6 py-2 uppercase tracking-wider hover:bg-[#c56f2f] transition mb-6"
>
  Book Table
</button>


        <p className="text-sm mb-6">
        4 Great Portland Street, Oxford Circus, London, W1W 8QJ
        </p>

        <button className="border border-white px-8 py-2 uppercase text-sm hover:bg-white hover:text-black transition">
          Explore
        </button>
      </div>

      {/* Bottom left text */}
      
      <div className="absolute bottom-4 right-4 z-10 text-sm md:text-base text-white">
      <p className="text-lg md:text-xl font-semibold mb-2">
      2 Minutes</p>
      <p className="text-sm mb-6">from</p>

      <p className="text-lg md:text-xl font-semibold mb-2">
      Oxford Circus</p>

      </div>

      {/* Bottom right text */}
      <div className="absolute bottom-4 left-4 z-10 text-sm md:text-base text-white">
        <p className="text-lg md:text-xl font-semibold mb-2">
          2 Dishes £20
        </p>
        <p className="text-sm mb-6">Every Lunchtime 12pm–2.30pm</p>
        <p className="text-sm mb-6">12pm–2.30pm</p>

      </div>
      
    </section>
  );
};

export default HeroSection;
