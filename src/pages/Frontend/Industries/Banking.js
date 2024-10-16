import React from 'react';
import img from "../../../assets/images/banking-financial.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Banking() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Banking & Financial
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Enjoy cost savings while providing the best possible experience for employees and customers when you choose our banking solution. Our integration environment empowers you to deliver new solutions and services more quickly and efficiently, creating a truly unified cross-channel customer experience.
            </p>
            <p>
                Financial institutions need the agility to react quickly to rapidly changing technology, new competitors and rising customer expectations. To help you keep pace and continue delivering the satisfying experiences customers demand, we employ a unique approach to integration and are quickly advancing our open banking strategy.
            </p>
            <p>
                Our integration environment and commitment to openness help financial institutions gain significant efficiencies, better leverage the information in their enterprises and introduce new technology to their customers more quickly than ever. Your Repa partnership helps you remain competitive, differentiate in the market and grow your business.
            </p>
            <p>
                Business agility: Partnering with us enables banks to efficiently manage all the necessary, day-to-day activities and focus on building customer relationships.
            </p>
            <p>
                Customer experience: The ability to provide an exceptional experience helps you retain current customers, attract new ones and expand customers' relationships with your financial institution.
            </p>
            <p>
                Intuitive solutions: Effective tools that increase employee satisfaction and customer engagement.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Features</p>
            <p>
                Our company partnership provides comprehensive and integrated banking solutions that address every aspect of your performance and growth concerns. You gain:
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Industry-leading technology that helps you keep pace with growing expectations
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Access to a wealth of banking expertise to help you plan for the future
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Commitment to your success and growth
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Thousands of financial institutions rely on us to help them deliver essential financial services to their customers.
            </p>
            <p>
                From account processing and a wide range of payment services to solutions that enable them to mitigate and manage risk and more efficiently manage the channels through which their services are delivered, our clients look to us for innovative solutions and expertise.
            </p>

        </div >
    )
}
