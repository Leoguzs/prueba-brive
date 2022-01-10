import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/employees";
import "./App.css";
import Header from "./Header";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import EmployeeDetail from "./EmployeeDetail.js";
import EditEmployee from "./EditEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  //RetrieveEmployees
  const retrieveEmployees = async () => {
    const response = await api.get("/empleados");
    return response.data;
  };

  const addEmployeeHandler = async (employee) => {
    const request = {
      id: uuid(),
      ...employee,
    };

    const response = await api.post("/empleados", request);
    console.log(response);
    setEmployees([...employees, response.data]);
  };

  const updateEmployeeHandler = async (employee) => {
    const response = await api.put(`/empleados/${employee.id}`, employee);
    const { id, fullName, email, imageLink, phone } = response.data;
    setEmployees(
      employees.map((employee) => {
        return employee.id === id ? { ...response.data } : employee;
      })
    );
  };

  const removeEmployeeHandler = async (id) => {
    await api.delete(`/empleados/${id}`);
    const newEmployeeList = employees.filter((employee) => {
      return employee.id !== id;
    });

    setEmployees(newEmployeeList);
  };

  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmployees = await retrieveEmployees();
      if (allEmployees) setEmployees(allEmployees);
    };
    getAllEmployees();
  }, []);

  useEffect(() => {}, [employees]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <EmployeeList
                {...props}
                employees={employees}
                getEmployeeId={removeEmployeeHandler}
              />
            )}
          />
          <Route
            path="/agregar"
            render={(props) => (
              <AddEmployee {...props} addEmployeeHandler={addEmployeeHandler} />
            )}
          />

          <Route
            path="/editar"
            render={(props) => (
              <EditEmployee
                {...props}
                updateEmployeeHandler={updateEmployeeHandler}
              />
            )}
          />

          <Route path="/empleado/:id" component={EmployeeDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
