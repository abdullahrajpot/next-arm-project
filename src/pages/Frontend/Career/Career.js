import React, { useState } from 'react';
import bannerImg from '../../../assets/images/page-banner.jpg';
import { Button, Col, Input, Row, Typography } from 'antd';
import Footer from '../../../components/Footer';
import { useMediaQuery } from 'react-responsive';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../config/firebase';
import emailjs from '@emailjs/browser';



const { Title } = Typography

export default function Career() {

    const isMobile = useMediaQuery({ maxWidth: 767 });


    const [name, setName] = useState('');
    const [loading, SetIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetIsLoading(true); // Uncommented to show loading state

        console.log("Form submitted"); // Check if the form submission is triggered
        let fileUrl = null;
        if (file) {
            const storageRef = ref(storage, `files/${file.name}`);
            try {
                await uploadBytes(storageRef, file);
                fileUrl = await getDownloadURL(storageRef);
            } catch (uploadError) {
                console.error('Error uploading file:', uploadError);
                SetIsLoading(false); // Stop loading on error
                return; // Exit early on error
            }
        }

        const serviceId = 'service_4k8uazr';
        const templateId = 'template_2g9avcj';
        const publicKey = 'o-Ynaq_xT5VBHYEy-';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_JobTitle: JobTitle,
            to_name: 'Next Arm',
            file: fileUrl || null,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('Email sent successfully!', response);
            // Clear the form fields
            setName('');
            setEmail('');
            setJobTitle('');
            setFile(null);
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            SetIsLoading(false); // Stop loading
        }
    };


    return (
        <>

            <div className="page__banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '150px' }}    >
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-12 col-lg-12">
                            <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "3rem" }}>
                                <Title level={2} className='text-white'>Careers</Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="news__details section-padding">
                <div className="container">
                    <div className="row justify-content-center" style={{ marginTop: '70px', marginBottom: '70px' }}>
                        <div className="col-xl-12">


                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">Java Developer</h3>
                                </div>
                                <p><strong>Salary :</strong> ₹7,00,000 per year</p>
                                <p><strong>Location of Job :</strong> Hyderabad - India</p>
                                <br />
                                <h4>Detailed Job Description:</h4>

                                <p><strong>Summary of role:</strong></p>
                                <p>
                                    We are seeking an experienced Java Developer to join our Development team. The ideal candidate will have a strong technical background and excellent communication skills, with the ability to understand customer needs and handle development of IT products and services. The Java Developer will work closely with the Development team to develop and deliver high-tech solutions, and provide technical support to clients.
                                </p>
                                <br />

                                <p><strong>Key Responsibilities:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience customizing workflows and integration with other enterprise systems.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Demonstrated experience with Java and related technologies.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Working knowledge and understanding of the following: RESTful web services, JSON, Git, Maven.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to write complex programs, analyze code changes and make suggestions to improve code complexity for maintainability and scalability.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to reason logically and creatively, identifying problems, drawing valid conclusions. From the data available, and developing effective solutions while applying creative thinking. In the design and development of high-performing web applications.</div>
                                        </div>
                                    </div>
                                </div>

                                <p className='mt-4'>
                                    <strong>Requirements: </strong>
                                </p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> 5+ years of experience in the Java development field.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Bachelor's degree in Computer Science, Engineering, or a related subject.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> FinTech / Financial sector experience is preferable.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Goal oriented and self-motivated.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Candidate must have the ability to work independently or within a team environment.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong oral and written communications skills with the ability to create software design and engineering documents.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to multi-task and deliver high-quality work under tight deadlines is essential.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to work in a fast-paced environment is crucial.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to learn, excel and deliver at a quick pace is required.</div>
                                        </div>
                                    </div>
                                </div>

                                <p className='mt-4'>
                                    <strong>Technical Skills: </strong>
                                </p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experienced Java Developer with knowledge in web framework-based development and Internet technologies.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong knowledge of OOP, Design Patterns, Data Structure, Algorithms.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ideal candidate should have hands-on experience in the following: public-facing web application development using JAVA and open-source technologies, tools, and APIs Ex.: Spring /Boot stack, Servlets, JSF, JSP, RESTful web services, JDBC, XML, Git, Maven, DevOps, Jenkins, SonarQube. Additional web technologies experience is a plus.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Reporting framework, Jasper, BIRT.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Maven, Subversion SVN, GIT, and JUnit.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Jira</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of the Linux command line.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of SQL/PL-SQL and Oracle database development (packages, stored procedures, triggers) is a plus.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with applications servers: WebLogic, Tomcat.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of JBPM, Web Development is a plus.</div>
                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'>
                                    <strong>What We Offer: </strong>
                                </p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Attractive salary and other standard facilities will be provided.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ongoing training and professional development opportunities.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborative and dynamic work environment.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">


                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">IT Sales Engineer</h3>
                                </div>
                                <p><strong>Salary :</strong> ₹5,00,000 per year</p>
                                <p><strong>Location of Job :</strong> Hyderabad - India</p>
                                <br />
                                <h4>Detailed Job Description:</h4>

                                <p><strong>Summary of role:</strong></p>
                                <p>
                                    We are seeking an experienced IT Sales Engineer to join our sales team. The ideal candidate will have a strong technical background and excellent communication skills, with the ability to understand customer needs and handle sales of IT products and services. The IT Sales Engineer will work closely with the sales team to identify new business opportunities, develop and deliver sales presentations, and provide support to customers.
                                </p>
                                <br />
                                <p><strong>Key Responsibilities:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborate with sales team to identify new business opportunities and develop sales strategies</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Conduct sales presentations, product demonstrations, and proof-of-concepts for customers
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Gather details for technical support and solutions from customers and share with the technical support team
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Develop and maintain strong relationships with customers, partners, and internal stakeholders
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Stay up-to-date with industry trends, competitor activity, and emerging technologies
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Create and deliver sales enablement materials, such as sales sheets, case studies, and whitepapers
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Meet and exceed sales targets, including revenue and customer acquisition goals
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'><strong>Requirements:
                                </strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Any Suitable Bachelor's degree with 3+ years of experience in IT sales engineering or related field</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Adequate technical knowledge of IT products and solutions, including hardware, software, and services</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Excellent communication, presentation, and interpersonal skills</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to understand customer needs and provide tailored solutions</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong problem-solving and marketing skills</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> India driving license</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Travel within India as required</div>
                                        </div>
                                    </div>
                                </div>

                                <p className='mt-4'>
                                    <strong>What We Offer: </strong>
                                </p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Basic salary and attractive incentive structure</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ongoing training and professional development opportunities </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborative and dynamic work environment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div className="contact__two-right">
                            <Title level={isMobile ? 3 : 2}>Apply for Job</Title> <br />
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
                                            <Input className='p-3' type="text" name="JobTitle" onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title"
                                                style={{ paddingRight: '40px' }} />
                                        </Col>

                                        <Col xs={24} md={12}>
                                            <Input type="file" style={{ height: "55.33px", paddingTop: "12px" }} name="my_file" onChange={(e) => setFile(e.target.files[0])} />
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
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    );
}
