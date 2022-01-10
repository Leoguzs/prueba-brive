import React from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

function EmployeeList(props) {
  console.log(props);
  const deleteEmployeeHandler = (id) => {
    props.getEmployeeId(id);
  };

  const renderEmployeeList = props.employees.map((employee) => {
    return (
      <div style={{ padding: "50px" }}>
        <EmployeeCard
          employee={employee}
          clickHandler={deleteEmployeeHandler}
          key={employee.id}
        />
      </div>
    );
  });
  return (
    <div className="main-content">
      <div className="header-btn">
        <h1 style={{ textAlign: "center" }}>
          Lista de Empleados
          <Link to="/agregar">
            <button
              className="add-btn"
              style={{
                marginLeft: "40px",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            >
              Agregar Empleado
            </button>
          </Link>
        </h1>
      </div>

      <div className="emp-list">{renderEmployeeList}</div>
    </div>
  ); //contenedor de la lista de empleados
}

export default EmployeeList;
