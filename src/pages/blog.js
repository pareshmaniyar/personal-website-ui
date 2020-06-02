import React from 'react';
import img from '../imgs/books.jpeg';
import './blog.scss';

export default function Blog() {
    return (
        <div className="blog">
            <div className="card">
                <div className="card-img-container">
                    <img src={img} className="card-image"/>
                </div>
                <div className="card-heading">Books</div>
                <div className="card-content">
                    Love thy books! I never liked reading when I was a child. 
                    Now, It is a big part of my time. Reason being, It is worth spending time.
                    I have known so much about the journey of other people and how to deal with almost anything
                    from tying knots to apocalypse.
                </div>
            </div>
        </div>
    )
}
