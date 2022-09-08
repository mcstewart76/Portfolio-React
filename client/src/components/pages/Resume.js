import React, {useState}  from 'react'



export default function Resume() {

   const [downloadState, downloaded] = useState("View Resume Here!");

    
    
    return (
        <div className='m-3 p-3 p-md-5 m-md-3 p-sm-5 m-sm-3'>
            <div className=" mx-auto container-md container-sm text-center  rounded resumeCard">
                <div className="col-md-7 p-lg-5 mx-auto py-5 ">
                    <h1 className="display-4 font-weight-normal py-4" id="resDown">{downloadState}</h1>
                    {/* <a className="btn btn-outline-secondary me-1" href="../pdf/ChrisStewartResume.pdf" download
                     onClick={() => downloaded("Resume Downloaded!")}>
                         Download Resume</a> */}
                    <a className="btn btn-outline-secondary mx-1 my-2" href="https://github.com/mcstewart76">GitHub Profile</a>
                    <a className="btn btn-outline-secondary ms-1" target="_blank" rel="noreferrer" href="https://raw.githubusercontent.com/mcstewart76/Portfolio-React/main/client/src/components/pdf/ChrisStewartResume.pdf">View Resume</a>
                </div>
            </div>
        </div>
    )
    
}
