import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div className="flex gap-2 mb-4">
      <button 
        onClick={() => filtrarTareas("Todas")}
        className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm text-slate-700"
      >
        Todas
      </button>
      <button 
        onClick={() => filtrarTareas("Pendientes")}
        className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm text-slate-700"
      >
        Pendientes
      </button>
      <button 
        onClick={() => filtrarTareas("Completadas")}
        className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm text-slate-700"
      >
        Completadas
      </button>
    </div>
  );
}

export default Filtros;