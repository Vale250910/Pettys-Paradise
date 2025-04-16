import React from 'react';
import { FaUser,  FaBars } from 'react-icons/fa';
import '../stylos/Header.css'
import { Link } from 'react-router-dom';


const  Header = () => {
  const toggleMobileMenu = () => {
    // Lógica para mostrar/ocultar el menú móvil
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
  };

  return (
    <div className="akeso-veterinaria">
     {/* Header */}
     <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/logo.png" alt="Cakeso Veterinary Clinic" />
            </Link>
          </div>

          <nav className="desktop-nav">
            <Link to="/" className="nav-link active">Inicio</Link>
            <Link to="/servicios" className="nav-link">Servicios</Link>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            <Link to="/login" className="btn btn-primary">
              <FaUser /> Inicio de Sesión
            </Link>
          </nav>

          <button className="menu-toggle" id="menuToggle" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <nav className="mobile-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <Link to="/login" className="btn btn-primary btn-full">
            <FaUser /> Inicio de sesión
          </Link>
        </nav>
      </div>
    </header>
    </div>
  );
}
export default Header;