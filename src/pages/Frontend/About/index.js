import React from 'react';
import aboutimg from '../../../assets/images/about-9.jpg';
import bannerImg from '../../../assets/images/page-banner.jpg';
import { Button, Typography } from 'antd';
import Footer from '../../../components/Footer';

import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export default function About() {
    return (
        <>
            {/* Banner with background image */}
            <div className="page__banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '150px' }}    >
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-12 col-lg-12">
                            <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "3rem" }}>
                                <Title level={2} className='text-white'>About Us</Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about-container">
                <div className="about-content">
                    <p className='fs-5 pt-3' style={{ color: "#0185c3" }}>Who are we</p>
                    <h3>Next Arm</h3>
                    <Text>
                        <strong>NextARM</strong> Technologies Pvt. Ltd. is a leading provider of Information Technology services, catering to the needs of businesses of all sizes across various industries.
                        <br />
                        With a team of experienced professionals, we oﬀer end-to-end IT solutions that help organizations streamline their operations and achieve their goals.
                        <br />
                        We provide comprehensive Information Technology (IT) management services to help businesses optimize their technology infrastructure and achieve their business objectives.
                        <br />
                        We oﬀer a wide range of IT services, including IT Development, IT consulting, IT support, Cybersecurity, Cloud services, and more.
                        <br />
                        Our team of experienced professionals has the expertise and knowledge to deliver high-quality solutions that meet the unique needs of each of our clients.
                    </Text>
                    <br />
                    <Link className='text-decoration-none' to='/services'>
                        <Button className='about-button mt-4'>
                            Our Services
                        </Button>
                    </Link>
                </div>
                <img src={aboutimg} alt="about" className="about-image" />
            </div>

            <div  className="footer">
        <Footer />
      </div>
        </>
    );
}