import React from 'react';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import './Registor.css'

const Registor = ({onRouteChange}) => {

    return( 
        <Jumbotron id={"registorconfig"}>
            <Form>
                <h1>Registor</h1>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="last name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button 
                    onClick={()=>onRouteChange('signin')}
                    variant="secondary" size="lg" block>
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    )
}

export default Registor;