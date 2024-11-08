import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function ContactBar() {
    return (
        <div className="top__bar bg-dark">
            <div className="container">
                <div className="row" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div className="col-xl-5 col-md-6 ">
                        <div className="top__bar-left">
                            <a style={{ textDecoration: 'none', color: 'white' }}>
                                <i className="fas fa-phone mx-2" />
                                07993725394
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffffff" }}>|</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ textDecoration: 'none', color: 'white' }}>
                                <i className="fas fa-envelope mx-2" />
                                Naveed.syed@nextarm.net
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-6 ">
                        <div className="top__bar-right">
                            <div className="top__bar-right-social " style={{display:'flex', flexDirection:'row' , justifyContent:'flex-end',  alignItems:'center'}}>
                                <ul style={{display:'flex', flexDirection:'row', listStyle:'none'}}>
                                    <li>
                                    <Link to='https://www.facebook.com/' target='blank'>
                                    <AiFillFacebook style={{ color: 'white', marginRight: '2px', fontSize:'25px' }} />
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to='https://www.instagram.com/' target='blank'>
                                    <AiFillInstagram style={{ color: 'white', marginRight: '2px', fontSize:'25px' }} />
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to='https://www.linkedin.com/' target='blank'>
                                    <AiFillLinkedin  style={{ color: 'white', marginRight: '2px', fontSize:'25px' }}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
