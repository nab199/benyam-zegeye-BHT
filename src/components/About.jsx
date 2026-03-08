
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section about-section" aria-labelledby="about-title">
            <div className="container">
                <header>
                    <h2 id="about-title" className="section-title">{t('about.title')}</h2>
                </header>
                <div className="about-content">
                    <article className="about-text">
                        <h3>{t('about.role')}</h3>
                        <p>
                            <Trans i18nKey="about.p1">
                                I am a dedicated Biomedical Engineer specializing in <strong>Hemodialysis Technology</strong>.
                                With expertise in both hardware and software, I bridge the gap between biological systems and engineering principles.
                            </Trans>
                        </p>
                        <p>{t('about.p2')}</p>
                    </article>
                    <aside className="about-stats" aria-label="Professional statistics">
                        <div className="stat-item">
                            <h4>3+</h4>
                            <p>{t('about.experience')}</p>
                        </div>
                        <div className="stat-item">
                            <h4>20+</h4>
                            <p>{t('about.projects_completed')}</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default About;
