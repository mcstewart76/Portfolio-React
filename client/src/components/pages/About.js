import React from 'react'
import { Link } from 'react-router-dom'
import coffeeImage from "../images/CS.jpg"

export default function About() {
  return (
    <>
      {/* <div className="rounded flex justify-content-center  backgroundWhite mx-3 my-2 " > */}
        <div className=" mt-3 pt-2 rounded container-md container-sm  mx-auto text-center justify-content-center backgroundWhite"
         >
          <div className='pt-4'>
          <img className="rounded box-shadow-dreamy mb-2 img-fluid mx-auto coffeeImg" src={coffeeImage}
            alt='Me holding a coffee'></img>
          </div>
            <div className="col-md-7 pb-4 mx-auto mb-3 ">

              <h1 className="display-4 font-weight-normal">A little about me:</h1>
              <p className="lead font-weight-normal ">&#x1F44A; I enjoy coding, building, creating, and solving problems.
                <br /> 😄 Fullstack Web Developer (MERN) 
                <br /> 🛠 BS in Mechanical Engineering 
                <br /> &#8749; Minor in Applied Mathematics 
                <br /> &#9749; Coffee Fanatic
              </p>
               <Link to="/Works" className="btn btn-outline-secondary" >See what I'm working on here!</Link>

            </div>
        </div>
      {/* </div> */}
    </>
  )
}
