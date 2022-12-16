import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <a href="#1" className="brand">RPB STORE</a>
      <div className="menu-btn" />
      <div className="navigation">
        <div className="navigation-items">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <a href="#2">Order</a>
          <a href="#3">About</a>
          <a href="#4">Account</a>
        </div>
      </div>
    </header>
  );
}
