import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export default function Works() {
    return (
<>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-blue ">
            <div className="container rounded bg-darkblue d-flex flex-wrap justify-content-evenly" >
                {/* <div className=" my-4"> */}
                    <div className="d-flex py-4 ">
                    
                        <Card className=" m-3  h-md-250 bg-grey rounded " style={{ width: '25rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow imgShrink " alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325216-b959890f-259f-4bfb-8245-79bba2533b6d.png" />
                            <Card.Body className="bg-grey pb-3 rounded">
                                <Card.Title className=" h3 text-start ms-4">BitFit</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Node, Express, SQL, Handlebars, HTML, CSS </strong>
                                <Card.Text className="mx-2">
                                    A webpage built to collect and display a user's NFT's. The generated
                                    images are stored in a google cloud database and are linked to our users. The application
                                    displays a user's collection of nft's and mints them to the blockchain.
                                </Card.Text>
                                <div className="">
                                    <Button variant="primary" className='buttonWorks buttonText' href="https://github.com/mcstewart76/BitFit/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://bitfitted.herokuapp.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    
                    </div>

                    <div className="d-flex justify-content-center">
                        
                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '25rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325473-448eba84-65ee-4741-acc8-70203292af51.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h3 text-start ms-4" >GitHomies</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A user based social media collaboration tool for developers to share
                                    their works.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/gitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        

                    </div>
                    <div className="d-flex justify-content-center">
                        
                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '25rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325473-448eba84-65ee-4741-acc8-70203292af51.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h3 text-start ms-4" >GitHomies</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A user based social media collaboration tool for developers to share
                                    their works.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/gitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        

                    </div>
                    <div className="d-flex justify-content-center">
                        
                        <Card className=" m-3 h-md-250 bg-grey rounded" style={{ width: '25rem' }}>
                            <Card.Img variant="top" className="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325473-448eba84-65ee-4741-acc8-70203292af51.png" />
                            <Card.Body className="bg-grey pb-1 rounded">
                                <Card.Title className=" h3 text-start ms-4" >GitHomies</Card.Title>
                                <strong className="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text className="mx-2">
                                    A user based social media collaboration tool for developers to share
                                    their works.
                                </Card.Text>
                                <div className="mb-3 mx-1 ">
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/gitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com" >Live Deployment!</Button>
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
