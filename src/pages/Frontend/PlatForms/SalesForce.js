import React from 'react';
import img from "../../../assets/images/salesforce.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function SalesForce() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Salesforce
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Our company and Salesforce deliver joint solutions designed to leverage artificial intelligence and enable companies to make smarter decisions, faster than ever before.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Salesforce Consulting from Bluewolf</p>
            <p>
                Bluewolf, a Company, has formed a new practice to help clients rapidly deploy the combined Watson and Salesforce Einstein capabilities. This new unit capitalizes on Bluewolf's over fifteen years of Salesforce implementations and their current portfolio of multiple Salesforce and Watson projects. Bluewolf will also develop new industry-specific accelerators for use by enterprise clients to accelerate adoption of cognitive applications.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Cloud Integration for Salesforce</p>
            <p>
                Bring together on premise enterprise and cloud data with specialized integration products for Salesforce, surfacing that data directly within the Salesforce Intelligent Customer Success Platform.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Watson and Salesforce Einstein Integration</p>
            <p>
                Integrate our Watson APIs into Salesforce to bring predictive insights from unstructured data inside or outside an enterprise, together with predictive insights from customer data delivered by Salesforce Einstein, enabling smarter, faster decisions across sales, service, marketing, commerce and more.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Salesforce IoT Cloud Consulting</p>
            <p>
                Enhance the customer experience, improve customer loyalty and drive revenue growth for your products on a platform that connects to customers directly with personalized content and offers.
            </p>

        </div >
    )
}
