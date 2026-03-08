
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Biniyam Zegeye {t('footer.rights')}</p>
                <div className="social-links">
                    <a href="#" className="btn btn-outline btn-sm">LinkedIn</a>
                    <a href="#" className="btn btn-outline btn-sm">Twitter</a>
                    <a href="https://t.me/Bini123467" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Telegram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
