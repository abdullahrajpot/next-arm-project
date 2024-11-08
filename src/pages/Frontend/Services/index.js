import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Typography } from 'antd';
import CloudServices from './CloudServices';
import CyberSecurity from './CyberSecurity';
import CloudMigration from './CloudMigration';
import SoftwareDevelopment from './SoftwareDevelopment';
import bannerImg from '../../../assets/images/page-banner.jpg';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../../components/Footer'; // Add this line to import Footer

const { Title } = Typography;

export default function Services() {
  const [selectedService, setSelectedService] = useState('Cloud Services');
  const [isScrolling, setIsScrolling] = useState(false);
  const stickyCardRef = useRef(null);
  const footerRef = useRef(null);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const services = [
    { name: 'Cloud Services', path: '/services' },
    { name: 'Cyber Security', path: '/services/cyberSecurity' },
    { name: 'Cloud Migration', path: '/services/cloudMigration' },
    { name: 'Software Development', path: '/services/softwareDevelopment' },
  ];

  const handleClick = (service) => {
    setSelectedService(service.name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const stickyCard = stickyCardRef.current;
    const footer = footerRef.current;

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
  }, [isSmallScreen]);

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
                  Services
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
            transition: 'top 0.3s ease',
          }}
        >
          <h4 style={{ marginBottom: '20px', fontWeight: 'bold' }}>OUR SERVICES</h4>
          {services.map((service, index) => (
            <Link
              key={index}
              className="text-decoration-none"
              style={{
                color: selectedService === service.name ? '#fff' : '#000',
                backgroundColor: selectedService === service.name ? '#0185c3' : 'transparent',
                fontSize: '16px',
                padding: '10px 15px',
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
          <Route index element={<CloudServices />} />
          <Route path="/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/cloudMigration" element={<CloudMigration />} />
          <Route path="/softwareDevelopment" element={<SoftwareDevelopment />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div ref={footerRef} className="footer">
        <Footer />
      </div>
    </div>
  );
}
