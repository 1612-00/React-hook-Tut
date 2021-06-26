import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../reducers/types";
import { ThemeContext } from "./../contexts/ThemeContext";
import { TodoContext } from "./../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  // Load theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // Load todo context
  const { dispatch } = useContext(TodoContext);

  // Xử lý thêm todo
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onTitleChange}
        value={title}
        type="text"
        name="title"
        placeholder="Enter a new todo ..."
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
