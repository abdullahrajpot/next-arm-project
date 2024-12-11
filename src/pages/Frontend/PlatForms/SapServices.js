import React from 'react';
import img from "../../../assets/images/sap-services.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function SapServices() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                SAP Services
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Our company and SAP work together to create customized solutions that increase customer value, enhance the customer experience and establish your presence in the digital economy.
            </p>
            <p>
                As a growing ERP Solutions provider, now in our eighth year of operations, and allied with SAP to bring Human Capital Management Solutions (HCM) to market. We enable small, medium and large enterprises to realize the potential and value of their investment quicker and more efficiently.
            </p>
            <p>
                At NextArm we are professionals with an impeccable pedigree and vast experience in implementing SAP projects and managing off-shore delivery services. Our management team is comprised of individuals who have led delivery teams at multi-national corporations and have an impressive record of delivering services with a strong value proposition.
            </p>
            <p>
                We at NextArm are uniquely placed to help you navigate the ERP landscape safely and successfully. Our full range of consulting services and delivery expertise coupled with proven methodologies guide your ERP solution design, development and integration.
            </p>
            <p>
                The SAP HR software offers businesses and industries automation, standardization, streamlining and increased control over cost and legal compliance. The SAP HR software suite includes several modules, such as core HR and Payroll, talent management, workforce planning and analysis, mobile HR solutions, HR for small and medium enterprises and cloud-computing for Internet-based management and integration of all HR software modules.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Services For SAP Applications</p>
            <p>
                Consulting services for SAP S/4HANA
            </p>
            <p>
                SAP S/4HANA is an in-memory business suite that delivers simple enterprise functions in the digital landscape. Our company provides consulting and implementation services for SAP S/4HANA to speed adoption and accelerate your transformation.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Services for SAP C/4HANA</p>
            <p>
                Do you want to deliver exceptional customer experiences? Offer solutions that engage customers in relevant, meaningful and timely ways across all channels and industries? Our company and SAP can help you in driving better client relationships by designing strategies and solutions that can make marketing, sales and service come together.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Services for SAP Ariba</p>
            <p>
                From consultation through the implementation of SAP Ariba, we are your partner for digitally reinventing your procurement operations. Enjoy benefits like more effective sourcing events, reduced rogue spend, a more manageable contracting process, and a modernized and efficient procurement operation.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Services for Managed SAP Applications</p>
            <p>
                We help manage and monitor your operating systems, databases and SAP applications on both physical and virtual servers using cutting-edge cloud infrastructure technology and a worldwide team of experienced professionals. Our Cloud for SAP Applications runs on data centers located around the world with high-speed networks.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Managed SAP Applications</p>
            <p>
                PNS Info Limited helps manage and monitor your operating systems, databases and SAP applications on both physical and virtual servers using cutting-edge cloud infrastructure technology and a worldwide team of experienced professionals. Our Cloud for SAP Applications runs on data centers located around the world with high-speed networks.
            </p>
            <p>
                SAP Hana on our Power Servers
            </p>
            <p>
                Are you ready to run an in-memory database with more efficiency, power and speed? Our company and SAP offer customers the ability to run SAP HANA on our Power Systems. Get the most out of your database—at a lower cost of ownership—with highly relevant, actionable analytics.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Retail SAP Solutions</p>
            <p>
                With the right retail platform, businesses can turn raw data into actionable intelligence. Retailers around the world are turning to NextArm and SAP to help build that platform.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══   Consumer Products SAP Solutions</p>
            <p>
                Are you responding to your consumers' unique business and product requirements? Our company and SAP have combined to deliver consumer products that encompass a range of capabilities—including trade promotion management, new product development and customer loyalty management.
            </p>

        </div >
    )
}
