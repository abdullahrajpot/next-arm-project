import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Typography } from 'antd';
import bannerImg from '../../../assets/images/page-banner.jpg';
import { useMediaQuery } from 'react-responsive';
import Telecommunications from './Telecommunications';
import Health from './Health';
import Insure from './Insure';
import Banking from './Banking';  
import Hospitality from './Hospitality';  
import Footer from '../../../components/Footer';
import RealEstate from './RealEstate';

const { Title } = Typography;

export default function Industries() {
    const [selectedService, setSelectedService] = useState('Retail & Consumer');
    const [isScrolling, setIsScrolling] = useState(false);
    const stickyCardRef = useRef(null);
    const footerRef = useRef(null);

    // Use media query to detect smaller screens
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const services = [
        { name: 'Telecommunications', path: '/industries' },
        { name: 'Health Care', path: '/industries/health' },
        { name: 'Insurance', path: '/industries/insurance' },
        { name: 'Banking & Financial', path: '/industries/banking' },
        { name: 'Hospitality', path: '/industries/Hospitality' },
        { name: 'RealEstate', path: '/industries/RealEstate' },
    ];

    const handleClick = (service) => {
        setSelectedService(service.name);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const stickyCard = stickyCardRef.current;
        const footer = footerRef.current;

        // Add null check to avoid TypeError
        if (stickyCard && footer) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        stickyCard.style.position = 'absolute';
                        stickyCard.style.bottom = `${window.innerHeight - footer.getBoundingClientRect().top + 20}px`;
                    } else {
                        stickyCard.style.position = 'fixed';
                        stickyCard.style.bottom = 'auto';
                    }
                },
                { root: null, threshold: 0 }
            );

            observer.observe(footer);

            return () => {
                observer.unobserve(footer);
            };
        }
    }, [isSmallScreen]); // Add isSmallScreen to dependency array

    return (
        <div>
            {/* Banner Section */}
            <div
                className="page__banner"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                }}
            >
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-12 col-lg-12">
                            <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: '3rem' }}>
                                <Title level={2} className="text-white">
                                    Industries
                                </Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Card Section */}
            {!isSmallScreen && (
                <div
                    ref={stickyCardRef}
                    style={{
                        position: 'fixed',
                        top: isScrolling ? '200px' : '330px',
                        left: '20px',
                        width: '300px',
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        borderRadius: '8px',
                        zIndex: 1000,
                        border: '1px solid #e0e0e0',
                        marginBottom: '0',
                        transition: 'top 0.3s ease', // Smooth transition for larger screens
                    }}
                >
                    <h4 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Industries</h4>
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            className="text-decoration-none"
                            style={{
                                color: selectedService === service.name ? '#fff' : '#000',
                                backgroundColor: selectedService === service.name ? '#0185c3' : 'transparent',
                                fontSize: '16px',
                                padding: '6px 15px',
                                borderRadius: '6px',
                                marginBottom: '10px',
                                display: 'block',
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                            }}
                            to={service.path}
                            onClick={() => handleClick(service)}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Main Content Section */}
            <div style={{ marginLeft: isSmallScreen ? '0' : '350px', padding: '20px' }}>
                <Routes>
                    <Route index element={<Telecommunications />} />
                    <Route path="/health" element={<Health />} />
                    <Route path="/insurance" element={<Insure />} />
                    <Route path="/banking" element={<Banking />} />
                    <Route path="/hospitality" element={<Hospitality />} />  
                    <Route path="/realEstate" element={<RealEstate />} />  
                </Routes>
            </div>

            {/* Footer Section */}
            <div ref={footerRef} className="footer">
                <Footer />
            </div>
        </div>
    );
}
