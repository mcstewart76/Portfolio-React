import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <a className="nav-item nav-link" href="/About">About</a>
            <a className="nav-item nav-link" href="/Works">My Works</a>
            <a className="nav-item nav-link" href="/Resume" >Resume</a>
            <a className="nav-item nav-link" href="https://github.com/mcstewart76" >GitHub</a>
            <a className="nav-item nav-link" href="/Contact">Contact</a>

           
            </div>
        </div>
    </nav>
</div>
</>
  )
}
