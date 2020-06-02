import React from 'react';
import './navbar.scss';
import {
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Blog() {
    return (
        <div className="navbar">
            <Link className="nav-button" to="/home">Home</Link>
            <Link className="nav-button" to="/home">Resume</Link>
            <Link className="nav-button" to="/blog">Blog</Link>
            <HashLink className="nav-button" to="/home#contact">Contact</HashLink>
        </div>
    )
}
