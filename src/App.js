import React, { useState } from 'react';
import SolicitudForm from './SolicitudForm';
import ListaSolicitudes from './ListaSolicitudes';
import FiltrosSolicitudes from './FiltrosSolicitudes';

function App() {
  const [solicitudes, setSolicitudes] = useState([
    {
      id: 1,
      titulo: 'Error en impresora del área contable',
      descripcion: 'No imprime a doble cara y genera atascos de papel continuamente.',
      solicitante: 'Carlos Mendoza',
      prioridad: 'media',
      estado: 'pendiente'
    },
    {
      id: 2,
      titulo: 'Acceso denegado al ERP',
      descripcion: 'El usuario bloqueó la cuenta al ingresar contraseña incorrecta.',
      solicitante: 'Ana Torres',
      prioridad: 'alta',
      estado: 'en proceso'
    }
  ]);

  const [filtro, setFiltro] = useState('todas');

  const agregarSolicitud = (nuevaSolicitud) => {
    setSolicitudes([nuevaSolicitud, ...solicitudes]);
  };

  const cambiarEstado = (id, nuevoEstado) => {
    setSolicitudes(
      solicitudes.map((sol) =>
        sol.id === id ? { ...sol, estado: nuevoEstado } : sol
      )
    );
  };

  const eliminarSolicitud = (id) => {
    setSolicitudes(solicitudes.filter((sol) => sol.id !== id));
  };

  const solicitudesFiltradas = solicitudes.filter((sol) => {
    if (filtro === 'todas') return true;
    return sol.estado === filtro;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-bold text-slate-900">Sistema de Soporte Técnico</h1>
          <p className="text-slate-600 text-sm mt-1">Gestión de incidencias y requerimientos para colaboradores</p>
        </header>

        <SolicitudForm agregarSolicitud={agregarSolicitud} />

        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Listado de Solicitudes</h2>
          <FiltrosSolicitudes filtroActual={filtro} setFiltroActual={setFiltro} />
          <ListaSolicitudes
            solicitudes={solicitudesFiltradas}
            cambiarEstado={cambiarEstado}
            eliminarSolicitud={eliminarSolicitud}
          />
        </div>
      </div>
    </div>
  );
}

export default App;