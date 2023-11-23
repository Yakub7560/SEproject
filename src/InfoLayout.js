import { Outlet, NavLink } from "react-router-dom";
import './infolayout.css';

export default function InfoLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="infolayout__menu">
          
          <NavLink to="maininfo">Mainpage</NavLink>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="medicaldata">Medical Data</NavLink>
          <NavLink to="diagnosis">Diagnosis</NavLink>
          <NavLink to="treatment">Treatment</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}