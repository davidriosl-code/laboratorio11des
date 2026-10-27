import React, { useState } from 'react';

function SolicitudForm({ agregarSolicitud }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [solicitante, setSolicitante] = useState('');
  const [prioridad, setPrioridad] = useState('media');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !descripcion.trim() || !solicitante.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    agregarSolicitud({
      id: Date.now(),
      titulo,
      descripcion,
      solicitante,
      prioridad,
      estado: 'pendiente'
    });

    setTitulo('');
    setDescripcion('');
    setSolicitante('');
    setPrioridad('media');
    setError('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-6">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Nueva Solicitud de Soporte</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Título de la Incidencia</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej. Pantalla azul al iniciar"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Solicitante</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nombre del colaborador"
              value={solicitante}
              onChange={(e) => setSolicitante(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Prioridad</label>
            <select
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
          <textarea
            rows="3"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Detalle el problema técnico..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition duration-200"
        >
          Registrar Solicitud
        </button>
      </form>
    </div>
  );
}

export default SolicitudForm;