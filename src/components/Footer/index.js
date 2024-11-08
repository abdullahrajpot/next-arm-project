import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>

            <div className="footer__two all-footer bg-dark text-light pt-5">
                <div className="container pt-30" style={{ fontSize: '17px' }}>
                    <div className="row gap-5 d-flex justify-content-center" style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="col-xl-4 col-lg-5 col-md-6 lg-mb-30">
                            <div className="footer__two-widget footer-border">
                                <h4 className='mb-4'>ABOUT US</h4>
                                <div className="footer__two-widget-about">
                                    <p align="justify">NextARM is a leading provider of Information Technology services, catering to the needs of businesses of all sizes across various industries. With a team of experienced professionals, we oﬀer end-to-end IT solutions that help organizations streamline their operations and achieve their goals. We provide comprehensive Information Technology (IT) management services to help businesses optimize their technology infrastructure and achieve their business objectives.

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 md-mb-30">
                            <div className="footer__two-widget footer-border">
                                <h4 className='mb-4'>USEFUL LINKS</h4>
                                <div className="footer__two-widget-location">
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/' className='link' >- Home</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/about' className='link' >- About us</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/services' className='link' >- Our Services</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/industries' className='link' >- Industries</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/platforms' className='link' >- Platform</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info pb-2">
                                        <Link to='/career' className='link'>- Careers</Link>
                                    </div>
                                    <div className="footer__two-widget-location-item-info">
                                        <Link to='/contact' className='link' >- Contact us</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30 d-flex-end">
                            <div className="footer__two-widget footer-border">
                                <h4>CONTACT DETAILS</h4>
                                <div className="footer__two-widget-location">
                                    <div className="footer__two-widget-location-item d-flex mt-3" style={{ gap: '15px' }}>
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="fa fa-diamond " style={{ color: '#0185c3' }}></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info ">
                                            <p> NextARM Technologies Pvt.Ltd.</p>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-location-item d-flex mt-1" style={{ gap: '15px' }}>
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="fa fa-phone " style={{ color: '#0185c3' }}></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info ">
                                            <p>07993725394</p>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-location-item d-flex " style={{ gap: '15px' }}>
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="fa fa-envelope" style={{ color: '#0185c3' }}></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link to={'Naveed.syed@nextarm.net'} className='link'>Naveed.syed@nextarm.net</Link>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-location-item d-flex mt-3" style={{ gap: '15px' }}>
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="fa fa-map-marker-alt" style={{ color: '#0185c3' }}></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <p>Fort view, Rajendranagar, K. V. Rangareddy - 500048, Telangana, India</p>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-about-social">
                                        <ul style={{ display: 'flex', gap: '3px', listStyle: 'none', marginTop: '19px' }}>
                                            <li>
                                                <Link to='https://www.linkedin.com/' target='blank'>
                                                <i className='social fab fa-linkedin'
                                                    style={{
                                                        
                                                        borderRadius: '23px', padding: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)'
                                                    }} />
                                                    </Link>
                                            </li>
                                            <li>
                                                <Link to='https://www.instagram.com/' target='blank'>
                                                    <i className='social fab fa-instagram' width={'50px'}
                                                        style={{

                                                            borderRadius: '23px', padding: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)'
                                                        }} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='https://www.facebook.com/' target='blank'>
                                                    <i className='social fab fa-facebook-f ' width={'50px'}
                                                        style={{

                                                            borderRadius: '25px', padding: '15px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)'
                                                        }} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="copyright__two mt-5">
                    <div className="container-fluid pt-3" style={{ backgroundColor: 'black' }}>
                        <div className="row">
                            <div className="col-xl-12 text-center ">
                                <p>&copy; 2024 <a >NextArm</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
