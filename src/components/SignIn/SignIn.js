import React, {Component} from 'react';
import './SignIn.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SignIn extends Component{



  render(){
    return (
        <Jumbotron id={"signinconfig"} >
            <Form id={"left"} >
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-secondary" size='lg' >Sign In</Button>
            </Form>
            <div>
                <Form id={"right"}> 
                    <Button variant="outline-secondary" size='lg' > 
                    Registor
                    </Button>
                </Form>
            </div>
    </Jumbotron>
    );
  }
}

export default SignIn;
