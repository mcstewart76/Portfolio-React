import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import logoImage from "./images/CS.png"
export default function Navbar() {
  return (
      <>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark ps-4 pb-3 mt-3 mx-3 rounded navvy">
    <img class="logoImg" src={logoImage} ></img>
        <div class="pe-3">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto pe-4">
            <a class="nav-item nav-link" href="/about">About</a>
            <a class="nav-item nav-link" href="/works">My Works</a>
            <a class="nav-item nav-link" href="/resume" >Resume</a>
            <a class="nav-item nav-link" href="https://github.com/mcstewart76" >GitHub</a>
            <a class="nav-item nav-link" href="https://www.linkedin.com/in/chris-stewart-79b283204/">LinkedIn</a>

           
            </div>
        </div>
    </nav>
</div>
</>
  )
}
