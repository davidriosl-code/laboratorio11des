import React from 'react';

function FiltrosSolicitudes({ filtroActual, setFiltroActual }) {
  const opciones = [
    { key: 'todas', label: 'Todas' },
    { key: 'pendiente', label: 'Pendientes' },
    { key: 'en proceso', label: 'En Proceso' },
    { key: 'resuelta', label: 'Resueltas' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {opciones.map((opcion) => (
        <button
          key={opcion.key}
          onClick={() => setFiltroActual(opcion.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
            filtroActual === opcion.key
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  );
}

export default FiltrosSolicitudes;