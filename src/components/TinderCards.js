import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";

import database from '../firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);       // => 'const people = []'

    // (Push to an array in React)
    // ... is called spread operator that keep the copy of people and add new value to it
    // setPeople([...people, "Kevin", "Lauren"]); => people.push('Kevin', 'Lauren)

    // Piece of code which runs based on a condition
    useEffect(() => {
        // Get all people from firebase database
        // onSnapshot() is a listener
        database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()));
        });

        // This will run once when component loads if the array is empty
    }, [])

    return (
        <div>
            <div className="tinderCards__cardContrainer">
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
        </div>
    );
}

export default TinderCards;
