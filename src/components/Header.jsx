import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    CHRISTLINESS
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="mobile-toggle-wrapper">
                        {/* Visible on mobile via CSS if needed, but here we keep it in nav for desktop or separate */}
                    </div>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <nav>
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <li><Link to="/" className={isActive('/')} onClick={closeMenu}>HOME</Link></li>
                        <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>ABOUT US</Link></li>
                        <li><Link to="/curriculum" className={isActive('/curriculum')} onClick={closeMenu}>CURRICULUM</Link></li>
                        <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>CONTACT</Link></li>
                        <li><ThemeToggle /></li>
                        <li><Link to="/contact" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem' }} onClick={closeMenu}>ADMISSIONS</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
