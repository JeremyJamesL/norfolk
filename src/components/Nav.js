import { Link } from "react-router-dom";
import { useState } from "react";
import NavStyles from './Nav.module.css';

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={NavStyles.header}>
        <div className={NavStyles.siteTitle}>
          <Link to="/">Norfolk Gerringong</Link>
        </div>
        <ul className={NavStyles.nav}>
          <li>
            <Link to="/about">About the house</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <button className={NavStyles.availabilityBtn}>
          <Link to="/availability">
            Check availability
          </Link>          
          </button>
        <div className={NavStyles.mobileMenuToggle} onClick={() => setIsOpen(true)}>...</div>

        <div className={`${NavStyles.mobileMenu} ${isOpen ? NavStyles.mobileMenuOpen : NavStyles.mobileMenuClose}`}>
          <ul className={NavStyles.mobileNav}>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About the house</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/availability" onClick={() => setIsOpen(false)}>Check availability</Link></li>
          </ul>
          <span className={NavStyles.exit} onClick={() => setIsOpen(false)}>X</span>
        </div>
    </header>
  )
}

export default Nav