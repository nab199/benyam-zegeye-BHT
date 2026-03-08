
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">{t('contact.title')}</h2>
                <div className="contact-content">
                    <p>{t('contact.subtitle')}</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder={t('contact.name_placeholder')} required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder={t('contact.email_placeholder')} required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder={t('contact.message_placeholder')} rows="5" required></textarea>
                        </div>
                        <div style={{ textAlign: 'center' }}> <button type="submit" className="btn btn-primary">{t('contact.send_message')}</button></div>
                    </form>
                    <div className="contact-info">
                        <p>Phone: +251 940 190 965</p>
                        <p>Email: biniyamzegeye@gmail.com</p>
                        <p>Location: {t('contact.location')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
