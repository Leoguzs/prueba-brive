import React from "react";
import { Link } from "react-router-dom";

const EmployeeDetail = (props) => {
  const { fullName, email, phone, imageLink } = props.location.state.employee;
  return (
    <div className="main">
      <div
        className="ui card centered"
        style={{ width: "300px", marginTop: "20px" }}
      >
        <div className="image">
          <img src={imageLink} alt="user" />
        </div>
        <div
          className="content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="header">{fullName}</div>
          <div className="description">{email}</div>
          <div className="description">{phone}</div>
        </div>
      </div>
      <div className="bt-details-container">
        <Link to="/">
          <button className="btn-details">Regresar a Lista de empleados</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetail;
