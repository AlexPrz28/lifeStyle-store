import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["apellidos"] = "";
          fields["cuenta"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Gracias por tu registro! Se enviara un correo de verificacion");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      if (!fields["nombres"]) {
        formIsValid = false;
        errors["nombres"] = "Por favor ingresa un nombre";
      }

      if (typeof fields["nombres"] !== "undefined") {
        if (!fields["nombres"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["nombres"] = "Usa letras solamente";
        }
      }

      if (!fields["apellidos"]) {
        formIsValid = false;
        errors["apellidos"] = "Por favor ingresa tus apellidos";
      }

      if (typeof fields["apellidos"] !== "undefined") {
        if (!fields["apellidos"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["apellidos"] = "Usa letras solamente";
        }
      }
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Por favor ingresa un username";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "Usa letras solamente";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "Por favor ingresa tu correo electronico";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "Ingresa un correo valido";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "Por favor ingresa tu numero telefonico";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "Ingresa un numero valido";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Por favor ingresa tu contraseña";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "Ingresa una contraseña segura";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registro</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Nombre(s)</label>
        <input type="text" name="nombres" value={this.state.fields.nombres} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.nombres}</div>
        <label>Apellido(s)</label>
        <input type="text" name="apellidos" value={this.state.fields.apellidos} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.apellidos}</div>
        <label>Username</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>E-Mail:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Numer telefonico:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Contraseña</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Registrarse!"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;

