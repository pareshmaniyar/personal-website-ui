import React from 'react';
import ProgressBar from './progressBar';
import './coding.scss';

export default function Coding() {
    return (
        <section className="coding">
            <h1 className="heading">Coding skills</h1>
            <div className="skills">
                <ProgressBar title="HTML" percentage="99" color="#f2d31b"/>
                <ProgressBar title="CSS" percentage="90" color="#f63a0f"/>
                <ProgressBar title="Javascript" percentage="85" color="#f27011"/>
                <ProgressBar title="Java" percentage="70" color="#5382a1"/>
                <ProgressBar title="React" percentage="75" color="#61DBFB"/>
                <ProgressBar title="Vue" percentage="80" color="#86e01e"/>
                <ProgressBar title="Node" percentage="70" color="#3C873A"/>
                <ProgressBar title="MongoDB" percentage="70" color="#8A2BE2"/>
            </div>
        </section>
    )
}
