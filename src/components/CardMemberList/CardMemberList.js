import React from 'react';
import CardMember from '../CardMember/CardMember.js'
import 'bootstrap/dist/css/bootstrap.min.css';




const CardMemberList = ({users}) => {

    // const db = [
    //     {
    //         firstname: 'admin',
    //         description: 'make me gratest'
    //     },
    //     {
    //         firstname: 'admin',
    //         description: 'make me gratest'
    //     }
    // ]

    const cardComponent = users.map((key, i) => {
        return(
            <CardMember 
                key={i}
                name={users[i].firstname}
                description={users[i].description}
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

