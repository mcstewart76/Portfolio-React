import React, { useState }  from 'react'


export default function Resume() {
    const [resButton, setResButton] = useState([])
    return (
        <div class="rounded container resumeCard" >
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center resumeCard">
                <div class="col-md-7 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal" id="resDown">Download Resume Here!</h1>
                    <a class="btn btn-outline-secondary me-1" href="/pdf/resume.pdf" download onclick="resumeDownload()">Download Resume</a>
                    <a class="btn btn-outline-secondary ms-1" href="https://github.com/mcstewart76">GitHub Profile</a>
                </div>
            </div>
        </div>
    )
}
