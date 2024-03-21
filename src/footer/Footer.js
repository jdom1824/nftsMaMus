import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.socialIcons}>
          <a href="https://www.facebook.com/conexalab" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          </a>
          <a href="https://twitter.com/conexalab" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/company/conexalab/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} style={styles.icon} />
          </a>
        </div>
        <p style={styles.footerText}>© 2024 Conexalab. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    padding: '20px',
    color: '#fff',
    fontFamily: 'Courier New, monospace',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  icon: {
    fontSize: '20px',
    color: '#fff',
    margin: '0 5px',
    cursor: 'pointer',
  },
  footerText: {
    fontSize: '14px',
  },
};

export default Footer;
