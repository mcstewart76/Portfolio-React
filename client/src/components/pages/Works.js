import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export default function Works() {
    return (
        <>
            <div className=" py-3 p-md-5 m-md-3 bg-blue ">
                <div className="container rounded bg-darkblue d-flex flex-wrap justify-content-evenly py-2" >
                    {/* <div className=" my-4"> */}

                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem'  }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Only Devs" src="https://user-images.githubusercontent.com/90533949/163664612-dc87eaac-aea2-4717-ad0f-e8b2a9b715cb.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >OnlyDevs</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">React, Express, MongoDB, Node.js, Javascript, CSS</strong>
                                <Card.Text className="mx-2">
                                    A user based social media collaboration tool for developers to share their works. Uses an API to pull data from GitHub to display README's and other user data, ability to follow friends and see their latest repo data.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/OnlyDevs/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://only4devs.herokuapp.com/" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>

                    <div className="d-flex py-4 ">

                        <Card className=" m-3  h-md-250 bg-grey rounded " style={{ width: '24rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid " alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325216-b959890f-259f-4bfb-8245-79bba2533b6d.png" />
                            <Card.Body className="bg-grey pb-3 rounded">
                                <Card.Title className=" h3 text-start ms-4">BitFit</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Node, Express, SQL, Handlebars, HTML, CSS </strong>
                                <Card.Text className="mx-2">
                                    A webpage built to collect and display a user's NFT's. The generated
                                    images are stored in a google cloud database and are linked to our users. The application
                                    displays a user's collection of nft's.
                                </Card.Text>
                                <div className="">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText' href="https://github.com/mcstewart76/BitFit/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://bitfitted.herokuapp.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className="d-flex justify-content-center ">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Weather App" src="https://user-images.githubusercontent.com/90533949/160325473-448eba84-65ee-4741-acc8-70203292af51.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Git Homies</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, RESTful Api, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A user based social media collaboration tool for developers to share
                                    their works.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/GitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com/" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>

                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Note Taker App" src="https://user-images.githubusercontent.com/90533949/161200089-f8d33410-ff5d-47dd-822f-19de01579ee1.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Note Taker App</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A quick and convenient way to store notes online, great for multiple users to see.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/NoteTakerApp/blob/master/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://ms-notetakerapp.herokuapp.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem'  }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Department Management App" src="https://user-images.githubusercontent.com/90533949/161198122-8d717142-d9aa-4f18-bbd8-423bad416e60.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Department Management</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Node, SQL, Javascript, Sequelize</strong>
                                <Card.Text className="mx-2">
                                    A simple tool to help logistics of a department and its roles and employees.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/DepartmentManagement/blob/master/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://www.youtube.com/watch?v=Yk1AVvq6HGA" >User Video!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem'  }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Weather App" src="https://user-images.githubusercontent.com/90533949/170295419-12424840-18ea-4c3c-a586-5065bcc5f702.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Weather Dashboard</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, RESTful Api, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A simple weather app using openWeather api to fetch data to append to cards for whichever city you search for.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/WeatherApp/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://mcstewart76.github.io/WeatherApp/" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem'  }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="DayPlanner" src="https://github.com/mcstewart76/DayPlanner/raw/main/assets/images/DayPlan.JPG" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Day Planner</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A Daily Planner for the user to save their schedule for planning purposes
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/DayPlanner#readme" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://mcstewart76.github.io/DayPlanner/" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="d-flex justify-content-center">

                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '24rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow img-fluid" alt="Team Profile" src="https://user-images.githubusercontent.com/90533949/161198698-fc9fcc8b-4aef-4a96-b6cc-af3de0777ec6.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h2 text-start ms-4" >Team Profile Generator</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Node, Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">

                                    Prompts to ask for certain criteria for each:
                                    User can add Employees, including Manager, Engineer, Intern, then links for email and github get displayed for employees. Individual cards are then rendered to display their info.

                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/TeamProfileGenerator/blob/master/README.md" >Continue reading!</Button>
                                    <Button variant="primary" target="_blank" className='buttonWorks buttonText mx-1' href="https://www.youtube.com/watch?v=Yk1AVvq6HGA" >Video of usage!</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                </div>

                {/* </div> */}
            </div>
        </>
    )
}
