import React from 'react';
import './cardForBlog.scss';

export default function Blog(props) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={props.img} className="card-image"/>
            </div>
            <div className="card-heading">{props.heading}</div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    )
}
