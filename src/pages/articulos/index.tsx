import React from 'react';
import './articulos.css';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';

const Articulos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='articulos-content'>
      <h1>Articulos</h1>
      <p>A continuación podrás acceder a diversos artículos con aplicación de Machine Learning:</p>
      
      { /* SONAR */ }
      <Card
        onClick={() => navigate('sonar')}
        style={{ width: '100%', height: 'auto', cursor: 'pointer', paddingTop: '2px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}
        cover={
          <div style={{ width: '100%', height: 'auto', display:'flex', justifyContent: 'center' }}>
          <img
            style={{ height: '400px' }}
            alt="Ejercicio Sonar"
            src='./sonar.jpg'
          />
          </div>
        }
      >
        <Meta
          title="Caso de estudio: Sonar"
          description="En este caso de estudio se trabajó con un dataset del sonar de un submarino, el cual detecta si lo que hay alrededor son piedras o minas"
        />
    </Card>

    { /* GOLF */ }
    <Card
        onClick={() => navigate('golf')}
        style={{ width: '100%', height: 'auto', cursor: 'pointer', paddingTop: '2px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}
        cover={
          <div style={{ width: '100%', height: 'auto', display:'flex', justifyContent: 'center' }}>
          <img
            style={{ height: '400px' }}
            alt="Ejercicio Golf"
            src='./golf.jpg'
          />
          </div>
        }
      >
        <Meta
          title="Caso de estudio: Golf"
          description="En este caso de estudio se trabajó con un dataset de ejemplo de RapidMiner, llamado golf. Este dataset guarda filas que contienen atributos como condiciones del estado del tiempo, y si se juega o no al golf."
        />
    </Card>

    { /* CARDIAC */ }
    <Card
        onClick={() => navigate('cardiac')}
        style={{ width: '100%', height: 'auto', cursor: 'pointer', paddingTop: '2px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '20px' }}
        cover={
          <div style={{ width: '100%', height: 'auto', display:'flex', justifyContent: 'center' }}>
          <img
            style={{ height: '400px' }}
            alt="Ejercicio Cardiac"
            src='./cardiac.jpg'
          />
          </div>
        }
      >
        <Meta
          title="Caso de estudio: Cardiac"
          description="En este caso de estudio se trabajó con un dataset de datos de pacientes de un hospital, llamado cardiac. El fin de este estudio es que dado ciertas características de algunos pacientes, definir si es probable o no que sufran un segundo paro cardíaco."
        />
    </Card>
    </div>
  );
};

export default Articulos;