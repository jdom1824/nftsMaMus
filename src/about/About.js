import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.section}>
        <h1 style={styles.title}>Componentes MAMUS</h1>
          <h2 style={styles.subtitle}>Aula móvil</h2>
          <p style={styles.description}>
            Equipada para desplegar rápidamente en cualquier lugar, una instalación educativa con todas las herramientas de software, hardware y materiales para la enseñanza, el desarrollo e implementación de ideas innovadoras, contenidos STEAM y otros programas.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Kit de Robótica</h2>
          <p style={styles.description}>
            Octabio Education 2.0 hace que la ciencia, la tecnología, la ingeniería, las matemáticas y la codificación cobren vida. Basado en tecnología de open source amigable para el aula y procesos de autoaprendizaje, es una poderosa herramienta tecnológica, para el desarrollo proyectos atractivos y escalables que aumenta la confianza de los estudiantes para hacer preguntas, definir problemas y diseñar sus propias soluciones poniendo el aprendizaje de STEM directamente en sus manos.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Plataforma Online y App</h2>
          <p style={styles.description}>
            Plataforma LMS (Learning Management System) y aplicación móvil, para el aprendizaje masivo, con seguimiento personalizado para grupos e individual, permite el desarrollo y seguimientos de los contenidos identificando talentos potenciales y oportunidades de aprendizaje. Nuestra plataforma crea una poderosa comunidad colaborativa que permite fortalecer el intercambio de conocimientos y experiencias.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Material de apoyo y Metodologías</h2>
          <p style={styles.description}>
            El material permite a los alumnos de cualquier nivel educativo incursionar en los conceptos básicos de ingeniería y la ciencia, utilizándolos para encontrar diferentes formas de solucionar un mismo problema con una cantidad limitada de elementos. De esta manera, se fomenta el pensamiento crítico, trabajo en equipo y creatividad; habilidades necesarias para cumplir con los desafíos que representa la revolución industrial 4.0.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.subtitle}>El material didáctico basado en Retos</h2>
          <p style={styles.description}>
            Está creado para ser llevado a cabo de manera flexible dentro y fuera del aula, como taller o actividades de formación de los conceptos de ingeniería, arte y ciencia; así como para fomentar habilidades de cooperación, comunicación, responsabilidad, compromiso y confianza. Todos ellos impulsados y motivados por la creatividad y la innovación para la resolución de problemas. Es aplicable tanto en educación básica, media superior y superior.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Sistemas de capacitación de multiplicadores STEAM</h2>
          <p style={styles.description}>
            Conscientes de la necesidad de multiplicar el conocimiento y los procesos de formación STEAM, diseñamos una metodología de formación virtual para capacitadores. La certificación MAMUS para capacitadores genera una oportunidad de primer empleo para nuestros jóvenes.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '250vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Courier New, monospace',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    padding: '20px',
    zIndex: 1,
  },
  section: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '1px',
    color: '#fff',
  },
  description: {
    fontSize: '20px',
    marginBottom: '20px',
    letterSpacing: '0.5px',
    fontWeight: 'bold',
  },
};

export default About;
