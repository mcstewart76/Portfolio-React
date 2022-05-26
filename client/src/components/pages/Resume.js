import React, {useState}  from 'react'



export default function Resume() {

   const [downloadState, downloaded] = useState("Download Resume Here!");

    
    
    return (
        <div className="rounded container resumeCard" >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center resumeCard">
                <div className="col-md-7 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal" id="resDown">{downloadState}</h1>
                    <a className="btn btn-outline-secondary me-1" href="../pdf/ChrisStewartResume.pdf" download
                     onClick={() => downloaded("Resume Downloaded!")}>
                         Download Resume</a>
                    <a className="btn btn-outline-secondary mx-1" href="https://github.com/mcstewart76">GitHub Profile</a>
                    <a className="btn btn-outline-secondary ms-1" target="_blank" rel="noreferrer" href="https://raw.githubusercontent.com/mcstewart76/Portfolio-React/main/client/src/components/pdf/ChrisStewartResume.pdf">View Resume</a>
                </div>
            </div>
        </div>
    )
    
}
