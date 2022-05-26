import React, { useState } from 'react'

export default function Contact() {

  const [emailState, emailed] = useState("Lets get in touch!");

  return (

    <div className="rounded container resumeCard " >
      <div className="position-relative justify-content-center p-3 p-md-5 m-md-3 resumeCard d-flex">
        <form action="https://public.herotofu.com/v1/86f6b8c0-dab3-11ec-8be6-4f814e368566" method="post">
          <h2>{emailState}</h2>
          <div className='mx-auto'>
          <div className='d-flex flex-column justify-content-start' >
            <div className='d-flex '>
              <label for="name"><p className='me-3'>Name</p></label>
              <input className='mb-3' name="Name" id="name" type="text" required />
            </div>
            <div className='d-flex '>
              <label for="email"><p className='me-3'>Email</p></label>
              <input className='mb-3 d-flex' name="Email" id="email" type="email" required />
            </div>
            <div className='d-flex '>
              <label for="name"><p className='me-3'>Message</p></label>
              <input className='mb-3 d-flex' name="Name" id="message" type="text" required />
            </div>
            <div className='text-center'>
              <input className="cntbtn" type="submit" value="Submit" onClick={() => emailed("Submitted, we will be in touch soon!")} />
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>

  );
}
