import React from 'react';
import img from "../../../assets/images/cloudmigration.jpeg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function CloudMigration() {
    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "20px auto" }}>
            <Title level={2} style={{  marginBottom: "20px" }}>
                Cloud Migration & Management
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
                <b>Cloud Migration & Management:</b> Our Cloud Migration and Management services are designed to help businesses seamlessly transition their IT workloads to cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). By migrating to the cloud, businesses can benefit from increased scalability, flexibility, cost savings, and enhanced security, while freeing up internal resources to focus on core business operations.
            </p>

            <p style={{ color: "#0185c3", fontSize: "1.25rem", paddingTop: "1rem" }}>
                ═══ Services Offered:
            </p>

            <p>
                <b>Infrastructure Setup in the Cloud Workloads:</b> We provide complete infrastructure setup for your business in the cloud, including servers, storage, networking, and security. Our experts ensure that your cloud architecture is designed for optimal performance, scalability, and reliability.
            </p>

            <p>
                <b>Migration:</b> We handle the end-to-end process of migrating your existing applications, databases, and data from on-premises or other hosting environments to the cloud. Our migration process is efficient, minimizing downtime, and ensuring that your data and systems are securely transferred to the cloud.
            </p>

            <p>
                <b>Cloud Security:</b> Security is a top priority in any cloud environment. We implement robust cloud security measures, including encryption, identity management, and access control, to ensure that your data and applications are protected against cyber threats and unauthorized access.
            </p>

            <p>
                <b>VPN or ExpressRoute to Cloud:</b> To ensure secure and high-performance connectivity to the cloud, we offer VPN (Virtual Private Network) or ExpressRoute services. These provide private, secure connections to the cloud that bypass the public internet, resulting in lower latency and higher reliability.
            </p>

            <p>
                <b>Firewalls & Load Balancers:</b> We provide advanced firewall services to protect your cloud infrastructure from external threats. Load balancers are used to distribute incoming traffic across multiple servers to ensure high availability and reliability of your applications.
            </p>

            <p>
                <b>Cost Monitoring and Optimization:</b> Managing cloud costs effectively is crucial for businesses. We provide detailed cost monitoring and optimization services, ensuring that your cloud resources are used efficiently, reducing unnecessary expenses, and offering suggestions for cost-effective resource allocation.
            </p>

            <p>
                <b>Azure Identity and Access Management (IAM):</b> For Microsoft Azure users, we offer Identity and Access Management (IAM) solutions that provide fine-grained access control, ensuring that only authorized users can access specific cloud resources. This improves security and helps with compliance requirements.
            </p>
        </div>
    );
}
