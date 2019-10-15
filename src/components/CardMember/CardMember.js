import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardMember.css'


const CardMember = ({name, description}) => {

    return (
        <div className={'divcard'}>
        <Card className={'cardconfig'}>
            <Card.Img variant="top" src="http://www.geekchamp.com/upload/SymbolIcons/Fun/1f47b-Ghost.png" className={'cardimg'} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
        
    )

}

export default CardMember

