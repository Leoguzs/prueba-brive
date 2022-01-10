import React from "react";

class EditEmployee extends React.Component {
  constructor(props) {
    super(props);
    const { id, email, phone, imageLink, fullName } =
      props.location.state.employee;
    this.state = {
      id,
      fullName,
      phone,
      imageLink,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.fullName === "" ||
      this.state.email === "" ||
      this.state.imageLink === "" ||
      this.state.phone === ""
    ) {
      alert("Rellenar todos los campos es obligatorio");
      return;
    }
    this.props.updateEmployeeHandler(this.state);
    this.setState({
      fullName: "",
      phone: "",
      imageLink: "",
      email: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="add-employee">
        <h2>Editar</h2>
        <form action="" className="emp-form" onSubmit={this.update}>
          <div className="field">
            <label htmlFor="">Nombre Completo</label> <br />
            <input
              type="text"
              name="fullName"
              id=""
              placeholder="Nombre Completo"
              value={this.state.fullName}
              onChange={(e) => this.setState({ fullName: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">E-mail</label> <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="E-mail"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">Numero de Celular</label> <br />
            <input
              type="number"
              name="phoneNumber"
              id=""
              placeholder="Numero de Celular"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">Link de imagen</label> <br />
            <input
              type="text"
              name="imageLink"
              id=""
              placeholder="Link de imagen"
              value={this.state.imageLink}
              onChange={(e) => this.setState({ imageLink: e.target.value })}
            />
          </div>
          <button className="btn-edit">
            <p className="btn-text">Editar</p>
          </button>
        </form>
      </div>
    );
  }
}

export default EditEmployee;
