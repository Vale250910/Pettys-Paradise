"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import "../stylos/Login.css"// 👈 Ajusta la ruta si es necesario


function Recuperar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const generateVerificationCode = () => {
    const length = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const onSubmit = (data) => {
    const passcode = generateVerificationCode();

    emailjs
      .send(
        "service_ay01elm", // 👈 Reemplaza con tu ID de servicio
        "template_g8zoojs", // 👈 Reemplaza con tu ID de plantilla
        {
          email: data.email,
          passcode: passcode,
        },
        "Sp1XkzSo6_MvtBfUl" // 👈 Reemplaza con tu clave pública
      )
      .then(
        () => {
          Swal.fire("Éxito", "Código enviado al correo", "success").then(() => {
            router.push("/verificar-codigo");
            // Aquí podrías almacenar el email y el código en sessionStorage
            sessionStorage.setItem('recoveryEmail', data.email);
            sessionStorage.setItem('verificationCode', passcode);
          });
          console.log("Código generado:", passcode, "para el email:", data.email);
        },
        () => Swal.fire("Error", "No se pudo enviar el correo", "error")
      );
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Recuperar Contraseña</h1>
        <label>
          <strong>Email</strong>
          <input
            type="email"
            {...register("email", { required: "El email es obligatorio" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <button type="submit">Enviar Código</button>
      </form>
    </main>
  );
}

export default Recuperar;