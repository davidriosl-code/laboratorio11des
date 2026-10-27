import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    agregarTarea(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button 
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaForm;