import React from 'react';
import { Col, Image, Row, Typography, Button } from 'antd';
import banner_1 from '../../../assets/images/banner 5.webp';
import banner_2 from '../../../assets/images/banner 6.webp';
import hospitality_img from '../../../assets/images/hospitality.jpeg';
import banking_img from '../../../assets/images/banking-financial.jpg';
import real_img from '../../../assets/images/real estate.jpeg';
import health_img from '../../../assets/images/health-care.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudback from '../../../assets/images/cloudback.jpg';
import cyberback from '../../../assets/images/cyberback.jpeg';
import cloudmigback from '../../../assets/images/cloudmigback.jpeg';
import softwareback from '../../../assets/images/softwareback.jpeg';
import Footer from '../../../components/Footer';

import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Home = () => {
    return (
        <div>
            {/* Hero Section */}

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{ overflow: "hidden" }}>
                <div className="carousel-inner">
                    <div className="carousel-item " style={{ position: 'relative' }}>
                        <img className="d-block w-100" src={banner_1} alt="First slide" />
                        <div className="carousel-caption d-md-block d-sm-flex align-sm-center mx-5" style={{ position: 'absolute', color: 'white', top: '10%', left: '5%', textAlign: 'left' }}>
                            <Text className="d-none d-md-block" style={{ color: 'white', fontSize: '30px', fontWeight: '500' }}>WELCOME TO</Text>
                            <Title level={2} className="d-none d-md-block mt-0" style={{ color: 'white', fontSize: '60px', fontWeight: '700' }}>Next Arm</Title>
                            <Text className="d-none d-md-block" style={{ color: 'white', fontSize: '20px', fontWeight: '300' }}>Unlock the secrets of product engineering with NextArm.</Text>

                        </div>
                    </div>


                    <div className="carousel-item active" style={{ position: 'relative' }}>
                        <img className="d-block w-100" src={banner_2} alt="Second slide" />
                        <div className="carousel-caption d-md-block mx-5" style={{ position: 'absolute', color: 'white', top: '10%', left: '5%', textAlign: 'left' }}>
                            <Text className="d-none d-md-block" style={{ color: 'white', fontSize: '30px', fontWeight: '400' }}>WELCOME TO</Text>
                            <Title level={2} className="d-none d-md-block mt-0" style={{ color: 'white', fontSize: '60px', fontWeight: '700' }}>Next Arm</Title>
                            <Text className="d-none d-md-block mb-4" style={{ color: 'white', fontSize: '20px', fontWeight: '300' }}>Work with us as our business transformation services help drive change.</Text>
                            <Button className='banner-button'>
                                <Link to='/services' className='text-decoration-none'> Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
            </div>



            {/* Services Section */}
            <section
                className='services mt-5 mb-5'
                style={{
                    margin: '0', // Removes margin to allow the background to span full width
                    padding: '30px 20px',
                    backgroundColor: '#1242',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px', // Limits the content width on larger screens
                        margin: '0 auto', // Centers the content
                        padding: '20px',
                    }}
                >
                    <Title
                        level={1}
                        className="text-center mb-5 mt-3"
                        style={{ color: 'black', fontSize: '60px' }}
                    >
                        Services
                    </Title>

                    <Row
                        gutter={[24, 24]}
                        justify="center"
                        style={{ rowGap: '30px' }}
                    >
                        {[{
                            title: 'Cloud Services',
                            description: 'Our cloud services are designed to offer businesses enhanced flexibility and scalability ...',
                            link: '/services',
                            bgImage: cloudback // Add the background image URL here
                        },
                        {
                            title: 'Cyber Security',
                            description: "In today's digital age, protecting your business from cyber threats is critical. We provide comprehensive ...",
                            link: '/services/cyberSecurity',
                            bgImage: cyberback // Add the background image URL here
                        },
                        {
                            title: 'Cloud Migration',
                            description: 'Our Cloud Migration and Management services are designed to help businesses seamlessly ...',
                            link: '/services/cloudMigration',
                            bgImage: cloudmigback // Add the background image URL here
                        },
                        {
                            title: 'Software Development',
                            description: 'We specialize in providing custom software development solutions tailored to meet ...',
                            link: '/services/softwareDevelopment',
                            bgImage: softwareback // Add the background image URL here
                        }
                        ].map((service, index) => (
                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                                lg={6}
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <div
                                    className="card"
                                    style={{
                                        backgroundImage: `url(${service.bgImage})`, // Set background image dynamically
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '20px',
                                        textAlign: 'justify',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        cursor: 'pointer',
                                        width: '100%',
                                        maxWidth: '300px', // For larger screens
                                        minWidth: '250px', // For smaller screens
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <Link
                                        className="text-decoration-none"
                                        to={service.link}
                                        style={{ color: 'inherit', flex: '1' }}
                                    >
                                        <Title level={4} className="mb-4" style={{ color: 'white' }}>
                                            {service.title}
                                        </Title>
                                        <Text
                                            style={{
                                                fontSize: '17px',
                                                color: 'rgba(255, 255, 255, 0.9)', // Adjust text color for better contrast on background
                                            }}
                                        >
                                            {service.description}
                                        </Text>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>



            {/* Industries Section */}
            <section className='industries w-100 mb-sm-3 mb-5'>
                <Title level={1} className='text-center mb-5 mt-5' style={{ color: "rgba(0,0,0,.6" }}>INDUSTRIES</Title>
                <Row gutter={[16, 16]} className='inner-section mb-sm-3 mb-5 d-sm-flex d-flex justify-content-center' style={{ gap: '38px' }}>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={hospitality_img} className="card-img-top" alt="hospitilality" style={{ height: "144px", width: "256px" }} />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Hospitality</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>The hospitality industry is one of the most...</Text>
                                <Link className='text-decoration-none' to='/industries/hospitality'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={real_img} className="card-img-top" alt="Telecommunications" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Real Estate</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}> we stand at the forefront of technological innovation as ...</Text>
                                <Link className='text-decoration-none' to='/industries/RealEstate'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={banking_img} className="card-img-top" alt="Banking & Financial" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Banking & Financial</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Revolutionizing the financial services sector...</Text>
                                <Link className='text-decoration-none' to='/industries/banking'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={health_img} className="card-img-top" alt="Health Care" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Health Care</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Transforming health care for the digital age...</Text>
                                <Link className='text-decoration-none' to='/industries/health'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={16} md={12} lg={5} className='mb-3'>
                        <div className="card-1" style={{ width: "16rem" }}>
                            <Image preview={false} src={banking_img} className="card-img-top" alt="Health Care" />
                            <div className="card-body text-center">
                                <Title level={4} className="card-title mt-3 mb-4">Banking & Financial</Title>
                                <Text className="card-text px-2 d-block" style={{ fontSize: '17px' }}>Enjoy cost savings while providing the best...</Text>
                                <Link className='text-decoration-none' to='/industries/'><Button className='read-button mt-4'>READ MORE</Button></Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </section>
            <div className="footer">
                <Footer />
            </div>
        </div >
    );
};

export default Home;
