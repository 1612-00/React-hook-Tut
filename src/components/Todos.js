import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "./../contexts/AuthContext";

const Todos = () => {
  // Load todo context
  const { todos } = useContext(TodoContext);

  // Load auth context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
