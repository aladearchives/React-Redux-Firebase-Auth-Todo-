import React from 'react';
import {Link} from 'react-router-dom';

const NavItems = () => {
    return (
            <>
            <Link to="/signin" className="navbar-link">
                Sign Out
            </Link>
            <Link to="/signup" className="navbar-link">
                Sign Up
            </Link>
            <Link to="/signin" className="navbar-link">
                Sign In
            </Link>
            </>
    )
}
export default NavItems;