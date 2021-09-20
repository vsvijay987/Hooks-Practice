import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Name
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/counter">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/reducer">
              Reducer
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}
