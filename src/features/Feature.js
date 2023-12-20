import React, { useState, useEffect } from 'react';

const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const isMobile = windowWidth <= 768;

  const features = [
    'Data gathering from crops to measure CO₂ reduction',
    'Identification of the health condition of crops',
    'Calculation of the environmental impact of crops',
    'Real-time monitoring of crop data for analysis and decision-making',
    'Customizable reports and analysis of crop data for better crop management and CO₂ reduction strategies.',
  ];

  const benefits = [
    'Better understanding of crop health and condition',
    'Increased value of crops through data analysis',
    'Positive impact on the environment through CO₂ reduction',
    'Opportunity for more sustainable and eco-friendly farming practices',
    'Increased potential for marketing and branding as a socially responsible business',
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      padding: '10px',
      margin: '0 auto',
      marginTop: '60px',
      maxWidth: '1200px',
      borderTop: '1px solid #008000', // Agrega una línea de borde inferior verde
      
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      width: '100%',
      maxWidth:  isMobile ? '300px': '500px',
    },
    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
      marginLeft: '10px',
    },
    columnTitle: {
      margin: '12px 0',
      color: '#333',
      fontSize: '1.5em',
    },
    bulletList: {
      listStyleType: 'none',
      textAlign: 'left',
      padding: 0,
      marginLeft: '20px',
    },
    bulletItem: {
      position: 'relative',
      marginBottom: '10px',
      paddingLeft: '25px',
      color: '#000000',
    },
    bulletPoint: {
      position: 'absolute',
      top: '4px',
      left: 0,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#008000',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.columnContainer}>
          <h3 style={styles.columnTitle}>Features</h3>
          <ul style={styles.bulletList}>
            {features.map((item, index) => (
              <li key={index} style={styles.bulletItem}>
                <span style={styles.bulletPoint}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.columnContainer}>
          <h3 style={styles.columnTitle}>Benefits</h3>
          <ul style={styles.bulletList}>
            {benefits.map((item, index) => (
              <li key={index} style={styles.bulletItem}>
                <span style={styles.bulletPoint}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
