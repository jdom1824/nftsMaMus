import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gemelos from '../image/mamusNFT.png';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: isMobile ? 'auto' : '100vh',
      padding: '30px',
      margin: '0 auto',
      maxWidth: '1200px',
      borderBottom: '1px solid #12417a', // Agrega una línea de borde inferior verde
    },
    leftContainer: {
      flex: 1,
      paddingRight: isMobile ? '0px' : '20px',
      marginBottom: isMobile ? '30px' : '0px',
      marginTop: isMobile ? '60px' : '0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      paddingLeft: isMobile ? '0px' : '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bigText: {
      fontSize: isMobile ? '2em' : '3.5em',
      marginBottom: '10px',
      textAlign: 'left ',
    },
    smallText: {
      fontSize: isMobile ? '0.8em' : '1em',
      marginBottom: '20px',
      textAlign: 'left',
    },
    button: {
      backgroundColor: '#12417a',
      color: '#FFF',
      padding: '8px 16px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      alignSelf: 'flex-start',
    },
    image: {
      width: '100%',
      height: isMobile ? 'auto' : '100%',
      objectFit: 'cover',
      border: '5px solid #12417a',
      boxShadow: '0 0 10px #12417a',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <h1 style={styles.bigText}>MAMUS NFT: Comunidad del conocimiento para el futuro</h1>
        <p style={styles.smallText}>Certifica tu futuro con MAMUS NFT: La esencia de la innovación STEM en cada token.</p>
        <Link to="/services" style={styles.button}>View All Services</Link>
      </div>
      <div style={styles.rightContainer}>
        <img src={gemelos} alt="Campo de trigo" style={styles.image} />
      </div>
    </div>
  );
};

export default Home;
