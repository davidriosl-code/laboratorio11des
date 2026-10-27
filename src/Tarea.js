import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={completada} 
          onChange={onToggleCompletada} 
          className="w-4 h-4 text-indigo-600 rounded"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="px-2 py-1 border border-slate-300 rounded focus:outline-none"
          />
        ) : (
          <span className={completada ? 'line-through text-slate-400' : 'text-slate-800'}>
            {tarea}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button 
            onClick={handleSaveClick}
            className="text-xs bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700"
          >
            Guardar
          </button>
        ) : (
          <>
            <button 
              onClick={handleEditClick}
              className="text-xs bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600"
            >
              Editar
            </button>
            <button 
              onClick={onDelete}
              className="text-xs bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Tarea;