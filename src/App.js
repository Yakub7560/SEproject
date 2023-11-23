// App.js

import React, { useState } from "react";
import Login from "./components/login/login";
import MainInfo from "./components/main/main";

import "./App.css";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="mainblock">
      {loggedIn ? (
        <div>
          <div className="mainblock__header">
            <div className="header__logo">Emed System</div>
            <div className="userinfo">
              <div className="user__name">User: {username}</div>
              <button className="logout" onClick={handleLogout}>
                LogOut
              </button>
            </div>
          </div>
          <MainInfo />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
