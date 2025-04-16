import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../stylos/Login.css';
import { useForm } from 'react-hook-form';

function RecuperarContraseña() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const generateVerificationCode = () => {
    const length = 6;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleSendCode = (data) => {
    const code = generateVerificationCode();
    setVerificationCode(code);
    setEmail(data.email);

    emailjs
      .send(
        'service_ay01elm',
        'template_g8zoojs',
        {
          email: data.email,
          passcode: code,
        },
        'Sp1XkzSo6_MvtBfUl'
      )
      .then(
        () => {
          Swal.fire('Éxito', `Código enviado al correo`, 'success');
          setStep(2);
        },
        () => Swal.fire('Error', 'No se pudo enviar el correo', 'error')
      );
  };

  const handleVerifyCode = (data) => {
    if (data.code === verificationCode) {
      Swal.fire('Éxito', 'Código verificado', 'success');
      setStep(3);
    } else {
      Swal.fire('Error', 'Código incorrecto', 'error');
    }
  };

  const handleResetPassword = (data) => {
    // Aquí iría la lógica para resetear la contraseña en la base de datos
    Swal.fire('Éxito', 'Contraseña restablecida correctamente', 'success');
    navigate('/login'); // Redirige al login
  };

  switch (step) {
    case 1:
      return (
        <main className="login-main">
          <div className="iz-side">
            <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/main/img/logo.png" alt="Logo de Akeso" className="login-logo" />
          </div>
          <div className="der-side">
            <form className="login-form" onSubmit={handleSubmit(handleSendCode)}>
              <h1>Recuperar Contraseña</h1>
              <label>
                <strong>Email</strong>
                <input
                  type="email"
                  {...register('email', { required: 'El email es obligatorio' })}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </label>
              <button type="submit" className="login-submit-btn">
                Enviar Código
              </button>
            </form>
          </div>
        </main>
      );
    case 2:
      return (
        <main className="login-main">
          <div className="iz-side">
            <img src="/images/LogoBlanco.png" alt="Logo" className="login-logo" />
          </div>
          <div className="der-side">
            <form className="login-form" onSubmit={handleSubmit(handleVerifyCode)}>
              <h1>Verificar Código</h1>
              <label>
                <strong>Código de Verificación</strong>
                <input
                  type="text"
                  {...register('code', { required: 'El código es obligatorio' })}
                  className={errors.code ? 'input-error' : ''}
                />
                {errors.code && <p className="error-message">{errors.code.message}</p>}
              </label>
              <button type="submit" className="login-submit-btn">
                Verificar Código
              </button>
            </form>
          </div>
        </main>
      );
    case 3:
      return (
        <main className="login-main">
          <div className="iz-side">
            <img src="/images/LogoBlanco.png" alt="Logo" className="login-logo" />
          </div>
          <div className="der-side">
            <form className="login-form" onSubmit={handleSubmit(handleResetPassword)}>
              <h1>Nueva Contraseña</h1>
              <label>
                <strong>Nueva Contraseña</strong>
                <input
                  type="password"
                  {...register('password', { required: 'La contraseña es obligatoria' })}
                  className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </label>
              <label>
                <strong>Confirmar Contraseña</strong>
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'La confirmación de contraseña es obligatoria',
                    validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
                  })}
                  className={errors.confirmPassword ? 'input-error' : ''}
                />
                {errors.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword.message}</p>
                )}
              </label>
              <button type="submit" className="login-submit-btn">
                Restablecer Contraseña
              </button>
            </form>
          </div>
        </main>
      );
    case 4:
      return (
        <main className="login-main">
          <div className="iz-side">
            <img src="/images/LogoBlanco.png" alt="Logo" className="login-logo" />
          </div>
          <div className="der-side">
            <div className="login-form">
              <h1>Contraseña Restablecida</h1>
              <p>Tu contraseña ha sido restablecida correctamente.</p>
              <button onClick={() => navigate('/login')} className="login-submit-btn">
                Ir a Login
              </button>
            </div>
          </div>
        </main>
      );
    default:
      return null;
  }
}

export default RecuperarContraseña;