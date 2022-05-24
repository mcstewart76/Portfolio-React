import React from 'react'

export default function Contact() {

  return (

    <div className="rounded container resumeCard " >
      <div className="position-relative  p-3 p-md-5 m-md-3 text-center resumeCard d-flex">
        <form action="https://public.herotofu.com/v1/86f6b8c0-dab3-11ec-8be6-4f814e368566" method="post">
          <div>
            <label for="name"><p>Name</p></label>
            <input name="Name" id="name" type="text" required />
          </div>
          <div>
            <label for="email"><p>Email</p></label>
            <input name="Email" id="email" type="email" required />
          </div>
          <div>
            <label for="name"><p>Message</p></label>
            <input name="Name" id="message" type="text" required />
          </div>
          <div>
            <input className="cntbtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>

  );
}
