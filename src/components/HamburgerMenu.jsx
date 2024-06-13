import React, {useState, useEffect} from 'react';
import {FaTelegram, FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {TelegramWidget} from "./TelegramWidget.jsx";

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
            <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>
            {!isOpen && <TelegramWidget />}

        </>
    );
};

const Menu = ({isOpen, toggleMenu}) => {
    const handleMenuItemClick = (e, href) => {
        e.preventDefault();
        toggleMenu();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            const yOffset = -10; // Задаем отступ в пикселях
            const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: yPosition, behavior: 'smooth'});
        }
    };

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <nav>
                <div>
                    <MenuItem href="#reviews" onClick={handleMenuItemClick}>Отзывы</MenuItem>
                    <MenuItem href="#whoIsIt" onClick={handleMenuItemClick}>Преподаватель</MenuItem>
                    <MenuItem href="#description" onClick={handleMenuItemClick}>Программа</MenuItem>
                    <MenuItem href="#FAQ" onClick={handleMenuItemClick}>FAQ</MenuItem>
                    <MenuItem href="#header" onClick={handleMenuItemClick}>Наверх</MenuItem>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/marknikolaev_" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
                    <a href="https://t.me/+jbYNkBI4mhIwYWE6" target="_blank" rel="noopener noreferrer"><FaTelegram/></a>
                    <a href="https://www.youtube.com/@marknikolaeff" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
                </div>
            </nav>
        </div>
    );
};

const MenuItem = ({href, children, onClick}) => {
    return (
        <a href={href} className="menu-item" onClick={(e) => onClick(e, href)}>
            {children}
        </a>
    );
};
