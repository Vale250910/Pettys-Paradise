import React from 'react';
import { FaPaw, FaUser, FaChevronRight,  FaShieldAlt, FaHeart, FaStethoscope, FaCut, FaPills, FaFileMedical, FaHome, FaCheck, FaBookMedical, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa';
import '../stylos/Home.css'
import '../stylos/Base.css'
import { Link } from 'react-router-dom';



const Home = () => {
  
  

  return (
    <div className="akeso-veterinaria">
      <main >
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
                  <Link to="/login" className="btn btn-primary btn-lg">
                  Agendar una cita <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                  <Link to="/login" className="btn btn-white-outline">
                    Saber más <FaChevronRight />
                  </Link>
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
                </div>
              </div>
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
                  <Link to="/login" className="btn btn-white">
                  <FaCalendarAlt />Agendar una cita 
                  </Link>
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
    </div>
    
  );
};

export default Home;