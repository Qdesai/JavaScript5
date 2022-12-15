import { Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import React from 'react'

export default function Navbar(){
  const navigate = useNavigate();

  const navProfile = () => {
    navigate('/profile');
  }

  const navContact = () => {
    navigate('/contactus');
  }

  const navlist = () => {
    navigate('/home');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="logo.png" alt="no imge"/>
  <a className="navbar-brand" href="#">TrimHouse</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={navlist}>Testimonials List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={navContact}>Contact Us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={navProfile}>Profile <span className="sr-only"></span></a>
      </li>
    </ul>
    
  </div>
</nav>
  );
}
