import React, { useContext } from "react";
import { DELETE_TODO } from "../reducers/types";
import { ThemeContext } from "./../contexts/ThemeContext";
import { TodoContext } from "./../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  // Load theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // Load todo context
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      onClick={() => {
        dispatch({
          type: DELETE_TODO,
          payload: {
            id: todo.id,
          },
        });
      }}
      style={style}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
