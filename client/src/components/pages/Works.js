import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default function Works() {
    return (

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-blue ">
            <div class="container rounded bg-darkblue py-3" >
                <div class="row mb-2 m-3 mt-4">
                    <div class="col-md-4 ">
                        <Card class="flex-md-row m-3 box-shadow h-md-250 bg-grey " style={{ width: '25rem' }}>
                            <Card.Img variant="top" class="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325216-b959890f-259f-4bfb-8245-79bba2533b6d.png" />
                            <Card.Body class="bg-grey">
                                <Card.Title class=" h3 text-start ms-4">BitFit</Card.Title>
                                <strong class="d-inline-block mb-1 cardText">Node, Express, SQL, Handlebars, HTML, CSS </strong>
                                <Card.Text class="mx-2">
                                    A webpage built to collect and display a user's NFT's. The generated
                                    images are stored in a google cloud database and are linked to our users. The application
                                    displays a user's collection of nft's and mints them to the blockchain.
                                </Card.Text>
                                <div class="mb-3">
                                    <Button variant="primary" className='buttonWorks buttonText' href="https://github.com/mcstewart76/BitFit/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://bitfitted.herokuapp.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-4">
                        <Card class="flex-md-row m-3 box-shadow h-md-250 bg-grey " style={{ width: '25rem' }}>
                            <Card.Img variant="top" class="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325216-b959890f-259f-4bfb-8245-79bba2533b6d.png" />
                            <Card.Body class="bg-grey">
                                <Card.Title class=" h3 text-start ms-4" >GitHomies</Card.Title>
                                <strong class="d-inline-block mb-1 cardText">Javascript, HTML, CSS</strong>
                                <Card.Text class="mx-2">
                                    A user based social media collaboration tool for developers to share
                                    their works.
                                </Card.Text>
                                <div class="mb-3 mx-1 ">
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/gitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <Card class="flex-md-row m-3 box-shadow h-md-250 bg-grey " style={{ width: '25rem' }}>
                            <Card.Img variant="top" class="rounded box-dreamy-shadow imgShrink" alt="Buy and Generate NFT" src="https://user-images.githubusercontent.com/90533949/160325216-b959890f-259f-4bfb-8245-79bba2533b6d.png" />
                            <Card.Body class="bg-grey">
                                <Card.Title class=" h3 text-start ms-4" >Department Management</Card.Title>
                                <strong class="d-inline-block mb-1 cardText">Node, SQL, Javascript, Sequelize</strong>
                                <Card.Text class="mx-2">
                                    A simple tool to help logistics of a department and its roles and employees.
                                </Card.Text>
                                <div class="mb-3 mx-1 ">
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://github.com/mcstewart76/gitHomies/blob/main/README.md" >Continue reading!</Button>
                                    <Button variant="primary" className='buttonWorks buttonText mx-1' href="https://gh.githomies.com" >Live Deployment!</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    )
}
