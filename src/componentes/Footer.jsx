import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../stylos/Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Columna 1 - Logo y descripción */}
          <div className="footer-column">
            <div className="footer-logo">
            <Link to="/">
              <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/logo.png" alt="Cakeso Veterinary Clinic" />
            </Link>
            </div>
            <p>Cuidado veterinario de calidad para tus mascotas con un equipo de profesionales comprometidos.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="footer-column">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div className="footer-column">
            <h3>Servicios</h3>
            <ul className="footer-links">
              <li><a href="#">Medicina Preventiva</a></li>
              <li><a href="#">Diagnóstico Avanzado</a></li>
              <li><a href="#">Cirugía</a></li>
              <li><a href="#">Peluquería Canina</a></li>
              <li><a href="#">Farmacia Veterinaria</a></li>
              <li><a href="#">Hospitalización</a></li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li>
                <FaPhone />
                <span>+123 456 7890</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@akesoveterinary.com</span>
              </li>
              <li>
                <FaClock />
                <div>
                  <p>Lun-Vie: 9am-7pm</p>
                  <p>Sáb: 9am-2pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
        <p>© 2024 Petty's Paradise Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;