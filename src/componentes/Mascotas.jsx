"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import "../stylos/Mascotas.css"
import Swal from "sweetalert2"
import { PawPrint, Upload, User, Dog, Award, Calendar, Weight, CreditCard } from "lucide-react"

function FormularioMascota() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [imagePreview, setImagePreview] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  // Función para subir imagen a Cloudinary
  const uploadImageToCloudinary = async (file) => {
    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "Mascotas_upload_preset")

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dlsn53a3m/image/upload`, formData)
      setImageUrl(response.data.secure_url)
    } catch (error) {
      console.error("Error al subir la imagen:", error)
    } finally {
      setUploading(false)
    }
  }

  // Función para manejar la imagen seleccionada
  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result)
    reader.readAsDataURL(file)

    await uploadImageToCloudinary(file)
  }

  // Función para enviar el formulario
  const onSubmit = async (data) => {
    if (imageUrl) {
      data.foto = imageUrl // Agregar la URL de la imagen a los datos
    }

    console.log("📤 Enviando datos:", data)

    try {
      const response = await axios.post("http://localhost:5000/create", data)

      console.log("✅ Respuesta del servidor:", response.data)

      Swal.fire({
        title: "Mascota agregada!",
        html: `La <strong>${data.nombre}</strong> ha sido creada correctamente`,
        icon: "success",
        timer: 3000,
      })

      reset() // Limpiar el formulario
      setImagePreview(null)
      setImageUrl(null)
    } catch (error) {
      console.error("❌ Error en la solicitud:", error.response?.data || error.message)

      Swal.fire({
        icon: "error",
        title: "Error al agregar la mascota",
        text: error.response?.data?.message || "Intente más tarde",
      })
    }
  }

  return (
    <div className="mascotas-container">
      <div className="left-panel">
        <div className="logo-container">
          <img src="https://raw.githubusercontent.com/Vale250910/mascotas_app1/main/img/logo.png" alt="Logo de Akeso" />
        </div>
        <div className="decoration-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-container">
          <div className="form-header">
            <div className="icon-container">
              <PawPrint className="icon" />
            </div>
            <h1>Registro de Mascota</h1>
            <p>Completa los datos de tu mascota</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Imagen circular en la parte superior */}
            <div className="image-upload-container">
              <label htmlFor="file-upload" className="image-upload-label">
                <div className="image-preview">
                  {imagePreview ? (
                    <img src={imagePreview || "/placeholder.svg"} alt="Foto de la mascota" />
                  ) : (
                    <div className="upload-placeholder">
                      <Upload className="upload-icon" />
                      <span>Subir foto</span>
                    </div>
                  )}
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                {...register("foto", { required: "La foto es obligatoria" })}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              {uploading && <p className="uploading-text">Subiendo imagen...</p>}
              {errors.foto && <p className="error-message">{errors.foto.message}</p>}
            </div>

            {/* Campos del formulario */}
            <div className="form-group">
              <label className="form-label">
                <User className="field-icon" />
                <span>Nombre</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Nombre de tu mascota"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
                })}
              />
              {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Dog className="field-icon" />
                <span>Especie</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Ej: Perro, Gato, Ave"
                {...register("especie", {
                  required: "La especie es obligatoria",
                })}
              />
              {errors.especie && <p className="error-message">{errors.especie.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Award className="field-icon" />
                <span>Raza</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Raza de tu mascota"
                {...register("raza", {
                  required: "La raza es obligatoria",
                })}
              />
              {errors.raza && <p className="error-message">{errors.raza.message}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <Calendar className="field-icon" />
                  <span>Edad (años)</span>
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Edad"
                  {...register("edad", {
                    required: "La edad es obligatoria",
                    min: { value: 1, message: "Debe ser mayor a 0" },
                    max: { value: 30, message: "No puede ser mayor a 30 años" },
                  })}
                />
                {errors.edad && <p className="error-message">{errors.edad.message}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Weight className="field-icon" />
                  <span>Peso (kg)</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="form-input"
                  placeholder="Peso"
                  {...register("peso", {
                    required: "El peso es obligatorio",
                    min: { value: 1, message: "Debe ser mayor a 0 kg" },
                    max: { value: 50, message: "No puede ser mayor a 50 kg" },
                  })}
                />
                {errors.peso && <p className="error-message">{errors.peso.message}</p>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <CreditCard className="field-icon" />
                <span>Número de documento del propietario</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Número de documento"
                {...register("id_usuario", {
                  required: "La cédula es obligatoria.",
                  minLength: { value: 7, message: "Mínimo 7 caracteres." },
                  maxLength: { value: 15, message: "Máximo 15 caracteres." },
                  pattern: { value: /^[0-9]+$/, message: "Solo números." },
                })}
              />
              {errors.id_usuario && <p className="error-message">{errors.id_usuario.message}</p>}
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Registrar Mascota
              </button>
              <button type="button" className="cancel-button" onClick={() => reset()}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioMascota

