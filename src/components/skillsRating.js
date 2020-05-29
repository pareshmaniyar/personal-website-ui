import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function SkillsRating(props) {
    let number = props.number;
    let stars = [];
    for (let i = 0; i < number; i++) {
        stars.push(
            <FontAwesomeIcon icon={faStar} color="orange" key={i}/>
        );
    }
    for (let i = number; i < 5; i++) {
        stars.push(
            <FontAwesomeIcon icon={faStar} color="black" key={i}/>
        )
    }
    return (
        <div className="skill-rating">
            {stars}
        </div>
    )
}
