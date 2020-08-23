import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid nav1">
        <div class="navbar-header">
          <a class="navbar-brand display-3 " href="#">
            Password Generator
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li className="link">
            <a href="https://www.linkedin.com/in/tarun-459a68171/" target="_blank">Tarun</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
