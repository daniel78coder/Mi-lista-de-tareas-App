import { TodoListProps } from '../types';
import { TodoItem } from './TodoItem';

/**
 * Componente TodoList - Renderiza la lista completa de tareas
 * 
 * @param todos - Array de tareas a renderizar
 * @param onToggle - Callback para alternar el estado de completitud de una tarea
 * @param onDelete - Callback para eliminar una tarea
 */
export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
