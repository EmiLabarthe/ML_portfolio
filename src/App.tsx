import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Articulos from './pages/articulos';
import './App.css'
import { ComponenteArticulo } from './pages/articulos/componente-articulo';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className='content'> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/articulos/:article" element={<ComponenteArticulo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
};

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default AppRoutes;