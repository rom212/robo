import React from 'react';
import Card from '../card/Card';
import Scroll from '../scroll/Scroll';

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
            <Scroll>
                {cardArray}
            </Scroll>
        </div>
    )
}

export default CardList;