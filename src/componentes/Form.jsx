"use client"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { PawPrint, User, AtSign, Lock } from 'lucide-react';
import '../stylos/Form.css';

export default function SignupForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    watch,
    trigger
  } = useForm();
  
  const [step, setStep] = useState(1);
  const password = watch("password");
  const email = watch("email");

  const onSubmit = (data) => {
    alert("Formulario enviado: " + JSON.stringify(data));
    addUsuario(data);
    reset();
    setStep(1);
  };
  
  const addUsuario = (data) => {
    Axios.post("http://localhost:5000/register", {
      tipo_doc: data.tipo_doc,
      id_usuario: data.id_usuario,
      nombre: data.nombre,
      apellido: data.apellido,
      ciudad: data.ciudad,
      direccion: data.direccion,
      telefono: data.telefono,
      fecha_nacimiento: data.fecha_nacimiento,
      email: data.email,
      contrasena: data.contrasena, // Mantenemos contrasena
      id_tipo: data.id_tipo || 1,  // Valor por defecto para Invitado/Tutor
      id_rol: data.id_rol || 3     // Valor por defecto para Propietario
    }).then((response) => {
      Swal.fire({
        title: '<strong>Registro exitoso!</strong>',
        html: `<i>El usuario <strong>${data.nombre}</strong> fue registrado con éxito!</i>`,
        icon: 'success',
        timer: 3000
      });
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
      
      reset();
    }).catch(error => {
      let errorMessage = 'Error al registrar el usuario';
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
        if (error.response.status === 409) {
          errorMessage = "El email o documento ya están registrados";
        }
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Error en registro',
        text: errorMessage,
        confirmButtonColor: '#d33'
      });
    });
  };

  const nextStep = async () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = await trigger(["tipo_doc", "id_usuario", "nombre", "apellido"]);
    } else if (step === 2) {
      isValid = await trigger(["ciudad", "direccion", "telefono", "fecha_nacimiento"]);
    } else if (step === 3) {
      isValid = await trigger(["email", "password", "id_tipo","id_rol"]);
    }
    
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <div className="icon-container">
            <PawPrint className="icon-paw" />
          </div>
          <h1>{step === 1 ? "Información Personal" : step === 2 ? "Información de Contacto" : "Credenciales"}</h1>
          <p>Paso {step} de 3</p>
        </div>
        
        <div className="form-body">
          <form onSubmit={handleSubmit(onSubmit)} id="signup-form">
            {/* Paso 1: Información personal */}
            {step === 1 && (
              <>
                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Tipo de documento</label>
                  </div>
                  <select 
                    {...register("tipo_doc", { required: "El tipo de documento es obligatorio." })}
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="C.C">C.C</option>
                    <option value="C.E">C.E</option>
                  </select>
                  {errors.tipo_doc && <span className="error-message">{errors.tipo_doc.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Cédula</label>
                  </div>
                  <input 
                    type="text"
                    {...register("id_usuario", {
                      required: "La cédula es obligatoria.",
                      minLength: { value: 7, message: "Mínimo 7 caracteres." },
                      maxLength: { value: 12, message: "Máximo 12 caracteres." },
                      pattern: { value: /^[0-9]+$/, message: "Solo números." }
                    })}
                    placeholder="Escribe tu número de documento"
                  />
                  {errors.id_usuario && <span className="error-message">{errors.id_usuario.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Nombre</label>
                  </div>
                  <input 
                    type="text" 
                    {...register("nombre", {  required: "El nombre es obligatorio.",
                      minLength: { value: 3, message: "Mínimo 3 caracteres." },
                      maxLength: { value: 50, message: "Máximo 50 caracteres." },
                      pattern: { value: /^[a-zA-Z ]+$/, message: "Solo letras." } })}
                    placeholder="Escribe tu nombre"
                  />
                  {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Apellido</label>
                  </div>
                  <input 
                    type="text" 
                    {...register("apellido", {  required: "El apellido es obligatorio.",
                      minLength: { value: 3, message: "Mínimo 3 caracteres." },
                      maxLength: { value: 50, message: "Máximo 50 caracteres." },
                      pattern: { value: /^[a-zA-Z ]+$/, message: "Solo letras." }})}
                    placeholder="Escribe tu apellido"
                  />
                  {errors.apellido && <span className="error-message">{errors.apellido.message}</span>}
                </div>

                
              </>
            )}

            {/* Paso 2: Contacto */}
            {step === 2 && (
              <>
                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Ciudad</label>
                  </div>
                  <input
                    type="text"
                    {...register("ciudad", {
                      required: "La ciudad es obligatoria.",
                      pattern: { value: /^[a-zA-Z ]+$/, message: "Solo letras." },
                      minLength: { value: 5, message: "Mínimo 5 caracteres." },
                      maxLength: { value: 100, message: "Máximo 100 caracteres." }
                    })}
                    placeholder="Escribe tu ciudad"
                  />
                  {errors.ciudad && <span className="error-message">{errors.ciudad.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Dirección</label>
                  </div>
                  <input
                    type="text"
                    {...register("direccion", {
                      required: "La dirección es obligatoria.",
                      minLength: { value: 5, message: "Mínimo 5 caracteres." },
                      maxLength: { value: 100, message: "Máximo 100 caracteres." }
                    })}
                    placeholder="Escribe tu dirección"
                  />
                  {errors.direccion && <span className="error-message">{errors.direccion.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Teléfono</label>
                  </div>
                  <input
                    type="tel"
                    {...register("telefono", {
                      required: "El teléfono es obligatorio.",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Solo se admiten números y debe tener 10 dígitos."
                      }
                    })}
                    placeholder="Escribe tu teléfono"
                  />
                  {errors.telefono && <span className="error-message">{errors.telefono.message}</span>}
                </div>

                <div className="form-group">
                  <div className="label-container">
                    <User className="icon-small" />
                    <label>Fecha de nacimiento</label>
                  </div>
                  <input
                    type="date"
                    {...register("fecha_nacimiento", {
                      required: "La fecha de nacimiento es obligatoria.",
                      validate: value => {
                        const fecha_nacimiento = new Date(value);
                        const hoy = new Date();
                        let edad = hoy.getFullYear() - fecha_nacimiento.getFullYear();
                        const mes = hoy.getMonth() - fecha_nacimiento.getMonth();
                        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha_nacimiento.getDate())) {
                          edad--;
                        }
                        return edad >= 18 || "Debes ser mayor de 18 años.";
                      }
                    })}
                  />
                  {errors.fecha_nacimiento && <span className="error-message">{errors.fecha_nacimiento.message}</span>}
                </div>
              </>
            )}

            {/* Paso 3: Credenciales */}
            {step === 3 && (
              <>
                <div className="form-group">
                  <div className="label-container">
                    <AtSign className="icon-small" />
                    <label>Correo electrónico</label>
                  </div>
                  <input 
                    type="email" 
                    {...register("email", { 
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    })}
                    placeholder="tu@correo.com"
                  />
                  {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                  <label>
                    <Lock className="icon-small" /> Contraseña
                  </label>
                  <input
                    type="password"
                    {...register("contrasena", {
                      required: "La contraseña es obligatoria",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-\[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/,
                        message: "Debe tener mayúscula, minúscula, número, carácter especial y sin espacios"
                      }
                    })}
                    placeholder="Crea una contraseña segura"
                  />
                  {errors.contrasena && <span className="error-message">{errors.contrasena.message}</span>}
                </div>


                <div className="form-group">
                  
                    <select
                      {...register("id_tipo", { required: "El tipo de usuario es obligatorio." })}
                      defaultValue="1" 
                      style={{ display: 'none' }} >
                      <option value="">Seleccione un tipo</option>
                      <option value="1">Invitado/Tutor</option>
                      <option value="2">Medico</option>
                      <option value="3">Auxiliar Veterinario</option>
                      <option value="4">Administrativo</option>
                    </select>
                  {errors.id_tipo && <p className="text-danger">{errors.id_tipo.message}</p>}
                </div>
                <div className="form-group">
                  <select
                    {...register("id_rol", { required: "El tipo de usuario es obligatorio." })}
                    defaultValue="3" 
                    style={{ display: 'none' }} >
                    <option value="">Seleccione un tipo</option>
                    <option value="1">Administrador</option>
                    <option value="2">Veterinario</option>
                    <option value="3">Propietario</option>
                  </select>
                  {errors.id_tipo && <p className="text-danger">{errors.id_tipo.message}</p>}
                </div>
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    {...register("terms", { required: "Debes aceptar los términos y condiciones" })}
                  />
                  <label htmlFor="terms">Acepto los términos y condiciones</label>
                  {errors.terms && <span className="error-message">{errors.terms.message}</span>}
                </div>
              </>
            )}
          </form>
        </div>
        
        <div className="form-footer">
          <div className="button-container">
            {step > 1 && (
              <button 
                type="button" 
                onClick={() => setStep(step - 1)} 
                className="button button-prev"
              >
                Anterior
              </button>
            )}
            {step < 3 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="button button-next"
              >
                Siguiente
              </button>
            ) : (
              <button 
                type="submit" 
                form="signup-form" 
                className="button button-submit"
              >
                Crear cuenta
              </button>
            )}
          </div>
          <p className="login-link">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
        </div>
      </div>
    </div>
  );
}