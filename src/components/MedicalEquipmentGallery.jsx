import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MedicalEquipmentGallery.css';

const MedicalEquipmentGallery = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(0);

    const equipment = [
        {
            id: 1,
            name: "Fresenius 2008K Hemodialysis Machine",
            category: "Hemodialysis Equipment",
            description: "Advanced hemodialysis machine with precise fluid removal and biocompatible dialysis solutions",
            image: "/product-jpeg.jpg",
            thumbnail: "/product-jpeg.jpg",
            specifications: {
                "Blood Flow Rate": "0-500 mL/min",
                "Dialysate Flow": "300-800 mL/min",
                "Ultrafiltration Rate": "0-4000 mL/h",
                "Display": "Color LCD touchscreen",
                "Safety Features": "Multiple alarm systems, blood leak detection"
            }
        },
        {
            id: 2,
            name: "Fresenius 2008K Control Panel",
            category: "Control Interface",
            description: "Intuitive user interface with comprehensive monitoring and control capabilities",
            image: "/s-l1200.jpg",
            thumbnail: "/s-l1200.jpg",
            specifications: {
                "Interface": "Touchscreen display",
                "Monitoring": "Real-time parameters",
                "Data Storage": "Treatment history",
                "Connectivity": "USB and network ports"
            }
        },
        {
            id: 3,
            name: "Fresenius 2008K Hydraulic System",
            category: "Fluid Management",
            description: "Precision hydraulic system for accurate dialysate preparation and delivery",
            image: "/product-jpeg.jpg",
            thumbnail: "/product-jpeg.jpg",
            specifications: {
                "Pump Type": "Peristaltic pumps",
                "Flow Control": "Closed-loop system",
                "Pressure Monitoring": "Multiple sensors",
                "Safety": "Pressure relief valves"
            }
        }
    ];

    const currentEquipment = equipment[selectedImage];

    return (
        <section className="medical-equipment-gallery" aria-labelledby="equipment-gallery-title">
            <div className="container">
                <header>
                    <h2 id="equipment-gallery-title" className="section-title">
                        Medical Equipment Showcase
                    </h2>
                    <p className="section-subtitle">
                        Specialized expertise in hemodialysis technology and medical equipment
                    </p>
                </header>

                <div className="equipment-showcase">
                    <div className="main-image-container">
                        <figure className="equipment-figure">
                            <img 
                                src={currentEquipment.image}
                                alt={currentEquipment.name}
                                className="main-equipment-image"
                                onError={(e) => {
                                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23f0f0f0' width='600' height='400'/%3E%3Ctext fill='%23666' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(currentEquipment.name)}%3C/text%3E%3C/svg%3E`;
                                }}
                            />
                            <figcaption className="equipment-caption">
                                <h3>{currentEquipment.name}</h3>
                                <p>{currentEquipment.description}</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="equipment-details">
                        <div className="specifications">
                            <h4>Technical Specifications</h4>
                            <dl className="spec-list">
                                {Object.entries(currentEquipment.specifications).map(([key, value]) => (
                                    <div key={key} className="spec-item">
                                        <dt>{key}:</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="thumbnail-gallery">
                            <h4>Equipment Gallery</h4>
                            <div className="thumbnails" role="list">
                                {equipment.map((item, index) => (
                                    <button
                                        key={item.id}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                        aria-label={`View ${item.name}`}
                                        aria-pressed={selectedImage === index}
                                        role="listitem"
                                    >
                                        <img 
                                            src={item.thumbnail}
                                            alt={item.name}
                                            onError={(e) => {
                                                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e0e0e0' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='Arial' font-size='10' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(item.name.substring(0, 15))}%3C/text%3E%3C/svg%3E`;
                                            }}
                                        />
                                        <span className="thumbnail-label">{item.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="equipment-services">
                    <h3>Our Services for Fresenius 2008K</h3>
                    <div className="services-grid">
                        <div className="service-card">
                            <h4>Preventive Maintenance</h4>
                            <p>Regular maintenance schedules to ensure optimal performance and patient safety</p>
                        </div>
                        <div className="service-card">
                            <h4>Technical Support</h4>
                            <p>24/7 technical assistance and troubleshooting for equipment issues</p>
                        </div>
                        <div className="service-card">
                            <h4>Calibration & Testing</h4>
                            <p>Precise calibration and performance testing according to medical standards</p>
                        </div>
                        <div className="service-card">
                            <h4>Staff Training</h4>
                            <p>Comprehensive training for medical staff on equipment operation and safety</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedicalEquipmentGallery;
