import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3"> Error 404 </h1>
            <h1>Pagina no encontrada</h1>
            <h3>
              El url ingresado{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              no existe
            </h3>
          </div>
        </div>
      </div>
    );
  }
}