import { TodoItemProps } from '../types';

/**
 * Componente TodoItem - Renderiza un item individual de la lista de tareas
 * 
 * @param todo - Objeto con los datos de la tarea (id, text, completed)
 * @param onToggle - Callback para alternar el estado de completitud
 * @param onDelete - Callback para eliminar la tarea
 */
export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Marcar "${todo.text}" como ${todo.completed ? 'pendiente' : 'completada'}`}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`Eliminar tarea "${todo.text}"`}
      >
        Eliminar
      </button>
    </div>
  );
}
