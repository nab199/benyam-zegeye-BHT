
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero-section" aria-labelledby="hero-heading">
            <div className="hero-content">
                <header>
                    <h1 id="hero-heading">
                        {t('hero.title_1')} <br /><span>{t('hero.title_2')}</span>
                    </h1>
                </header>
                <p className="tagline" role="doc-subtitle">{t('hero.tagline')}</p>
                <nav className="hero-buttons" aria-label="Main navigation">
                    <a href="#projects" className="btn btn-primary" aria-describedby="hero-heading">
                        {t('hero.view_projects')}
                    </a>
                    <a href="#contact" className="btn btn-outline" aria-describedby="hero-heading">
                        {t('hero.contact_me')}
                    </a>
                </nav>
            </div>
            <div className="hero-visual" role="img" aria-label="Hemodialysis technology visualization">
                <div className="tech-circle" aria-hidden="true"></div>
            </div>
        </section>
    );
};

export default Hero;
