"use client";

import React, { useState, useEffect } from "react";
import TodoList from "@/components/TodoList/TodoList";
import Header from "@/components/Header/Header";
import classes from "./page.module.css";

export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className={classes.page}>
      <Header addTodo={addTodo} deleteAllTodos={deleteAllTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
