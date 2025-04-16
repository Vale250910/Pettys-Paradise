import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutePropietario = () => {
  const [loading, setLoading] = useState(true);
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    const verificarPropietario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/verificar-propietario", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAutorizado(response.ok);
      } catch (error) {
        console.error("Error al verificar propietario:", error);
      } finally {
        setLoading(false);
      }
    };

    verificarPropietario();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return autorizado ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutePropietario;
