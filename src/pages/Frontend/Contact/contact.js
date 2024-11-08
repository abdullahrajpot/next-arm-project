import React, { useState } from 'react';
import call_icon from '../../../assets/images/call.png';
import email_icon from '../../../assets/images/email.png';
import location_icon from '../../../assets/images/locations.png';
import linkedin_icon from '../../../assets/images/linkedin.png';
import fb_icon from '../../../assets/images/fb.png';
import insta_icon from '../../../assets/images/insta.png';
import bannerImg from '../../../assets/images/page-banner.jpg';
import { Button, Image, Input, Typography, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../../components/Footer';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

export default function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [name, setName] = useState('');
  const [loading, SetIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsLoading(true); // Uncommented to show loading state
  
    console.log("Form submitted"); // Check if the form submission is triggered
    
  
    const serviceId = 'service_4k8uazr';
    const templateId = 'template_2ypjgia';
    const publicKey = 'o-Ynaq_xT5VBHYEy-';
  
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_subject: subject,
      to_name: 'Next Arm',
      message: message,
    };
  
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', response);
      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      setPhone('');
      
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      SetIsLoading(false); // Stop loading
    }
  };
  
  

  return (
    <>
      <div
        className="page__banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '100px' : '150px'
        }}
      >
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-xl-12 col-lg-12">
              <div className="page__banner-content d-flex justify-content-center align-items-center" style={{ paddingTop: "2.3rem" }}>
                <Title level={isMobile ? 3 : 2} className='text-white'>Contact Us</Title>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__two section-padding mt-3 pb-0">
        <div className="container">
          <Row gutter={[16, 16]} className="contact__two-box" style={{
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
            padding: isMobile ? '15px' : '30px',
            borderRadius: '15px',
            backgroundColor: '#fff',
            marginBottom: '50px',
            marginTop: '60px'
          }}>
            <Col xs={24} lg={10} className="lg-mb-30">
              <div className="contact__two-left">
                <div className="contact__two-left-item pt-20 d-flex mb-3">
                  <div className="contact__two-left-item-icon">
                    <img src={call_icon} width={isMobile ? '50%' : '72%'} alt="Phone Icon" />
                  </div>
                  <div className="contact__two-left-item-info">
                    <span>Phone</span>
                    <p>07993725394</p>
                  </div>
                </div>
                <hr className='mb-5' style={{ width: isMobile ? '100%' : '380px' }} />
                <div className="contact__two-left-item d-flex mb-3">
                  <div className="contact__two-left-item-icon">
                    <img src={email_icon} width={isMobile ? '50%' : '72%'} alt="Email Icon" />
                  </div>
                  <div className="contact__two-left-item-info">
                    <span>Quick Email</span>
                    <p className='text-decoration-underline'>Naveed.syed@nextarm.net</p>
                  </div>
                </div>
                <hr className='mb-5' style={{ width: isMobile ? '100%' : '380px' }} />
                <div className="contact__two-left-item d-flex mb-3">
                  <div className="contact__two-left-item-icon">
                    <img src={location_icon} width={isMobile ? '70%' : '100%'} alt="Location Icon" />
                  </div>
                  <div className="contact__two-left-item-info">
                    <span>Office Address</span>
                    <p>
                      Fort view, Rajendranagar, K. V. Rangareddy - 500048, Telangana, India
                    </p>
                  </div>
                </div>
                <hr className='mb-5' style={{ width: isMobile ? '100%' : '380px' }} />
                <div className="contact__two-left-item-socialIcon">
                  <Text style={{ fontSize: '20px', fontWeight: "600" }}>Follow Us</Text>
                  <ul style={{ display: 'flex', gap: '3px', listStyle: 'none', marginTop: '19px' }}>
                    <li>
                      <Link to='https://www.instagram.com/' target='blank'>
                        <Image className='icons' src={insta_icon} preview={false} width={isMobile ? '30px' : '50px'} style={{ border: '1px solid rgba(235, 219, 219, 0.811)', borderRadius: '23px', padding: '10px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)' }} />
                      </Link>
                    </li>
                    <li>
                      <Link to='https://www.facebook.com/' target='blank'>
                        <Image className='icons' src={fb_icon} preview={false} width={isMobile ? '30px' : '50px'} style={{ border: '1px solid rgba(235, 219, 219, 0.811)', borderRadius: '23px', padding: '10px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)' }} />
                      </Link>
                    </li>
                    <li>
                      <Link to='https://www.linkedin.com/' target='blank'>
                        <Image className='icons' src={linkedin_icon} preview={false} width={isMobile ? '30px' : '50px'} style={{ border: '1px solid rgba(235, 219, 219, 0.811)', borderRadius: '23px', padding: '10px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)' }} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <div className="contact__two-right">
                <Title level={isMobile ? 3 : 2}>GET IN TOUCH</Title> <br />
                <div className="contact__two-right-form">
                  <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Input className='p-3' type="text" name="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required
                          style={{ paddingRight: '40px' }} />
                      </Col>
                      <Col xs={24} md={12}>
                        <Input className='p-3' type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required
                          style={{ paddingRight: '40px' }} />
                      </Col>
                      <Col xs={24} md={12}>
                        <Input className='p-3' type="text" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone"
                          style={{ paddingRight: '40px' }} />
                      </Col>
                      <Col xs={24} md={12}>
                        <Input className='p-3' type="text" name="subject" onChange={(e) => setSubject(e.target.value)} placeholder="Subject"
                          style={{ paddingRight: '40px' }} />
                      </Col>
                      <Col xs={24}>
                        <Input.TextArea name="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} rows={4}
                          style={{ paddingRight: '40px' }} />
                      </Col>
                      
                      <Col xs={24}>
                        <Button className="btn-one" type="submit"
                        onClick={handleSubmit}
                        loading={loading}
                        block style={{
                            
                          height: '60px', backgroundColor: '#0185c3',
                          fontSize: '20px', marginTop: '30px', color: 'white',
                          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)'
                        }}>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.807945962444!2d78.39966128576624!3d17.366043233544747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb965aa67155fd%3A0xd2c644d78ef82af1!2sFort%20View%20Rd%2C%20Upperpally%2C%20Hyderabad%2C%20Telangana%20500030%2C%20India!5e0!3m2!1sen!2s!4v1728126174665!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
