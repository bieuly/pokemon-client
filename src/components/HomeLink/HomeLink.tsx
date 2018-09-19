import * as React from 'react';
import { Link } from 'react-router-dom'
import './HomeLinkStyles.css'

const HomeLink = () => (
    <div>
        <Link to="/">
            <button className="home-link">Home</button>
        </Link>
    </div>
)

export default HomeLink;