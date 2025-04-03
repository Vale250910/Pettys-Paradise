"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../stylos/Login.css"

function Recuperar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        "service_ay01elm",
        "template_g8zoojs", 
        {
          email: data.email,
          passcode: passcode, 
        },
        "Sp1XkzSo6_MvtBfUl" 
      )
      .then(
        () => Swal.fire("Éxito", `Código enviado al correo`, "success"),
        () => Swal.fire("Error", "No se pudo enviar el correo", "error")
      );


    console.log("Código generado:", passcode, "para el email:", data.email);
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