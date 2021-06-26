import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TOGGLE_AUTH } from "../reducers/types";
import { AuthContext } from "./../contexts/AuthContext";

const NavBar = () => {
  // Load theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // Load auth context
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const buttonText = isAuthenticated ? "Logout" : "Login";

  return (
    <div className="navbar" style={style}>
      <h1>My Hook app</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? "You are logged in " : ""}
          <button
            onClick={() => {
              dispatch({
                type: TOGGLE_AUTH,
              });
            }}
          >
            {buttonText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
