// Login.js

import React, { useState } from "react";
import userData from "../database/data.json";

import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("patient"); // По умолчанию выбран тип пользователя

  const handleLogin = () => {
    // Поиск пользователя в файле data.json
    const user = userData.find(
      (user) =>
        user.usertype === userType &&
        user.username === username &&
        user.password === password
    );

    if (user) {
      // Успешная авторизация, вызов функции onLogin
      onLogin(username, userType);
      localStorage.setItem("curusername", username);
      localStorage.setItem("curusertype", userType);
    } else {
      alert("Wrong data");
    }
  };

  return (
    <div className="loginpage">
      <div className="loginpage__header">Welcome to E-med system</div>
      <form className="loginform">
        <label className="login__username">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="login__userpass">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label className="login__usertype">
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="login__button">
          Login
        </button>
        <hr></hr>
        <div className="developers">
          Team members
          <div className="teamleader">U2010082 Oyatullo Gulomjonov 001</div>
          <div>U2010037 Albert Aslanov 001</div>
          <div>U2010040 Rasul Babajanov 001</div>
          <div>U2010055 Vladislav Chjen 001</div>
          <div>U2010080 Yakip Gobenov 001</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
