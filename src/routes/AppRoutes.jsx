import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../componentes/Home.jsx"
import Login from "../pages/Login.jsx"
import Mascotas from "../pages/Mascotas.jsx"
import Registrar from "../pages/Registrar.jsx"
import RecuperarContraseña from "../pages/RecuperarContraseña.jsx"
import Header from "../componentes/Header.jsx"
import Footer from "../componentes/Footer.jsx"
import PropietarioDashboard from "../pages/PropietarioDashboard";
import PrivateRoutePropietario from "./PrivateRoutePropietario";




const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta Home con Header y Footer */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />

      {/* Rutas sin Header y Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/recuperar"element={<RecuperarContraseña/>}/>
      
        {/* RUTA PRIVADA PARA PROPIETARIOS */}
        <Route element={<PrivateRoutePropietario />}>
          <Route path="/propietario" element={<PropietarioDashboard />} />
          <Route path="/propietario/mascotas" element={<Mascotas />} />
        </Route>
      

      {/* Redirección para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
