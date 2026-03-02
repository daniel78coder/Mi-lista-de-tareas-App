import React, { useState } from 'react';
import { AddTodoFormProps } from '../types';

/**
 * Componente de formulario para agregar nuevas tareas
 * Valida entrada y limpia el campo después de agregar exitosamente
 */
export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevenir comportamiento default del formulario
    event.preventDefault();

    // Validar que input no esté vacío (trim)
    if (inputValue.trim().length > 0) {
      // Llamar callback con el texto validado
      onAdd(inputValue);
      
      // Limpiar input después de agregar tarea exitosamente
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
