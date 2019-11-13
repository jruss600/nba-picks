import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <h2 style={{padding: '10px', textDecoration: 'underline'}}>NBA Picks</h2>
            <h5>
                <Link to="/">Over/Unders</Link> | <Link to="/playoff-picks">Playoff Picks</Link>
            </h5>
            <hr />
        </div>
    )
}

export default Header;