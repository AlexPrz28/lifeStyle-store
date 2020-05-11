import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import leaf from "../hoja.svg";
import styled from "styled-components";
import { ButtonCointainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar nabvar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          <img src={leaf} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/items" className="nav-link">
              Artículos
            </Link>
          </li>
        </ul>

        <Link to="/sell" className="ml-auto">
              <div class="text-right">
                <button type="button" class="btn btn-primary">
                  Registrate
                </button>
              </div>
            </Link>

            <br></br>

        <Link to="/cart" className="ml-right">
          <ButtonCointainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Carrito
          </ButtonCointainer>
        </Link>

      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
