import React from 'react';
import Card from '../card/Card';

const CardList = ({robots, search}) => {
    const cardArray = robots.map((user,i)=>{

        if (robots[i].name.toLowerCase().includes(search.toLowerCase())){
            return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        } else {
            return null;
        }

    });
    return(
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;