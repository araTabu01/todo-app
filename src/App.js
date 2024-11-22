import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoList from "./Components/Todolist";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load todos from local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  // Save todos at local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <TodoList
        todos={filteredTodos}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <Footer setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default App;
