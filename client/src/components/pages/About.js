import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="rounded container backgroundWhite" >
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center justify-content-center backgroundWhite"
         >

          <img className="rounded box-shadow-dreamy mb-2 mx-auto" src="https://avatars.githubusercontent.com/u/90533949?v=4"
            alt='Me holding a coffee'></img>

            <div className="col-md-7 p-lg-5 mx-auto mb-3">

              <h1 className="display-4 font-weight-normal">A little about me:</h1>
              <p className="lead font-weight-normal ">&#x1F44A; I like to tinker and work with my hands.
                <br /> 😄 Fullstack Web Developer (MERN) 
                <br /> 🛠 BS in Mechanical Engineering 
                <br /> &#8749; Minor in Applied Mathematics 
                <br /> &#9749; Coffee Fanatic
              </p>
               <Link to="/Works" className="btn btn-outline-secondary" >See what I'm working on here!</Link>

            </div>
        </div>
      </div>
    </>
  )
}
