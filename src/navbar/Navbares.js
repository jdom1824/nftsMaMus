import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setNavbarBackground('rgba(0, 0, 0, 0.7)');
    } else {
      setNavbarBackground('transparent');
    }
  };

  const listenResizeEvent = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    window.addEventListener('resize', listenResizeEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
      window.removeEventListener('resize', listenResizeEvent);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Tus estilos...

  return (
    <nav style={styles.navbar}>
      {/* Logo... */}
      {isMobile ? (
        <>
          <div style={styles.collapsedMenu}>
            <ul style={styles.collapsedMenuList}>
              <li style={styles.collapsedMenuItem}>
                <Link to="/" style={styles.collapsedMenuLink} onClick={toggleNav}>
                  Home
                </Link>
              </li>
              <li style={styles.collapsedMenuItem}>
                <Link to="/services" style={styles.collapsedMenuLink} onClick={toggleNav}>
                  Services
                </Link>
              </li>
              <li style={styles.collapsedMenuItem}>
                <Link to="/about" style={styles.collapsedMenuLink} onClick={toggleNav}>
                  About
                </Link>
              </li>
              <li style={styles.collapsedMenuItem}>
                <Link to="/contact" style={styles.collapsedMenuLink} onClick={toggleNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div style={styles.buttonContainer}>
            <button onClick={toggleNav} style={styles.button}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={styles.navbarList}>
            {/* Normal menu... */}
          </div>
          <div style={styles.buttonContainer}>
            <Link to="/signup" style={styles.button}>
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
