import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './LandingPage.css';

const LandingPage = () => {

    return( 
        <Jumbotron id={"landingconfig"} >
            <h1>Welcome</h1>
            <p>CodeCamp4 Final ProJect</p>
            <p>
                <Button variant="light">Entrance</Button>
            </p>
        </Jumbotron>
    )
}

export default LandingPage;