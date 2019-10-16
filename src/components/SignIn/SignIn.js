import React, {Component} from 'react';
import './SignIn.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component{

    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (email) => {
        this.setState({email: email.target.value})
    }

    onPasswordChange = (password) => {
        this.setState({password: password.target.value})
    }

    onLogIn = () => {

        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(data => data.json())
        .then(data => console.log(data))

        this.props.onRouteChange('main')
    
    }

  render(){
    return (
        <Jumbotron id={"signinconfig"} >
            <Form id={"left"} >
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button 
                    onClick={() => this.onLogIn()}
                    variant="outline-secondary" size='lg' >
                    Sign In
                </Button>
            </Form>
            <div>
                <Form id={"right"}> 
                    <Button onClick={() => this.props.onRouteChange('registor')} variant="outline-secondary" size='lg' > 
                    Registor
                    </Button>
                </Form>
            </div>
    </Jumbotron>
    );
  }
}

export default SignIn;
