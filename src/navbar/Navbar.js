import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setNavbarBackground('rgba(0, 0, 0, 0.7)');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const styles = {
    navbar: {
      backgroundColor: navbarBackground,
      padding: '10px',
      fontFamily: 'Roboto, sans-serif', // Cambiado a una fuente amigable para una página de tecnología
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      transition: 'background-color 0.3s ease',
      borderBottom: '1px solid #fff',
    },
    navbarList: {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    navbarItem: {
      margin: '0 10px',
    },
    navbarLink: {
      color: '#000', // Cambiado a color negro
      textDecoration: 'none',
      fontSize: '18px',
      textTransform: 'uppercase',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: '120px',
      height: 'auto',
      marginRight: '10px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#008000',
      color: '#FFF',
      padding: '8px 16px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontFamily: 'Roboto, sans-serif', // Cambiado a una fuente amigable para una página de tecnología
      textDecoration: 'none',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="path_to_your_logo" alt="Logo" style={styles.logo}/>
      </div>
      <div style={styles.navbarList}>
        <Link to="/" style={{ ...styles.navbarItem, ...styles.navbarLink }}>Home</Link>
        <Link to="/services" style={{ ...styles.navbarItem, ...styles.navbarLink }}>Services</Link>
        <Link to="/about" style={{ ...styles.navbarItem, ...styles.navbarLink }}>About</Link>
        <Link to="/contact" style={{ ...styles.navbarItem, ...styles.navbarLink }}>Contact</Link>
      </div>
      <div style={styles.buttonContainer}>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
