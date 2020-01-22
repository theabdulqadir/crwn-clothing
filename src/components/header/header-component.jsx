import React from 'react';

import {Link} from 'react-router-dom';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <header className="header">
        <Link classname="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div classname="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
        </div>
    </header>
) 

export default Header;