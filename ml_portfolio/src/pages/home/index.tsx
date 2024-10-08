import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Bienvenido al Portfolio de Emiliano Labarthe</h1>
        <p>
          En este portfolio, se presentarán distintos casos de estudio con aplicación de machine learning, 
          principalmente realizados en la herramienta <strong> RapidMiner</strong>. Para ver dichos casos de estudio, puedes navegar a la sección "Artículos". 
          También te dejo el link a mi GitHub por si te interesa ver otros proyectos personales.
        </p>
        <div className='button-group'>
          <Link to="/articulos">
            <Button type="primary" className="custom-button">Ver Artículos</Button>
          </Link>
          <a href="https://github.com/EmiLabarthe" target="_blank" rel="noopener noreferrer">
            <Button type="default" className="custom-button">My GitHub</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
