import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./infolayout.css";
import userData from "./components/database/data.json";

export default function InfoLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // For simplicity, this example uses the first user from the data.json file
    let curUsername = localStorage.getItem("curusername");
    let foundUser = userData.find((u) => u.username === curUsername);

    setUser(foundUser);
  }, []);

  return (
    <div className="root-layout">
      {user && (
        <div>
          {user.usertype === "doctor" ? (
            <header>
              <nav className="infolayout__menu">
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="addpatient">Add patient</NavLink>
                <NavLink to="maininfo">List of Patients</NavLink>
              </nav>
            </header>
          ) : (
            <header>
              <nav className="infolayout__menu">
                <NavLink to="maininfo">Mainpage</NavLink>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="medicaldata">Medical Data</NavLink>
                <NavLink to="diagnosis">Diagnosis</NavLink>
                <NavLink to="treatment">Treatment</NavLink>
              </nav>
            </header>
          )}
        </div>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  );
}
