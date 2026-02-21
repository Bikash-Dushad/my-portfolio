import  { useState } from "react";
import "./Navbar.css";
import avatar from "../../assets/image.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={avatar} alt="User Avatar" />
      </div>

      {/* Hamburger Menu Icon */}
      <div 
        className={`menu-icon ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-end ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#profile" onClick={closeMenu}>Profile</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li className="nav-cta">
            <button type="button" onClick={closeMenu}>Let's Connect</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;