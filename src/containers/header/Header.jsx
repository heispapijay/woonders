import React from 'react';
import './header.css';
import mouse from '../../assets/mouseicon.svg';

function Header() {
  return (
    <div className="woonders_container-header">
    <div className="woonders_container-center">
      <div>
        <h1 className="woonders_text-color1">Think.<br />
        <span className="woonders_text-color2">Create.<br /></span>
        Solution.
        </h1>
      </div>

      <div className="center text text-center">
          <p className="woonders_text-color1">
            We are an award-winning branding and<br /> web agency committed to
            excellence<br /> since forever.
          </p>
        </div>

        <div className="center text text3 small-text">
          <p className="woonders_text-color2">
            We set the standard of exceptional design creatively,<br /> technically,
            sustainably, and ethically so that you can make<br /> the extraordinary
            impact impact that you seek.
          </p>
        </div>
      <div>
        <button className="woonders_header-button">Get Started</button>
      </div>
      <div className="woonders_header-icon object">
        <img src={mouse} className="woonders_header-iconsize object" alt='mouse'/>
      </div>
    </div>
  </div>
  )
}

export default Header;
