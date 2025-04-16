"use client"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import "../stylos/Login.css"

export default function Login() {
  const navigate = useNavigate()
  
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: data.email,
        contrasena: data.contrasena
      })
  
      if (response.data?.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: `Bienvenido/a ${response.data.user?.nombre || 'Usuario'}`,
          confirmButtonColor: '#0a5483'
        })
  
        // ✅ Guardar el token y usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
  
        // ✅ Redirigir al dashboard protegido
        navigate('/propietario');
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Advertencia',
          text: response.data?.message || 'Credenciales incorrectas',
          confirmButtonColor: '#e53935'
        })
      }
      reset()
    } catch (error) {
      let mensaje = 'Error al conectar con el servidor'
      if (error.response) {
        if (error.response.status === 401) {
          mensaje = 'Correo o contraseña incorrectos'
        } else {
          mensaje = error.response.data?.message || 'Hubo un problema, intenta nuevamente'
        }
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
        confirmButtonColor: '#e53935'
      })
    }
  }


  return (
    <main className="login-main">
      <div className="iz-side">
        <div className="logo-container">
          <Link to="/">
            <img 
              src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/main/img/logo.png" 
              alt="Logo de Akeso" 
              className="login-logo" 
            />
          </Link>
        </div>
      </div>
      
      <div className="der-side">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h1>Inicia Sesión</h1>
          
          <label>
            <strong>Email</strong>
            <input
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: { 
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 
                  message: "El email no es válido" 
                },
              })}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </label>
          
          <label>
            <strong>Contraseña</strong>
            <input
              type="password"
              {...register("contrasena", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres"
                }
              })}
              className={errors.contrasena ? "input-error" : ""}
            />
            {errors.contrasena && <p className="error-message">{errors.contrasena.message}</p>}
          </label>
          
          <button type="submit" className="login-submit-btn">
            Ingresar
          </button>
          
          <div className="extras">
            <p className="signup-link">
              ¿No tienes una cuenta? <Link to="/registrar">Regístrate</Link><br />
              ¿Olvidaste tu contraseña? <Link to="/recuperar">Dale aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}