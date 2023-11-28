import React from "react";
import { Link } from 'react-router-dom';
import BannerImage from "../assets/Logo.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1><u><b> NAMASTAFOOD </b></u></h1>
        <p>IT'S DELICIOUS</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;