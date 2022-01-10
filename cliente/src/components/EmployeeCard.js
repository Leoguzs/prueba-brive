import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  const { id, fullName, email, imageLink, phone } = props.employee;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{
            pathname: `/empleado/${id}`,
            state: { employee: props.employee },
          }}
        >
          <section className="card-content">
            <div>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={imageLink}
                alt="employee-avatar"
                className="img-employee"
              />
            </div>
            <div className="data-card">
              <div className="">{fullName}</div>
              <div>{email}</div>
              <div className="item-description">{phone}</div>
            </div>
          </section>
        </Link>
        <img
          className="delete-icon"
          src="https://us.123rf.com/450wm/captainvector/captainvector1705/captainvector170502609/77500757-thrash-can.jpg?ver=6"
          alt="deleteEmployee"
          onClick={() => props.clickHandler(id)}
        />
        <Link to={{ pathname: `/editar`, state: { employee: props.employee } }}>
          <img
            className="edit-icon"
            src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
            alt="edit employee"
            alt="edit"
          />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
