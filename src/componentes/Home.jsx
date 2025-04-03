import React from 'react';
import { FaPaw, FaUser, FaChevronRight, FaBars, FaShieldAlt, FaHeart, FaStethoscope, FaCut, FaPills, FaFileMedical, FaHome, FaCheck, FaBookMedical, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { FaArrowRight as FaArrowRightSolid } from 'react-icons/fa';
import '../stylos/Home.css'


const AkesoVeterinaria = () => {
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
              <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/logo.png" alt="Cakeso Veterinary Clinic" />
            </div>

            <nav className="desktop-nav">
              <a href="#inicio" className="nav-link active">Inicio</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#nosotros" className="nav-link">Nosotros</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contacto" className="nav-link">Contacto</a>
              <button className="btn btn-primary">
                <FaUser /> Inicio de Sesión
              </button>
            </nav>

            <button className="menu-toggle" id="menuToggle" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu" id="mobileMenu">
          <nav className="mobile-nav">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#nosotros" className="nav-link">Nosotros</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contacto" className="nav-link">Contacto</a>
            <button className="btn btn-primary btn-full">
              <FaUser /> Inicio de sesión
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="badge">
                  <FaPaw />
                  Cuidado veterinario profesional
                </div>
                <h1>Salud y <span className="highlight">bienestar</span> para tu mascota</h1>
                <p>En Cakeso Veterinary Clinic combinamos experiencia, tecnología y cariño para ofrecer el mejor cuidado a tus compañeros.</p>
                <div className="button-group">
                  <button className="btn btn-primary btn-lg">
                    Agendar una cita
                    <FaChevronRight />
                  </button>
                  <button className="btn btn-outline btn-lg">
                    Nuestros servicios
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-decoration circle-1"></div>
                <div className="image-decoration circle-2"></div>
                <div className="image-container">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Veterinario%20con%20mascota.jpg" alt="Veterinario con mascota" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="container">
              <div className="stats-grid">
                
                <div className="stat-item">
                  <div className="stat-number">+10</div>
                  <p>Especialistas</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Lunes a Sábado</div>
                  <p>Atención en clínica</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="services-section">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <div className="badge">
                  <FaShieldAlt />
                  Nuestros Servicios
                </div>
                <h2>Cuidado integral para tu mascota</h2>
                <p>Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tus compañeros.</p>
              </div>
              <button className="btn btn-outline">
                Ver todos los servicios
                <FaArrowRight />
              </button>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaHeart />
                  </div>
                  <h3>Medicina Preventiva</h3>
                  <p>Vacunaciones, chequeos regulares y planes de prevención personalizados para cada etapa de vida.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaStethoscope />
                  </div>
                  <h3>Diagnóstico Avanzado</h3>
                  <p>Radiografías digitales, ecografías y análisis de laboratorio con resultados rápidos y precisos.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaCut />
                  </div>
                  <h3>Peluquería Canina</h3>
                  <p>Servicios de estética y cuidado del pelaje realizados por profesionales con experiencia.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaPills />
                  </div>
                  <h3>Farmacia Veterinaria</h3>
                  <p>Medicamentos de calidad y alimentos especializados para todas las necesidades de tu mascota.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaFileMedical />
                  </div>
                  <h3>Cirugía</h3>
                  <p>Procedimientos quirúrgicos con equipos modernos y técnicas mínimamente invasivas.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="service-card">
                <div className="service-overlay"></div>
                <div className="service-content">
                  <div className="service-icon">
                    <FaHome />
                  </div>
                  <h3>Hospitalización</h3>
                  <p>Cuidados intensivos con monitoreo constante en un ambiente tranquilo y confortable.</p>
                  <button className="btn btn-white-outline">
                    Saber más
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <div className="badge">
                  <FaPaw />
                  Sobre Nosotros
                </div>
                <h2>Pasión por el cuidado animal</h2>
                <p>Desde 2010, Cakeso Veterinary Clinic ha sido sinónimo de excelencia en el cuidado veterinario. Nuestro equipo de profesionales combina experiencia, tecnología de vanguardia y un profundo amor por los animales.</p>

                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaCheck />
                    </div>
                    <span>Equipo de veterinarios certificados</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaCheck />
                    </div>
                    <span>Instalaciones modernas</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaCheck />
                    </div>
                    <span>Tecnología de vanguardia</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaCheck />
                    </div>
                    <span>Atención personalizada</span>
                  </div>
                </div>

                <div className="button-group">
                  <button className="btn btn-outline">Nuestra historia</button>
                </div>
              </div>
              <div className="about-gallery">
                <div className="gallery-grid">
                  <div className="gallery-column">
                    <div className="gallery-image">
                      <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Veterinario%20con%20perro.jpg" alt="Veterinario con perro" />
                    </div>
                    <div className="gallery-card">
                      <p>Más de 4 años cuidando mascotas</p>
                    </div>
                  </div>
                  <div className="gallery-column gallery-column-offset">
                    <div className="gallery-card gallery-card-light">
                      <div className="stat-number">+10</div>
                      <p>Especialistas</p>
                    </div>
                    <div className="gallery-image">
                      <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Veterinario%20con%20gato.webp" alt="Veterinario con gato" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="blog-section">
          <div className="container">
            <div className="section-header-center">
              <div className="badge">
                <FaBookMedical />
                Nuestro Blog
              </div>
              <h2>Consejos y artículos para el cuidado de tu mascota</h2>
              <p>Compartimos información valiosa para ayudarte a mantener a tus compañeros saludables y felices.</p>
            </div>

            <div className="blog-grid">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/alimentacion%20mascota.webp" alt="Alimentación saludable para mascotas" />
                  <div className="blog-category">Nutrición</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> 15 Mayo, 2024</span>
                    <span><FaUser /> Dr. Carlos Rodríguez</span>
                  </div>
                  <h3>Alimentación saludable para tu mascota</h3>
                  <p>Descubre los mejores consejos para una dieta equilibrada que mantendrá a tu mascota en óptimas condiciones.</p>
                  <a href="#" className="blog-link">
                    Leer más
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Cuidados.avif" alt="Cuidados en verano" />
                  <div className="blog-category">Cuidados</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> 10 Mayo, 2024</span>
                    <span><FaUser /> Dra. Laura Martínez</span>
                  </div>
                  <h3>Cómo proteger a tu mascota del calor</h3>
                  <p>El verano puede ser peligroso para nuestras mascotas. Aprende cómo mantenerlas frescas y seguras durante los días calurosos.</p>
                  <a href="#" className="blog-link">
                    Leer más
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Vacunacion.jpg" alt="Vacunación de mascotas" />
                  <div className="blog-category">Prevención</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> 5 Mayo, 2024</span>
                    <span><FaUser /> Dr. Miguel Sánchez</span>
                  </div>
                  <h3>Guía completa de vacunación para perros y gatos</h3>
                  <p>Todo lo que necesitas saber sobre el calendario de vacunación para mantener a tu mascota protegida contra enfermedades.</p>
                  <a href="#" className="blog-link">
                    Leer más
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/Cuidado%20de%20mascotas%20exoticas.jpeg" alt="Cuidado de mascotas exóticas" />
                  <div className="blog-category">Exóticos</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><FaCalendarAlt /> 1 Mayo, 2024</span>
                    <span><FaUser /> Dra. Ana Gómez</span>
                  </div>
                  <h3>Cuidados básicos para mascotas exóticas</h3>
                  <p>Consejos especializados para el cuidado de aves, reptiles y pequeños mamíferos que requieren atención especial.</p>
                  <a href="#" className="blog-link">
                    Leer más
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="section-footer">
              <button className="btn btn-outline">
                Ver todos los artículos
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <div className="cta-text">
                <h2>¿Listo para darle a tu mascota el cuidado que merece?</h2>
                <p>Agenda una cita hoy mismo y déjanos cuidar de la salud de tu compañero.</p>
                <div className="button-group">
                  <button className="btn btn-white">
                    <FaCalendarAlt />
                    Agendar una cita
                  </button>
                </div>
              </div>
              <div className="cta-image">
                <div className="image-decoration circle-3"></div>
                <div className="image-decoration circle-4"></div>
                <div className="image-container">
                  <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/mascota-en-familia.webp" alt="Familia feliz con su mascota" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <div className="badge">
                  <FaEnvelope />
                  Contacto
                </div>
                <h2>Estamos aquí para ayudarte</h2>
                <p>Si tienes alguna pregunta o necesitas programar una cita, no dudes en contactarnos.</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-text">
                      <h3>Dirección</h3>
                      <p>Av. Principal 123, Ciudad</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-text">
                      <h3>Teléfono</h3>
                      <p>+123 456 7890</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <p>info@cakesoveterinary.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div className="contact-text">
                      <h3>Horario</h3>
                      <p>Lunes a Viernes: 9am - 7pm</p>
                      <p>Sábados: 9am - 2pm</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/refs/heads/main/img/logo.png" alt="Cakeso Veterinary Clinic" />
              </div>
              <p>Cuidado veterinario de calidad para tus mascotas con un equipo de profesionales comprometidos.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
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
                  <span>info@cakesoveterinary.com</span>
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
          <div className="footer-bottom">
            <p>© 2024 Cakeso Veterinary Clinic. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AkesoVeterinaria;