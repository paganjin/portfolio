import React from 'react';

const Header = () => {
    <header class="nav">
        <div class="nav__left">
            <div class="logo">
                <span class="logo__highlight">Tifa</span>
                Lockhart
            </div>
        </div>
        <div class="nav__right">
            <div class="navbar">
                <a class="navbar__item navbar__item--active" href="HOME">Home</a>
                <a class="navbar__item" href="RESUME">Resume</a>
                <a class="navbar__item" href="SERVICES">Services</a>
                <a class="navbar__item" href="BLOG">Blog</a>
                <a class="navbar__item" href="CONTACT">Contact</a>
            </div>
        </div>
    </header>
};

export default Header;