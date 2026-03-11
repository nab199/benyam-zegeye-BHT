import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MedicalEquipmentGallery.css';

const WaterTreatmentGallery = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(0);

    const waterTreatmentSystems = [
        {
            id: 1,
            name: "Reverse Osmosis Water Treatment System",
            category: "Water Purification",
            description: "Advanced reverse osmosis system designed specifically for hemodialysis applications, ensuring ultra-pure water quality for patient safety.",
            image: "/photo_3_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_3_2026-03-11_14-05-02.jpg",
            specifications: {
                "Production Capacity": "500-2000 L/hour",
                "Purification Method": "Multi-stage reverse osmosis",
                "Water Quality": "AAMI grade water standards",
                "Conductivity": "< 1 μS/cm",
                "Bacteria Removal": "99.9% effective",
                "Endotoxin Level": "< 0.25 EU/mL"
            }
        },
        {
            id: 2,
            name: "Dialysis Water Distribution Loop",
            category: "Water Distribution",
            description: "Closed-loop water distribution system maintaining constant circulation and temperature control for dialysis machines.",
            image: "/photo_4_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_4_2026-03-11_14-05-02.jpg",
            specifications: {
                "Flow Rate": "2-5 L/min per machine",
                "Temperature Control": "±0.5°C accuracy",
                "Material": "Medical-grade PVC/PP",
                "Pressure Monitoring": "Continuous monitoring",
                "UV Sterilization": "Built-in UV system",
                "Loop Configuration": "Ring main distribution"
            }
        },
        {
            id: 3,
            name: "Water Storage and Distribution Tank",
            category: "Water Storage",
            description: "Stainless steel storage tank with advanced monitoring systems for treated water quality maintenance.",
            image: "/photo_5_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_5_2026-03-11_14-05-02.jpg",
            specifications: {
                "Capacity": "500-2000 liters",
                "Material": "304/316 Stainless Steel",
                "Temperature Control": "Heating and cooling system",
                "Level Monitoring": "Digital level sensors",
                "Quality Monitoring": "Real-time conductivity",
                "Sanitary Design": "FDA compliant materials"
            }
        },
        {
            id: 4,
            name: "Water Quality Monitoring System",
            category: "Quality Control",
            description: "Comprehensive monitoring system for continuous water quality assessment and alarm management.",
            image: "/photo_6_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_6_2026-03-11_14-05-02.jpg",
            specifications: {
                "Parameters Monitored": "Conductivity, pH, temperature",
                "Display": "Digital LCD screen",
                "Alarm System": "Audio-visual alarms",
                "Data Logging": "Continuous recording",
                "Calibration": "Automatic calibration",
                "Compliance": "ISO 23500 standards"
            }
        },
        {
            id: 5,
            name: "Pre-treatment Filtration System",
            category: "Water Filtration",
            description: "Multi-stage pre-treatment system removing sediments, chlorine, and organic contaminants before RO processing.",
            image: "/photo_7_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_7_2026-03-11_14-05-02.jpg",
            specifications: {
                "Stages": "5-stage filtration",
                "Sediment Filter": "5-micron cartridge",
                "Carbon Filter": "Activated carbon",
                "Water Softener": "Ion exchange system",
                "Flow Rate": "Up to 3000 L/hour",
                "Backwash System": "Automatic backwashing",
                "Pressure Rating": "6 bar operating pressure"
            }
        },
        {
            id: 6,
            name: "Portable Dialysis Water Unit",
            category: "Mobile Treatment",
            description: "Compact mobile water treatment unit for temporary dialysis setups and emergency medical response.",
            image: "/photo_8_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_8_2026-03-11_14-05-02.jpg",
            specifications: {
                "Portability": "Wheel-mounted system",
                "Production": "200-500 L/hour",
                "Power Requirement": "220V/50Hz",
                "Setup Time": "30 minutes",
                "Footprint": "1.2m x 0.8m",
                "Certification": "CE and ISO certified"
            }
        },
        {
            id: 7,
            name: "Water Treatment Control Panel",
            category: "Control System",
            description: "Advanced PLC-based control system for automated water treatment plant operation and monitoring.",
            image: "/photo_9_2026-03-11_14-05-02.jpg",
            thumbnail: "/photo_9_2026-03-11_14-05-02.jpg",
            specifications: {
                "Control Type": "PLC-based automation",
                "Touch Screen": "10-inch HMI display",
                "Remote Monitoring": "Web-based interface",
                "Data Storage": "30-day historical data",
                "Alarm Management": "SMS/email alerts",
                "Backup Power": "UPS support"
            }
        }
    ];

    const currentSystem = waterTreatmentSystems[selectedImage];

    return (
        <section className="medical-equipment-gallery" aria-labelledby="water-treatment-title">
            <div className="container">
                <h2 id="water-treatment-title" className="section-title">
                    {t('equipment.title')}
                </h2>
                <p className="section-subtitle">
                    {t('equipment.subtitle')}
                </p>

                <div className="equipment-showcase">
                    <div className="main-image-container">
                        <figure className="equipment-figure">
                            <img 
                                src={currentSystem.image} 
                                alt={currentSystem.name}
                                className="main-equipment-image"
                                loading="lazy"
                            />
                            <figcaption className="equipment-caption">
                                <h3>{currentSystem.name}</h3>
                                <p>{currentSystem.description}</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="equipment-details">
                        <div className="specifications">
                            <h4>{t('equipment.specifications')}</h4>
                            <dl className="spec-list">
                                {Object.entries(currentSystem.specifications).map(([key, value]) => (
                                    <div key={key} className="spec-item">
                                        <dt>{key.replace(/([A-Z])/g, ' $1').trim()}:</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="thumbnail-gallery">
                    <h4>{t('equipment.gallery')}</h4>
                    <div className="thumbnails">
                        {waterTreatmentSystems.map((system, index) => (
                            <button
                                key={system.id}
                                className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                                aria-label={`View ${system.name}`}
                                aria-pressed={index === selectedImage}
                            >
                                <img 
                                    src={system.thumbnail} 
                                    alt={system.name}
                                    loading="lazy"
                                />
                                <span className="thumbnail-label">{system.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterTreatmentGallery;
