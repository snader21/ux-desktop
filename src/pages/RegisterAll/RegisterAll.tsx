import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function RegisterAll() {
  const navigate = useNavigate();
  return (
    <div className="registro-container">
      <div className="logo-container">
        <img src="src/assets/logo.svg" alt="Logox" className="logo" />
      </div>
      <h2 className="titulo">Registro</h2>
      <div className="botones-container">
        <button className="boton google">
          <i className="fab fa-google"></i> GOOGLE
        </button>
        <button className="boton microsoft">
          <i className="fab fa-microsoft"></i> MICROSOFT
        </button>
        <button className="boton meta">
          <i className="fab fa-meta"></i> META
        </button>
        <button
          className="boton correo"
          onClick={() => {
            navigate("/register");
          }}
        >
          <i className="fas fa-envelope"></i> CORREO
        </button>
      </div>
    </div>
  );
}

export default RegisterAll;
