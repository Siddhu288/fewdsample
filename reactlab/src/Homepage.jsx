// HomePage.js
import React from 'react';
import Weather from './Weather'; // Adjust the path based on your structure

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Weather/>
    </div>
  );
};

export default HomePage;