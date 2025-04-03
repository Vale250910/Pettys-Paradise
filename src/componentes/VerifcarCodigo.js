"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "../stylos/Login.css" // 👈 Ajusta la ruta si es necesario

function VerificarCodigo() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [emailRecuperacion, setEmailRecuperacion] = useState("");
  const [codigoGenerado, setCodigoGenerado] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Recupera el email y el código del sessionStorage al montar el componente
    const email = sessionStorage.getItem('recoveryEmail');
    const code = sessionStorage.getItem('verificationCode');

    if (email && code) {
      setEmailRecuperacion(email);
      setCodigoGenerado(code);
    } else {
      // Si no hay email o código en sessionStorage, redirige a la página de recuperación
      router.push("/recuperar-contrasena");
    }
  }, [router]);

  const handleInputChange = (e) => {
    setCodigoIngresado(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (codigoIngresado === codigoGenerado && emailRecuperacion) {
      Swal.fire("Éxito", "Código verificado correctamente. Redirigiendo...", "success").then(() => {
        // Redirige al usuario a la página para restablecer la contraseña,
        // puedes pasar el email como parámetro si lo necesitas
        router.push(`/restablecer-contrasena?email=${emailRecuperacion}`);
        // Limpia el sessionStorage después de la verificación exitosa
        sessionStorage.removeItem('recoveryEmail');
        sessionStorage.removeItem('verificationCode');
      });
    } else {
      Swal.fire("Error", "El código ingresado no es válido.", "error");
    }
  };

  const handleOtroMetodo = () => {
    Swal.fire("Información", "Opción para otro método de autenticación.", "info");
    // Aquí puedes implementar la lógica para otro método
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Verificar Código</h1>
        <p>Se ha enviado un código de verificación a {emailRecuperacion}. Por favor, ingrésalo a continuación.</p>
        <label>
          <strong>Código de Verificación</strong>
          <input
            type="text"
            value={codigoIngresado}
            onChange={handleInputChange}
            placeholder="Ingresa el código"
          />
        </label>
        <button type="submit">Verificar Código</button>
      </form>
      <div className="otros-metodos">
        <button type="button" onClick={handleOtroMetodo}>
          Usar otro método de autenticación
        </button>
      </div>
    </main>
  );
}

export default VerificarCodigo;