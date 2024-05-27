import React, { useState, useEffect } from 'react';

export const HamburgerMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            )}
            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
};

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <nav>
                <MenuItem href="#reviews" toggleMenu={toggleMenu}>Отзывы</MenuItem>
                <MenuItem href="#whoIsIt" toggleMenu={toggleMenu}>Преподаватель</MenuItem>
                <MenuItem href="#description" toggleMenu={toggleMenu}>Программа</MenuItem>
                <MenuItem href="#FAQ" toggleMenu={toggleMenu}>FAQ</MenuItem>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </nav>
        </div>
    );
};

const MenuItem = ({ href, children, toggleMenu }) => {
    return (
        <a href={href} className="menu-item" onClick={toggleMenu}>
            {children}
        </a>
    );
};
