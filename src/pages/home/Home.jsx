import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => (
  <div className="home">
    <Sidebar />
    <div className="home-container">
      <Navbar />
    </div>
  </div>
);

export default Home;
