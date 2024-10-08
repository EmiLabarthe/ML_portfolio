import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left">
        Emiliano Labarthe - Portfolio de Machine Learning
      </div>
      <div className="right">
        <a href="/" className="link">Inicio</a>
        <a href="/articulos" className="link">Artículos</a>
        <a href="https://github.com/EmiLabarthe" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
};

export default Header;