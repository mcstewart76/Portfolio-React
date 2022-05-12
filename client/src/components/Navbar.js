import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import logoImage from "./images/CS.png"
export default function Navbar() {
  return (
      <>
<div>
    <nav className="navbar navbar-expand-lg navbar-dark ps-4 pb-3 mt-3 mx-3 rounded navvy">
    <img className="logoImg" alt="Chris Stewart"src={logoImage} ></img>
        <div className="pe-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto pe-4">
            <Link className="nav-item nav-link" to="/About">About</Link>
            <Link className="nav-item nav-link" to="/Works">My Works</Link>
            <Link className="nav-item nav-link" to="/Resume" >Resume</Link>
            <a className="nav-item nav-link" target="_blank" href="https://github.com/mcstewart76" >GitHub</a>
            <Link className="nav-item nav-link" to="/Contact">Contact</Link>

           
            </div>
        </div>
    </nav>
</div>
</>
  )
}
