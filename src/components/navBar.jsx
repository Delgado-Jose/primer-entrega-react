import React from 'react';
import CartWidget from './cartWidget.jsx';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <h1>Mi e-Commerce</h1>
            </div>
            <ul className="navLinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
