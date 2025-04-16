"use client"
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react"
import'../stylos/Usu.css';

const PropietarioDashboard = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  })

  useEffect(() => {
    // Cargar datos del usuario desde localStorage
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      if (user) {
        setUserData({
          nombre: user.nombre || "",
          apellido: user.apellido || "",
          email: user.email || "",
        })
      }
    } catch (error) {
      console.error("Error al cargar datos del usuario:", error)
    }
  }, [])

  return (
    <div className="propietario-dashboard">
      <div className="sidebar">
        <div className="user-info">
          <div className="avatar">
            {userData.nombre.charAt(0)}
            {userData.apellido.charAt(0)}
          </div>
          <h3>
            {userData.nombre} {userData.apellido}
          </h3>
          <p>{userData.email}</p>
        </div>

        <nav className="menu">
          <ul>
            <li>
              <Link to="/propietario">Dashboard</Link>
            </li>
            <li>
              <Link to="/propietario/mascotas">Mis Mascotas</Link>
            </li>
            <li>
              <Link to="/propietario/configuracion">Configuración</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("user")
                  window.location.href = "/login"
                }}
                className="logout-button"
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <header>
          <h1>Panel de Propietario</h1>
        </header>

        <main>
          <Outlet />

          {/* Contenido por defecto cuando no hay una subruta activa */}
          {window.location.pathname === "/propietario" && (
            <div className="dashboard-summary">
              <h2>Bienvenido, {userData.nombre}</h2>
              <p>Este es tu panel de control como propietario.</p>

              <div className="dashboard-cards">
                <div className="card">
                  <h3>Mis Mascotas</h3>
                  <p>Administra tus mascotas registradas</p>
                  <Link to="/propietario/mascotas" className="card-link">
                    Ver mascotas
                  </Link>
                </div>

                <div className="card">
                  <h3>Configuración</h3>
                  <p>Actualiza tu información personal</p>
                  <Link to="/propietario/configuracion" className="card-link">
                    Ir a configuración
                  </Link>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default PropietarioDashboard
