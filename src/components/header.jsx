import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";



export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src='https://static.wixstatic.com/media/0db761_a6d7e7f5639044ad8bf1daa6d45f9897~mv2.png/v1/crop/x_398,y_0,w_4098,h_1875/fill/w_347,h_159,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SFS%20Logo%205_1_25%20(5000%20X%201875%20Px)%20-%201.png' alt="Logo" className="logo" />
        <img src='https://static.wixstatic.com/media/0db761_6a81b2d0eefb4bd18e38652df2eb85a3~mv2.png/v1/crop/x_416,y_1169,w_4069,h_2489/fill/w_264,h_161,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Use%20Me%20Free%20Truck.png' alt="Truck" className="truck" />
      </div>

      <nav className="nav">
        <NavLink to="/" end>
          HOME
        </NavLink>

       

        <NavLink to="/rent">
         RENT STORAGE
        </NavLink>

       <NavLink to="/contact">
          CONTACT US
        </NavLink>

      

       
      </nav>

      <div className="header-right">
        <button className="reserve-btn">
          RESERVE NOW →
        </button>
      </div>
    </header>
  );
}
