// src/components/ImageTextSection.js
import React from "react";

const ImageTextSection = ({ title, description, imageUrl, reverse }) => {
  return (
    <section
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center py-16 px-6 md:px-16`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600'}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
        <h2 className="text-3xl font-serif font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </section>
  );
};

export default ImageTextSection;
