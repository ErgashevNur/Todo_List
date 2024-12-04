import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import Create from "./pages/create";
import Home from "./pages/home";

const getTodosFromLocalStorage = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo,
      ),
    );
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
