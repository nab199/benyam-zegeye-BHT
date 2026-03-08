
import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills.engineering'),
            skills: ["Hemodialysis Machines", "Circuit Design", "PCB Layout", "3D CAD Modeling", "Medical Imaging", "Signal Processing"]
        },
        {
            title: t('skills.tools'),
            skills: ["Oscilloscopes", "Soldering", "3D Printing", "Git", "Simulink"]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">{t('skills.title')}</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
