import React, { useState } from 'react';
import ima1 from '../image/EasyAU.png';
import ima2 from '../image/Kit.png';
import ima3 from '../image/Plata.png';
import ima4 from '../image/Material.png';
import ima5 from '../image/Metodologia.png';
import ima6 from '../image/Steam.png';

const AllServices = () => {
  const serviceData = [
    {
      image: ima1,
      title: "Aula móvil",
      description: "Equipada para desplegar rápidamente en cualquier lugar, una instalación educativa con todas las herramientas de software, hardware y materiales para la enseñanza, el desarrollo e implementación de ideas innovadoras, contenidos STEAM y otros programas.",
    },
    {
      image: ima2,
      title: "Kit de Robótica",
      description: "Octabio Education 2.0 hace que la ciencia, la tecnología, la ingeniería, las matemáticas y la codificación cobren vida. Basado en tecnología de open source amigable para el aula y procesos de autoaprendizaje, es una poderosa herramienta tecnológica, para el desarrollo proyectos atractivos y escalables que aumenta la confianza de los estudiantes para hacer preguntas, definir problemas y diseñar sus propias soluciones poniendo el aprendizaje de STEM directamente en sus manos.",
    },
    {
      image: ima3,
      title: "Plataforma Online y App",
      description: "Plataforma LMS (Learning Management System) y aplicación móvil, para el aprendizaje masivo, con seguimiento personalizado para grupos e individual, permite el desarrollo y seguimientos de los contenidos identificando talentos potenciales y oportunidades de aprendizaje. Nuestra plataforma crea una poderosa comunidad colaborativa que permite fortalecer el intercambio de conocimientos y experiencias.",
    },
    {
      image: ima4,
      title: "Material de apoyo y Metodologías",
      description: "El material permite a los alumnos de cualquier nivel educativo incursionar en los conceptos básicos de ingeniería y la ciencia, utilizándolos para encontrar diferentes formas de solucionar un mismo problema con una cantidad limitada de elementos. De esta manera, se fomenta el pensamiento crítico, trabajo en equipo y creatividad; habilidades necesarias para cumplir con los desafíos que representa la revolución industrial 4.0.",
    },
    {
      image: ima5,
      title: "Material didáctico basado en Retos",
      description: "Está creado para ser llevado a cabo de manera flexible dentro y fuera del aula, como taller o actividades de formación de los conceptos de ingeniería, arte y ciencia; así como para fomentar habilidades de cooperación, comunicación, responsabilidad, compromiso y confianza. Todos ellos impulsados y motivados por la creatividad y la innovación para la resolución de problemas. Es aplicable tanto en educación básica, media superior y superior."
    },
    {
      image: ima6,
      title: "Sistemas de capacitación de multiplicadores STEAM",
      description: "Conscientes de la necesidad de multiplicar el conocimiento y los procesos de formación STEAM, diseñamos una metodología de formación virtual para capacitadores. La certificación MAMUS para capacitadores genera una oportunidad de primer empleo para nuestros jóvenes.",
    },
  ];

  const ServiceCard = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
      setIsExpanded(!isExpanded);
    };

    const description = isExpanded ? data.description : `${data.description.slice(0, 100)}...`;

    return (
      <div style={styles.cardContainer}>
        <img src={data.image} alt={data.title} style={styles.cardImage} />
        <h2 style={styles.cardTitle}>{data.title}</h2>
        <p style={styles.cardDescription}>{description}</p>
        <button onClick={handleExpandClick} style={styles.readMoreButton}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    );
  };

  const styles = {
    servicesContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      padding: '10px',
      margin: '0 auto',
      marginTop: '60px',
      maxWidth: '1200px',
      
    },
    servicesTitle: {
      fontSize: '2.5em',
      marginBottom: '10px',
      textAlign: 'center',
      color: '#333',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '10px',
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '4px',
      padding: '20px',
      backgroundColor: '#fff',
      maxWidth: '300px',
    },
    cardImage: {
      width: '100%',
      height: '150px',  // Ajusta este valor según tus necesidades
      objectFit: 'cover',
    },
    cardTitle: {
      margin: '12px 0',
      color: '#333',
      fontSize: '1em',
    },
    cardDescription: {
      textAlign: 'center',
      color: '#666',
      fontSize: '1em',
    },
    readMoreButton: {
      backgroundColor: '#12417a',
      color: '#FFF',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.servicesContainer}>
      <h1 style={styles.servicesTitle}>Componentes MAMŪS</h1>
      <div style={styles.cardsContainer}>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
