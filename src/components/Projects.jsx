
import React from 'react';
import { useTranslation } from 'react-i18next';
import MedicalEquipmentGallery from './MedicalEquipmentGallery';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Fresenius 2008K Machine Optimization",
            description: "Comprehensive maintenance and performance optimization of Fresenius 2008K hemodialysis machines, improving efficiency by 35% and reducing downtime.",
            tech: ["Biomedical Engineering", "Preventive Maintenance", "Performance Analysis"],
            image: "/product-jpeg.jpg",
            category: "Medical Equipment",
            featured: true
        },
        {
            title: "Hemodialysis Machine Maintenance Tracker",
            description: "A digital recording system for tracking maintenance schedules and performance logs of dialysis units.",
            tech: ["React", "Database", "Medical Standards"],
            image: "/s-l1200.jpg",
            category: "Software Development"
        },
        {
            title: "Dialysis Equipment Calibration System",
            description: "Automated calibration system for hemodialysis machines ensuring compliance with medical safety standards.",
            tech: ["Sensor Integration", "Quality Control", "Medical Compliance"],
            image: "/product-jpeg.jpg",
            category: "Quality Assurance"
        },
        {
            title: "Medical Imaging Analysis Tool",
            description: "Software for analyzing MRI scans using deep learning algorithms to detect anomalies.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            image: "/s-l1200.jpg",
            category: "AI/ML"
        },
        {
            title: "Prosthetic Limb Control System",
            description: "EMG-based control system for a 3D printed prosthetic arm.",
            tech: ["C++", "Signal Processing", "3D Printing"],
            image: "/product-jpeg.jpg",
            category: "Biomedical Innovation"
        }
    ];

    const featuredProject = projects.find(p => p.featured);

    return (
        <>
            <section id="projects" className="section projects-section" aria-labelledby="projects-title">
                <div className="container">
                    <header>
                        <h2 id="projects-title" className="section-title">{t('projects.title')}</h2>
                        <p className="section-subtitle">
                            Specialized projects in hemodialysis technology and biomedical engineering
                        </p>
                    </header>

                    {featuredProject && (
                        <article className="featured-project">
                            <div className="featured-content">
                                <div className="featured-image">
                                    <img 
                                        src={featuredProject.image}
                                        alt={featuredProject.title}
                                        onError={(e) => {
                                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23f0f0f0' width='600' height='400'/%3E%3Ctext fill='%23666' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(featuredProject.title)}%3C/text%3E%3C/svg%3E`;
                                        }}
                                    />
                                    <span className="category-badge">{featuredProject.category}</span>
                                </div>
                                <div className="featured-details">
                                    <h3>{featuredProject.title}</h3>
                                    <p>{featuredProject.description}</p>
                                    <div className="tech-tags">
                                        {featuredProject.tech.map((tech, idx) => (
                                            <span key={idx} className="tag">{tech}</span>
                                        ))}
                                    </div>
                                    <a href="#equipment-gallery" className="project-link featured-link">
                                        View Equipment Gallery →
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                    <div className="projects-grid">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <article key={index} className="project-card">
                                <div className="project-image">
                                    <img 
                                        src={project.image}
                                        alt={project.title}
                                        onError={(e) => {
                                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23f5f5f5' width='300' height='200'/%3E%3Ctext fill='%23999' font-family='Arial' font-size='12' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(project.title.substring(0, 20))}%3C/text%3E%3C/svg%3E`;
                                        }}
                                    />
                                    <span className="category-badge">{project.category}</span>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="tag">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="project-link">{t('projects.view_details')}</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <MedicalEquipmentGallery />
        </>
    );
};

export default Projects;
