
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#hero" className="logo" aria-label="Bini Hemodialysis Technology - Home">
          <span>Biniyam Zegeye</span>
        </a>
        <button 
          className={`menu-icon ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul id="nav-menu" className={`nav-links ${isOpen ? 'active' : ''}`} role="menubar">
          <li role="none">
            <a href="#hero" onClick={() => setIsOpen(false)} role="menuitem">
              {t('navbar.home')}
            </a>
          </li>
          <li role="none">
            <a href="#about" onClick={() => setIsOpen(false)} role="menuitem">
              {t('navbar.about')}
            </a>
          </li>
          <li role="none">
            <a href="#skills" onClick={() => setIsOpen(false)} role="menuitem">
              {t('navbar.skills')}
            </a>
          </li>
          <li role="none">
            <a href="#projects" onClick={() => setIsOpen(false)} role="menuitem">
              {t('navbar.projects')}
            </a>
          </li>
          <li role="none">
            <a href="#contact" onClick={() => setIsOpen(false)} role="menuitem">
              {t('navbar.contact')}
            </a>
          </li>
          <li role="none">
            <button 
              onClick={toggleLanguage} 
              className="lang-btn"
              aria-label={`Switch language. Current language: ${i18n.language === 'en' ? 'English' : 'Amharic'}`}
            >
              {i18n.language === 'en' ? 'AM' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
