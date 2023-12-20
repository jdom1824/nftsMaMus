import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/mamasLogo.png'

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setNavbarBackground('rgba(0, 0, 0, 0.1)');
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

  const styles = {
    navbar: {
      backgroundColor: navbarBackground,
      padding: '10px',
      fontFamily: 'Roboto, sans-serif',
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
    logoContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '10px',
      },
    logo: {
        width: '100px', // Puedes cambiar a 'auto' para mantener la proporción
        height: '60px', // Debe coincidir con la altura de la barra de navegación
        marginRight: '10px',
        objectFit: 'contain', // Esta propiedad mantiene la proporción del logo
      },
    navbarList: {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      padding: 0,
    },
    navbarItem: {
      margin: '0 10px',
    },
    navbarLink: {
      color: '#000',
      textDecoration: 'none',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '2rem',
        width: '2rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        zIndex: 10,
      },
      
      buttonLine: {
        width: '2rem',
        height: '0.25rem',
        background: '#333',
      },
    button: {
      backgroundColor: '#12417a',
      color: '#FFF',
      padding: '8px 16px',
      fontSize: '14px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontFamily: 'Roboto, sans-serif',
      textDecoration: 'none',
    },
    collapsedMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      width: '70%', // Ajusta esto según tus preferencias.
      background: 'linear-gradient(to bottom, rgba(255, 250, 240, 0.9), rgba(0, 128, 0, 0.5))', // Degradado lineal de verde a negro con transparencia
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      transform: isNavOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 998,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem', // Añade padding adicional
      justifyContent: 'flex-start', // Esto hace que las opciones del menú comiencen desde la parte superior.
      alignItems: 'center',
      borderRadius: '0 0 20px 20px', // Bordes redondeados más grandes en la parte inferior
  },
  
      
      collapsedMenuList: {
        listStyleType: 'none',
        padding: 0,
        textAlign: 'center',
      },
      
      collapsedMenuItem: {
        marginBottom: '1.5rem',
      },
      
      collapsedMenuLink: {
        color: '#000', // Cambia esto a cualquier color que contraste con tu nuevo color de fondo.
        textDecoration: 'none',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
      
};
return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
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
                <Link to="/" style={styles.collapsedMenuLink} onClick={toggleNav}>
                  Sign Up
                </Link>
          </li>
        </ul>
          </div>
        <div style={styles.buttonContainer} onClick={toggleNav}>
            <div style={styles.buttonLine}></div>
            <div style={styles.buttonLine}></div>
            <div style={styles.buttonLine}></div>
        </div>
        </>
      ) : (
        <>
          <div style={styles.navbarList}>
          <Link to="/" style={{ ...styles.navbarItem, ...styles.navbarLink }}>
          Home
        </Link>
        <Link to="/services" style={{ ...styles.navbarItem, ...styles.navbarLink }}>
          Services
        </Link>
          </div>
          <div style={styles.button}>
            <Link to="/" style={styles.button}>
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
