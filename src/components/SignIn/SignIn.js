import React, {Component} from 'react';
import './SignIn.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const db = [
    {
        firstname: 'nutchapon',
        lastname: 'hanouypornlert',
        email: 'admin@gmail.com',
        password: 'adminpass',
        description: 'blockchain dev. in future'
    },
    {
        firstname: 'jeeja',
        lastname: 'jubjub',
        email: 'jeeja@gmail.com',
        password: 'jeejapass',
        description: 'cook in resterrant'
    },
    {
        firstname: 'meeya',
        lastname: 'saraha',
        email: 'meeya@gmail.com',
        password: 'meeyapass',
        description: 'super model girl in thailand'
    }
]

class SignIn extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    onEmailChange = (email) => {
        this.setState({username: email.target.value})
    }

    onPasswordChange = (password) => {
        this.setState({password: password.target.value})
    }

    onLogIn = () => {
        if (this.state.username === db[0].email && this.state.password === db[0].password ) {
            this.props.onRouteChange('main')
            return console.log('Login success')
        } else {
            this.props.onRouteChange('home')
            return console.log('not found id/password')
        } 
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
