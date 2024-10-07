import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './home.css'

const Home: React.FC = () => {
  return (
    <div className='home-content'>
      <h1>Bienvenido al Portfolio de Emiliano Labarthe</h1>
      <p>
        En este portfolio, se presentarán distintos casos de estudio con aplicación de machine learning, 
        principalmente realizados en la herramienta <strong> RapidMiner</strong>. Para ver dichos casos de estudio, puedes navegar a la sección "Artículos". 
        También te dejo el link a mi GitHub por si te interesa ver otros proyectos personales.
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/articulos">
          <Button type="primary" style={{ padding: '10px 30px', fontSize: '18px', height: '50px', marginRight: '10px' }}>Ver Artículos</Button>
        </Link>
        <a href="https://github.com/EmiLabarthe" target="_blank" rel="noopener noreferrer">
          <Button type="default" style={{ padding: '10px 30px', fontSize: '18px', height: '50px' }}>My GitHub</Button>
        </a>
      </div>
    </div>
  );
};

export default Home;