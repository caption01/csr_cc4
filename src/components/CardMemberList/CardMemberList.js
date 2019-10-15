import React from 'react';
import CardMember from '../CardMember/CardMember.js'
import 'bootstrap/dist/css/bootstrap.min.css';



const CardMemberList = () => {

    const member = [
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

    const cardComponent = member.map((key, i) => {
        return(
            <CardMember 
                key={i}
                name={member[i].firstname}
                description={member[i].description}
            />
        )
    }) 

    return (
        <div style={{'textAlign': 'center'}}>
            {cardComponent}
        </div>
        
    )
}

export default CardMemberList

