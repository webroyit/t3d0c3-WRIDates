import React, { useState } from 'react';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Kevin',
            url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80'
        },
        {
            name: 'Lauren',
            url: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ]);       // => 'const people = []'

    // (Push to an array in React)
    // ... is called spread operator that keep the copy of people and add new value to it
    // setPeople([...people, "Kevin", "Lauren"]); => people.push('Kevin', 'Lauren)

    return (
        <div>
            {/* preventSwipe takes in the directions and prevent the user from swiping to that directions */}
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}

export default TinderCards;
