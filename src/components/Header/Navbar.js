import React, { useState } from 'react';
import img1 from '../../assets/images/navbar.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={img1} alt="logo" style={{ width: "250px", height:'80px'
                     }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontWeight: "bold", fontSize: "small" }}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item fs-6">
                            <Link className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} aria-current="page" to='/' onClick={() => handleLinkClick('home')}>HOME</Link>
                        </li>
                        <li className="nav-item fs-6">
                            <Link className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} to='/about' onClick={() => handleLinkClick('about')}>ABOUT US</Link>
                        </li>
                        <li className="nav-item dropdown fs-6">
                            <Link
                                className={`nav-link dropdown-toggle ${activeLink === 'services' ? 'active' : ''}`}
                                to='/services'
                                role="button"
                            >
                                SERVICES
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/services' onClick={() => handleLinkClick('services')}>Cloud Services</Link></li>
                                <li><Link className="dropdown-item" to='/services/cyberSecurity' onClick={() => handleLinkClick('services')}>Cyber Security</Link></li>
                                <li><Link className="dropdown-item" to='/services/cloudMigration' onClick={() => handleLinkClick('services')}>Cloud Migration</Link></li>
                                <li><Link className="dropdown-item" to='/services/softwareDevelopment' onClick={() => handleLinkClick('services')}>Software Development</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown fs-6">
                            <Link
                                className={`nav-link dropdown-toggle ${activeLink === 'industries' ? 'active' : ''}`}
                                to='/industries'
                                role="button"
                            >
                                INDUSTRIES
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/industries' onClick={() => handleLinkClick('industries')}>Banking & Financial</Link></li>
                                <li><Link className="dropdown-item" to='/industries/realEstate' onClick={() => handleLinkClick('industries')}>Real Estate</Link></li>
                                <li><Link className="dropdown-item" to='/industries/health' onClick={() => handleLinkClick('industries')}>Health Care</Link></li>
                                <li><Link className="dropdown-item" to='/industries/hospitality' onClick={() => handleLinkClick('industries')}>Hospitality</Link></li>
                                <li><Link className="dropdown-item" to='/industries/insurance' onClick={() => handleLinkClick('industries')}>Insurance</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown fs-6">
                            <Link
                                className={`nav-link dropdown-toggle ${activeLink === 'platform' ? 'active' : ''}`}
                                to='/platforms'
                                role="button"
                            >
                                PLATFORM
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/platforms' onClick={() => handleLinkClick('platform')}>DevOps</Link></li>
                                <li><Link className="dropdown-item" to='/platforms/dynamics' onClick={() => handleLinkClick('platform')}>Microsoft Dynamics</Link></li>
                                <li><Link className="dropdown-item" to='/platforms/testing' onClick={() => handleLinkClick('platform')}>Software Testing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item fs-6">
                            <Link className={`nav-link ${activeLink === 'career' ? 'active' : ''}`} to='/career' onClick={() => handleLinkClick('career')}>CAREERS</Link>
                        </li>
                        <li className="nav-item fs-6">
                        </li>
                    </ul>
                    <Button   style={{height:'40px', backgroundColor:'#0185c3' , color:'white'}}> <Link className={`nav-links ${activeLink === 'contact' ? 'active' : ''}`} style={{ textDecoration:'none'}} to='/contact' onClick={() => handleLinkClick('contact')}>Let's talk</Link></Button>
                </div>
            </div>
        </nav>
    );
}