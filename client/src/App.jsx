import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import axios from 'axios'; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/work');

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Nav />
      {loading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <div className="">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
}
