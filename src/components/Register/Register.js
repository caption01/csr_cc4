import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import './Register.css'


class Register extends Component {


    onFirstNameChange = (event) => {
        this.setState({firstname: event.target.value})
    }
    
    onLastNameChange = (event) => {
        this.setState({lastname: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    
    onDesChange = (event) => {
        this.setState({description: event.target.value})
    }
    
    onRegistorSubmit = () => {
      
        if (this.state.email.length === 0 || this.state.password.length === 0
            || this.state.firstname.length === 0 || this.state.lastname.length === 0
            || this.state.description.length === 0
            ) {
            alert('info must fullfill')
        } else {
            fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email:  this.state.email,
                password: this.state.password,
                description: this.state.description
            })
        })
        this.props.onRouteChange('signin')
        }
    }



    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            description: '',
        }
    }

    render(){
        return( 
            <Jumbotron id={"registerconfig"}>
                <Form>
                    <h1>Register</h1>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control onChange={this.onFirstNameChange} type="text" placeholder="first name" />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control onChange={this.onLastNameChange} type="text" placeholder="last name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.onEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>
    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEducate">
                            <Form.Label>Educate</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option>Choose</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSkill1">
                            <Form.Label>Skill 1</Form.Label>
                            <Form.Control type="text" placeholder="major" />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridSkill2">
                            <Form.Label>Skill 2</Form.Label>
                            <Form.Control type="text" placeholder="minor" />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridSkill3">
                            <Form.Label>Skill 3</Form.Label>
                            <Form.Control type="text" placeholder="sub-minor" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridTextArea">
                        <Form.Label>Self Description</Form.Label>
                        <Form.Control onChange={this.onDesChange} as="textarea" rows="3" />
                    </Form.Group>
                    <Button 
                        onClick={()=>this.onRegistorSubmit()}
                        variant="secondary" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
    
}

export default Register;