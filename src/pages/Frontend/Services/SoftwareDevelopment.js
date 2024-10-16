import React from 'react';
import img from "../../../assets/images/software.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function SoftwareDevelopment() {
    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "20px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Software Development & Automation
            </Title>
            <img
                src={img}
                alt="img"
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "auto",
                    marginBottom: "20px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            />

            <p>
                <b>Software Development & Automation:</b> At NextARM, we specialize in providing custom software development solutions tailored to meet your business needs. By leveraging automation and advanced software solutions, we help businesses enhance their efficiency, productivity, and collaboration. Our development services streamline business processes, automate routine tasks, and improve overall workflow, allowing your team to focus on more strategic initiatives.
            </p>

            <p style={{ color: "#0185c3", fontSize: "1.25rem", paddingTop: "1rem" }}>
                ═══ Our Approach:
            </p>
            <p>
                <b>Collaboration with Clients:</b> We work closely with your team to understand your specific requirements, challenges, and business objectives. This collaborative approach ensures that the software we develop is aligned with your business goals and offers tangible improvements.
            </p>
            <p>
                <b>Latest Technologies & Best Practices:</b> We use cutting-edge technologies, frameworks, and industry best practices to develop software that is not only scalable but also secure and user-friendly.
            </p>

            <p style={{ color: "#0185c3", fontSize: "1.25rem", paddingTop: "1rem" }}>
                ═══ Key Solutions We Provide:
            </p>
            <p>
                <b>ERP Solutions:</b> Our Enterprise Resource Planning (ERP) solutions help businesses manage and integrate their core processes, such as finance, supply chain, operations, and human resources, in a unified system. With a custom-built ERP solution, businesses can enhance visibility into their operations, improve data accuracy, and make data-driven decisions.
            </p>
            <p>
                <b>Cybersecurity Solutions:</b> We offer a wide range of cybersecurity solutions to protect your software systems from cyber threats. This includes securing sensitive business data, preventing unauthorized access, and ensuring compliance with industry regulations. Our team implements robust security protocols and continuous monitoring to safeguard your systems.
            </p>
            <p>
                <b>E-Commerce Site Development with Payment Gateway Integrations:</b> We build custom e-commerce websites that offer seamless shopping experiences for your customers. Our solutions include secure payment gateway integrations to ensure that your online transactions are safe and reliable. We also provide features such as product catalogs, shopping carts, and customer management.
            </p>
            <p>
                <b>Website Development & Hosting:</b> In addition to custom software development, we offer full-service website development and hosting solutions. Our team designs and develops websites that are visually appealing, mobile-responsive, and optimized for performance. We also handle the hosting of your website, ensuring high availability, speed, and security.
            </p>
        </div>
    );
}
