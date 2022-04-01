import React from 'react';
import { SiInstagram, SiGithub,SiLinkedin}  from "react-icons/si";

export default function Footer() {
  return (


<footer className="bg-dark text-center text-white mx-3 rounded">
<div className="container p-4 pb-0">
  <section className="mb-4 pb-4">

 
<a
                href="https://www.instagram.com/thatvneckboy"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className='icons mx-3'
              >
                <SiInstagram />
              </a>
<a
                href="https://www.linkedin.com/in/chris-stewart-79b283204/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className='icons mx-3 '
              >
                <SiLinkedin />
              </a>
   

    <a
                href="https://github.com/mcstewart76"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className='icons mx-3'
              >
                <SiGithub />
              </a>
  </section>

</div>


</footer>

  )
}
