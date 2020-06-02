import React from 'react';
import './progressBar.scss';

export default function ProgressBar(props) {
    let inlineStyle = {
        width: props.percentage + '%',
        backgroundColor: props.color
    }
    return (
        <div className="progress-bar-container">
            <div className="title">{props.title}</div>
            <div className="progress">
                <div className="progress-bar" style={inlineStyle}></div>
            </div>
        </div>
    )
}
