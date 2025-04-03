"use client"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"
import "../stylos/Login.css" 

function Login() {
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
        });

        if (response.data?.success) {
            Swal.fire({
                icon: 'success',
                title: '¡Inicio de sesión exitoso!',
                text: `Bienvenido/a ${response.data.user?.nombre || 'Usuario'}`,
                confirmButtonColor: '#3085d6'
            });

            // Guardar datos del usuario en localStorage
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirigir al dashboard o página principal
            window.location.href = '/dashboard'; 
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: response.data?.message || 'Credenciales incorrectas',
                confirmButtonColor: '#d33'
            });
        }

        if (typeof reset === 'function') {
            reset();
        }
    } catch (error) {
        let mensaje = 'Error al conectar con el servidor';

        if (error.response) {
            if (error.response.status === 401) {
                console.warn('Credenciales incorrectas:', error.response.data?.message || 'Correo o contraseña incorrectos');
                mensaje = 'Correo o contraseña incorrectos';
            } else {
                console.error('Error en el servidor:', error);
                mensaje = error.response.data?.message || 'Hubo un problema, intenta nuevamente';
            }
        }

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensaje,
            confirmButtonColor: '#d33'
        });
    }
};


  return (
    <main>
      <div className="iz-side">
        <div className="logo-container">
          <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/main/img/logo.png" alt="Logo de Akeso" />
        </div>
      </div>
      <div className="der-side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Inicia Sesión</h1>

          <label>
            <strong>Email</strong>
            <input
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: "El email no es válido" },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>

          <label>
            <strong>Contraseña</strong>
            <input
              type="password"
              {...register("contrasena", {
                required: "La contraseña es obligatoria",
              })}
            />
            {errors.contrasena && <p>{errors.contrasena.message}</p>}
          </label>

          <button type="submit">Ingresar</button>
          <button type="button" onClick={() => window.history.back()} className="volver-btn">
            Volver
          </button>
          <div className="extras">
            <a href="/recuperar">Olvide mi contraseña</a>
            <a href="/registrar">Registrarse</a>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login

