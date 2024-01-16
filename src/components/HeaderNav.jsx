import React, { useState } from 'react';
import '../styles/HeaderNav.css';

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={isMenuOpen ? 'expanded' : ''}>
            <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="hamburger-menu-content" tabIndex="-1">
                    <span className='sr-only'>Menu</span>
                    <span className='bar' id="bar1"></span>
                    <span className='bar' id="bar2"></span>
                    <span className='bar' id="bar3"></span>
                </span>
                {/* end hamburger-menu-content */}
            </button>
            <a className={`logo ${isMenuOpen ? 'hide' : ''}`} href="#0">
                Logo.svg
            </a>
            <nav id='main-navigation' className={isMenuOpen ? 'show' : ''}>
                <ul>
                    <li className='main-navigation-li'><a className='main-navigation-a' href="#0">News</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Policy</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Business</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Health</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Opinion</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Events</a></li>
                    <li className="main-navigation-li"><a className="main-navigation-a" href="#0">Jobs</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;