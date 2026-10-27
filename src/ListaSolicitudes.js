import React from 'react';
import SolicitudItem from './SolicitudItem';

function ListaSolicitudes({ solicitudes, cambiarEstado, eliminarSolicitud }) {
  if (solicitudes.length === 0) {
    return (
      <div className="bg-white p-8 text-center rounded-xl border border-slate-200">
        <p className="text-slate-500 font-medium">No hay solicitudes registradas en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {solicitudes.map((solicitud) => (
        <SolicitudItem
          key={solicitud.id}
          solicitud={solicitud}
          cambiarEstado={cambiarEstado}
          eliminarSolicitud={eliminarSolicitud}
        />
      ))}
    </div>
  );
}

export default ListaSolicitudes;