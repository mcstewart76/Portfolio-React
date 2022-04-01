import React  from 'react'
import ResumeCS from '../pdf/CSResume.pdf'

export default function Resume() {
    
    return (
        <div className="rounded container resumeCard" >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center resumeCard">
                <div className="col-md-7 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal" id="resDown">Download Resume Here!</h1>
                    <a className="btn btn-outline-secondary me-1" href={ResumeCS} download onclick={() => {document.getElementById("resDown").innerText = "Resume Downloaded!"}}>Download Resume</a>
                    <a className="btn btn-outline-secondary ms-1" href="https://github.com/mcstewart76">GitHub Profile</a>
                </div>
            </div>
        </div>
    )
}
