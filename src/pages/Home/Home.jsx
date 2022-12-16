import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './Home.module.css';

export default function Home() {
  useEffect(() => {
    // Javacript for responsive navigation menu
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
    });

    // Javacript for video slider navigation
    const btns = document.querySelectorAll('.nav-btn');
    const slides = document.querySelectorAll('.video-slide');
    const contents = document.querySelectorAll('.content');

    const sliderNav = (manual) => {
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });

      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      contents.forEach((content) => {
        content.classList.remove('active');
      });

      btns[manual].classList.add('active');
      slides[manual].classList.add('active');
      contents[manual].classList.add('active');
    };

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        sliderNav(i);
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="home">
        <video
          className="video-slide active"
          src="../products/ateaser.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="video-slide"
          src="../products/dteaser.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="video-slide"
          src="../products/dteaser.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="video-slide"
          src="../products/dteaser.mp4"
          autoPlay
          muted
          loop
        />
        <div className="content active">
          <h1>
            Trusted.
            <br />
            <span>Apparel</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="register.html">Explore Now</a>
        </div>
        <div className="content">
          <h1>
            PDH.
            <br />
            <span>pakaian dinas harian</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="register.html">Explore Now</a>
        </div>
        <div className="content">
          <h1>
            PDL.
            <br />
            <span>pakaian dinas lapangan</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="register.html">Explore Now</a>
        </div>
        <div className="content">
          <h1>
            Others.
            <br />
            <span>condiment</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="register.html">Explore Now</a>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/stussy/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/stussy/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/stussy">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div className="slider-navigation">
          <div className="nav-btn active" />
          <div className="nav-btn" />
          <div className="nav-btn" />
          <div className="nav-btn" />
        </div>
      </section>
    </>
  );
}
