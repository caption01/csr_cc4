import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './LandingPage.css';

const LandingPage = ({onRouteChange}) => {

    return( 
        <Jumbotron id={"landingconfig"} >
            <h1>Welcome</h1>
            <p>CodeCamp 4 Final ProJect</p>
            <p>
                <Button onClick={() => onRouteChange('signin')} variant="light">Entrance</Button>
            </p>
        </Jumbotron>
    )
}

export default LandingPage;