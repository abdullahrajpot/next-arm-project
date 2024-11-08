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
                            <div className="news__details-left rounded-2 p-5 mb-4" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">ANALYST DEVELOPER</h3>
                                </div>
                                <p><strong>Job Title :</strong> Analyst Developer</p>
                                <p><strong>Salary :</strong> €35,000 - 40,000 Per Annum</p>
                                <p><strong>Job Type :</strong> Permanent</p>
                                <p><strong>Location of Job :</strong> Nottingham/Hybrid</p>
                                <br />
                                <p><strong>Company background:</strong></p>
                                <p>NextArm is a global IT services company focusing on Enterprise solutions and integration services consulting (SAP), software development, product solutions, various testing solutions and IT consulting services offering to enterprises worldwide.</p>
                                <br />
                                <p>NextArm specializes in the rapid development of bespoke software systems for start-up and fast moving businesses. We work closely with clients to develop business ideas and turn them into working software. Modern businesses recognize the need for continuous improvements rather than large, discrete projects.</p>
                                <br />
                                <h4>Detailed Job Description:</h4>

                                <p><strong>Summary of role:</strong></p>
                                <p>Software developers who are excited about solving new problems. As a developer, work across the technical landscape from front & backend (HTML5 / JS / CSS) to architectural and business logic in various environments including Java/ .net / Oracle/ SQL.</p>
                                <p>We are looking for someone with a proven record of experience building scalable web applications and a vision for developing the technical products of the future.</p>
                                <br />
                                <p><strong>Skills required:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Object-oriented best practices and software designs patterns.</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Software architecture for websites, back office transactional systems and APIs (REST)</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Experience with Agile teams and working in sprint cycles</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Deploy and maintain apache and/or nginx based web applications</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Experience in deploying web portals using JavaScript, HTML5</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Assist with end-user support and Web application support</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Define and recommend policies and procedures for system and services use</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Experience with shell scripting in one or more of the following languages: Bash, Python, Ruby, Perl, and PHP.</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Strong software troubleshooting skills</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Understanding of / Experience with DevOps a plus</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Willingness to research, learn and adapt, attend trainings</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Understanding and working knowledge of SDLC and its application</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Strong experience in testing web applications and its functions to the maximum level.</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Nice to have knowledge of developing APIs for iOS/Android</div>
                                            <div><i className="fa fa-check " style={{ color: 'green' }}></i> Hours - 37.5 to 40 hours per week.</div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p>An equal opportunities statement is recommended, potentially together with a specific welcome statement, for example, highlighting your desire for applications from individuals who are under-represented in the business.</p>
                            </div>

                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">Software Engineer</h3>
                                </div>
                                <p><strong>Job Title :</strong>Software Engineer</p>
                                <p><strong>Salary :</strong> €33,000 - 38,000 Per Annum</p>
                                <p><strong>Job Type :</strong> Permanent</p>
                                <p><strong>Location of Job :</strong> Nottingham/Hybrid</p>
                                <br />
                                <p><strong>Company background:</strong></p>
                                <p>NextArm is a global IT services company focusing on Enterprise solutions and integration services consulting (SAP), software development, product solutions, various testing solutions and IT consulting services offering to enterprises worldwide.</p>
                                <br />
                                <p>NextArm specializes in the rapid development of bespoke software systems for start-up and fast moving businesses. We work closely with clients to develop business ideas and turn them into working software. Modern businesses recognize the need for continuous improvements rather than large, discrete projects.</p>
                                <br />
                                <h4>Detailed Job Description:</h4>

                                <p><strong>Summary of role:</strong></p>
                                <p>This is an exciting opportunity to join our Software Engineering Practice as a Data Modeller, to work alongside our team and help build our Data Engineering capability. We are looking for someone with prior experience in Data Modelling, who is passionate about their work and can adapt to working within a versatile team, as well as having the ability to work closely with internal stakeholders and clients.</p>
                                <p>Our team is our strongest asset; you will be an excellent team player who recognises the strength of the team as a whole and can find their role within the PNS team.</p>
                                <br />
                                <p><strong>Skills required:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Extensive experience of Data Modelling</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience in understanding data and metadata</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Applied experience of ETL tools (e.g. Informatica) and SQL/noSQL databases</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with one of the following - Azure/AWS/GCP</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with Business Glossary tools (e.g. Collibra)</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of TDD/BDD</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience working in an Agile development environment</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Some experience in identity management and synchronisation</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with Visio, Excel, Confluence, GDS Framework would be an advantage</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with shell scripting in one or more of the following languages: Bash, Python, Ruby, Perl, PHP.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong software troubleshooting skills</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Understanding of / Experience with DevOps a plus</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Willingness to research, learn and adapt, attend trainings</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Understanding and working knowledge of SDLC and its application</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong experience in testing web applications and its functions to the maximum level.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Nice to have knowledge of developing APIs for iOS/Android</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Hours - 37.5 to 40 hours per week.</div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p>An equal opportunities statement is recommended, potentially together with a specific welcome statement, for example, highlighting your desire for applications from individuals who are under-represented in the business.</p>
                            </div>

                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">IT Sales Engineer</h3>
                                </div>
                                <p><strong>Location of Job :</strong> United Arab Emirates</p>
                                <br />
                                <p>
                                    We are seeking an experienced IT Sales Engineer to join our sales team. The ideal candidate will have a strong technical background and excellent communication skills, with the ability to understand customer needs and handle sales of IT products and services. The IT Sales Engineer will work closely with the sales team to identify new business opportunities, develop and deliver sales presentations, and provide support to customers.
                                </p>
                                <br />
                                <h4>Key Responsibilites:</h4>
                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborate with sales team to identify new business opportunities and develop sales strategies</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Conduct sales presentations, product demonstrations, and proof-of-concepts for customers</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Gather details for technical support and solutions from customers and share with the technical support team</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Develop and maintain strong relationships with customers, partners, and internal stakeholders</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Stay up-to-date with industry trends, competitor activity, and emerging technologies</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Create and deliver sales enablement materials, such as sales sheets, case studies, and whitepapers</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Meet and exceed sales targets, including revenue and customer acquisition goals</div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p><strong>Requirements:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Any Suitable Bachelor's degree with 3+ years of experience in IT sales engineering or related field</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Adequate technical knowledge of IT products and solutions, including hardware, software, and services</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Excellent communication, presentation, and interpersonal skills</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to understand customer needs and provide tailored solutions</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong problem-solving and marketing skills</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> UAE driving license</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Travel within UAE as required</div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <p><strong>What We Offer:</strong></p>
                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Basic salary and attractive incentive structure</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ongoing training and professional development opportunities</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborative and dynamic work environment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">Java Developer</h3>
                                </div>
                                <p><strong>Location of Job :</strong> United Arab Emirates</p>
                                <br />
                                <p>
                                    We are seeking an experienced Java Developer to join our Development team. The ideal candidate will have a strong technical background and excellent communication skills, with the ability to understand customer needs and handle development of IT products and services. The Java Developer will work closely with the Development team to develop and deliver high-tech solutions, and provide technical support to clients.
                                </p>
                                <br />
                                <h4>Key Responsibilites:</h4>
                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience customizing workflows and integration with other enterprise systems.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Demonstrated experience with Java and related technologies.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Working knowledge and understanding of the following: RESTful web services, JSON, Git, Maven.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to write complex programs, analyze code changes and make suggestions to improve code complexity for maintainability and scalability.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to reason logically and creatively, identifying problems, drawing valid conclusions from the data available, and developing effective solutions while applying creative thinking in the design and development of high-performing web applications.</div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p><strong>Requirements:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> 5+ years of experience in the Java development field</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Bachelor's degree in Computer Science, Engineering, or a related subject</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> FinTech / Financial sector experience is preferable</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Goal oriented and self-motivated.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Candidate must have the ability to work independently or within a team environment.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong oral and written communications skills with the ability to create software design and engineering documents.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to multi-task and deliver high-quality work under tight deadlines is essential.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to work in a fast-paced environment is crucial.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ability to learn, excel and deliver at a quick pace is required.</div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <br />
                                <p><strong>Technical skills:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experienced Java Developer with knowledge in web framework-based development and Internet technologies</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Strong knowledge of OOP, Design Patterns, Data Structure, Algorithms</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ideal candidate should have hands-on experience in the following: public-facing webapplication development using JAVA and open-source technologies, tools, and APIs Ex.: Spring /Boot stack, Servlets, JSF, JSP, RESTful web services, JDBC, XML, Git, Maven, DevOps, Jenkins, SonarQube. Additional web technologies experience is a plus.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Reporting framework, Jasper, BIRT, …</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Maven, Subversion SVN, GIT, and JUnit</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of Jira.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of the Linux command line.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of SQL/PL-SQL and Oracle database development (packages, stored procedures, triggers) is a plus.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with applications servers: WebLogic, Tomcat.</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Knowledge of JBPM, Web Development is a plus.</div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <p><strong>What We Offer:</strong></p>
                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Attractive salary. Visa and other standard facilities will be provided</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ongoing training and professional development opportunities</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborative and dynamic work environment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news__details-left rounded-2 mb-4 p-5" style={{ backgroundColor: 'rgba(235,235,235,.5)' }}>
                                <div className="news__details-left-meta">
                                    <h3 className="mt-20">Cyber Expert</h3>
                                </div>
                                <p><strong>Job Title :</strong> Application Security Specialist                                </p>
                                <p><strong>Salary :</strong> €33,000 - 38,000 Per Annum</p>
                                <p><strong>Job Type :</strong> Full-Time                                </p>
                                <p><strong>Location of Job :</strong> Nottingham/Hybrid</p>
                                <br />
                                <p><strong>Company background:</strong></p>
                                <p>NextArm is a global IT services company focusing on Enterprise solutions and integration services consulting (SAP), software development, product solutions, various testing solutions and IT consulting services offering to enterprises worldwide.</p>
                                <br />
                                <p>NextArm specializes in the rapid development of bespoke software systems for start-up and fast moving businesses. We work closely with clients to develop business ideas and turn them into working software. Modern businesses recognize the need for continuous improvements rather than large, discrete projects.</p>
                                <br />
                                <h4>Detailed Job Description:</h4>

                                <p><strong>Summary of role:</strong></p>
                                <p>We are looking for an experienced Application Security Specialist to join our security team. The candidate will be responsible for embedding security into the Software Development Life Cycle (SDLC), performing secure code reviews, ensuring the security of APIs, and working closely with development teams to mitigate application security vulnerabilities. The role involves working with cross-functional teams to drive secure coding practices, vulnerability remediation, and API protection measures.</p>

                                <p>Our team is our strongest asset; you will be an excellent team player who recognises the strength of the team as a whole and can find their role within the PNS team.</p>
                                <br />
                                <p><strong>Key Responsibilities:</strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Integrate security into the SDLC by providing security requirements and reviewing architecture and design plans.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Conduct secure code reviews, identifying security flaws and recommending fixes.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Perform security assessments and penetration testing of web applications, mobile applications, and APIs.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ensure security best practices are followed in API development, including proper authentication, authorization, data validation, and encryption.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Collaborate with development, DevOps, and QA teams to promote secure coding standards (OWASP, SANS Top 25).
                                                (e.g. Collibra)</div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Work with developers to implement secure coding practices and conduct training sessions on secure development methodologies.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Review third-party libraries and APIs for security risks and ensure compliance with organizational security policies.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Lead efforts to identify and remediate application vulnerabilities such as SQL injection, XSS, CSRF, SSRF, authentication bypasses, etc.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Analyze static and dynamic code scans using SAST and DAST tools (e.g., Fortify, SonarQube, Veracode).
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Define and implement API security policies such as rate limiting, input validation, and token management.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Assist with the creation of threat models and perform risk assessments for new applications or services.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Ensure compliance with security frameworks like OWASP, NIST, and regulatory requirements such as PCI-DSS, GDPR, and HIPAA.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Assist in incident response efforts involving application and API security breaches.
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Collaborate with product teams to review security in CI/CD pipelines.
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'><strong>Qualifications:
                                </strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>Bachelor's degree in Computer Science, Cybersecurity, Information Technology, or a related field (preferred).

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> 5+ years of experience in application security or software development with a focus on security.

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Strong understanding of secure software development practices, especially in modern web and mobile environments.

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with OWASP Top 10, SANS Top 25, and other application security guidelines.

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Hands-on experience with security tools for static code analysis (SAST), dynamic application security testing (DAST), and interactive application security testing (IAST).
                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Knowledge of secure API design and security practices (OAuth2, JWT, TLS).

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Proficiency in scripting languages (e.g., Python, JavaScript) and familiarity with secure coding in languages such as Java, .NET, or Go.

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Experience with container security and cloud-native application security (e.g., Docker, Kubernetes, AWS, Azure).

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>Familiarity with CI/CD pipeline tools and DevSecOps practices.

                                            </div>


                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'><strong>
                                    Certifications (preferred):

                                </strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>Certified Ethical Hacker (CEH)


                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Certified Secure Software Lifecycle Professional (CSSLP)


                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Certified Information Systems Security Professional (CISSP)


                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> CompTIA PenTest+
                                            </div>



                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'><strong>
                                    Preferred Skills:


                                </strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>Strong experience in threat modeling, risk assessments, and secure software design.



                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Deep knowledge of API security, REST, SOAP, and GraphQL.



                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Familiarity with containerized applications, microservices security, and serverless environments.


                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Excellent communication and collaboration skills with the ability to influence development teams.

                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Ability to conduct application security training and workshops for developers.


                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i> Experience with automation of security in CI/CD environments.

                                            </div>



                                        </div>
                                    </div>
                                </div>


                                <p className='mt-4'><strong>
                                    What We Offer:


                                </strong></p>

                                <div className="services__details-left-content-list">
                                    <div className="row">
                                        <div className="col-sm-12 sm-mb-15">
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>Competitive salary and performance bonuses.




                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Access to ongoing training and certification opportunities.




                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Collaborative and flexible working environment.



                                            </div>
                                            <div><i className="fa fa-check" style={{ color: 'green' }}></i>
                                                Work with modern technologies and cutting-edge security challenges.


                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <br />
                                <p>This JD focuses on application security in SDLC, code review, and API security. It can be further customized to reflect your company’s unique requirements or technology stack.</p>
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
                                            <Input type="file" style={{height:"55.33px",paddingTop:"12px"}}  name="my_file" onChange={(e) => setFile(e.target.files[0])} />
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
