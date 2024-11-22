import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, addTodo, toggleComplete, deleteTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <main className="todo-list">
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </main>
  );
}

export default TodoList;
