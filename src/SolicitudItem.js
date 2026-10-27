import React from 'react';

function SolicitudItem({ solicitud, cambiarEstado, eliminarSolicitud }) {
  const prioridadColor = {
    baja: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    media: 'bg-amber-100 text-amber-800 border-amber-200',
    alta: 'bg-rose-100 text-rose-800 border-rose-200'
  };

  const estadoColor = {
    pendiente: 'bg-slate-100 text-slate-700 border-slate-300',
    'en proceso': 'bg-blue-100 text-blue-700 border-blue-300',
    resuelta: 'bg-teal-100 text-teal-800 border-teal-300'
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-slate-900 text-lg">{solicitud.titulo}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${prioridadColor[solicitud.prioridad]}`}>
            {solicitud.prioridad.toUpperCase()}
          </span>
        </div>
        <p className="text-slate-600 text-sm mb-3">{solicitud.descripcion}</p>
        <p className="text-xs font-medium text-slate-500">Solicitado por: <span className="text-slate-700">{solicitud.solicitante}</span></p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-semibold text-slate-500">Estado:</label>
          <select
            value={solicitud.estado}
            onChange={(e) => cambiarEstado(solicitud.id, e.target.value)}
            className={`text-xs font-medium rounded-lg px-2.5 py-1.5 border focus:outline-none ${estadoColor[solicitud.estado]}`}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En proceso</option>
            <option value="resuelta">Resuelta</option>
          </select>
        </div>

        <button
          onClick={() => eliminarSolicitud(solicitud.id)}
          className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 rounded hover:bg-rose-50 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default SolicitudItem;