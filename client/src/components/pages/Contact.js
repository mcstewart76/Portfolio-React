import React, {useState} from 'react'

export default function Contact() {
  
    const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <>
    

<div className="rounded container resumeCard " >
<div className="position-relative  p-3 p-md-5 m-md-3 text-center resumeCard d-flex">
    <div className="col-md-7 p-lg-5 mx-auto my-5">
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
        <div className='d-flex justify-content-start flex-wrap'>
      <div className=''>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className='ms-3 mb-3' required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className='ms-3 ' required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" className='ms-3 mt-3 ' required />
      </div>
      <div>
      <button type="submit" className='btn btn-outline-secondary'>{status}</button>
      </div>
   </div>
    </form>
         </div>
</div>
</div>
</>
  );
}
