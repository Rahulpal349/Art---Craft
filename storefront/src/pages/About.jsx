import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/about.css';

export default function About() {
  return (
    <div className="about-page-container">
      {/* Decorative watercolor splashes */}
      <div className="watercolor-splash splash-top-left"></div>
      <div className="watercolor-splash splash-bottom-right"></div>
      
      <div className="about-content-wrapper">
        <div className="about-text-section">
          <h1 className="about-title">
            About <span className="about-script">Us</span> <span className="about-heart">♡</span>
          </h1>
          
          <div className="about-text-content">
            <h3 className="about-greeting">Welcome to Art & Craft, where creativity meets elegance.</h3>
            <p>
              Hi, I am <strong>Rahul Pal</strong> Founder of Art & Craft. I am an Electrical Engineer by profession but a handmade lover at heart and started this place to add lovely handmade things into the ordinary households.
            </p>
            
            <p>
              Each piece is thoughtfully designed, blending artistry, craftsmanship and timeless style to bring warmth and personality to your living space. Whether for your home or that perfect gift, our purpose is simple:
            </p>
            
            <p className="about-thank-you">
              Turning fine craftsmanship into treasured memories.
            </p>
            
            <div className="about-signoff">
              <span className="signoff-name">— Rahul Pal</span>
              <span className="signoff-title">Founder, Art & Craft</span>
            </div>
          </div>
          
          <div className="about-features-row">
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span>Handmade<br/>with Love</span>
            </div>
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              <span>Inspired by<br/>Nature</span>
            </div>
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Premium<br/>Quality</span>
            </div>
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Made to Decorate<br/>Your Home</span>
            </div>
          </div>
          
          <div className="about-banner-quote">
            The art you love, placed in your home. ♡
          </div>
        </div>

        <div className="about-image-section">
           <div className="founder-photo-container">
               <img src="/assets/images/founder.jpg" alt="Rahul Pal" className="founder-photo" />
           </div>
        </div>
      </div>
    </div>
  );
}
