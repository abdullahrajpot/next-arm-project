import React, { useEffect } from 'react';
import img from "../../../assets/images/insurance.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Insure() {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Insurance
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Banking and Financial ServiceBanking and Financial ServiceInsurers are in cross-road to deal with key challenges like new entrants disrupting the business model pressurizing to adopt newer technologies, complex IT landscape impeding the release of new products to market. Lesser productivity due to redundant processes, increasing operational costs, fraudulent practices and regulatory changes are the other major hurdles for these organizations.
            </p>
            <p>
                We are a leading global IT solution partner has proven expertise to tackle these challenges, with its strong technology and engineering capabilities along with business and domain knowledge.
            </p>
            <p>
                Our company is supporting its life insurance clients in their transformation journey to become a Leading Next gen Insurer, through:
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Unique Business-Aligned IT (BAIT) model to provide best-fit life insurance solutions while considering the associated impacts
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Collaborative approach that improves clients' performance while significantly containing costs
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Centers of Excellence (CoE) to support in building, creating differentiated assets for its partner's product - accelerating time-to-market
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Invest in developing IPs and market-leading innovative insurance solutions.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Disrupt to remove the inefficiency in the technology/IT landscape to make it perform better.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> Enable and commit to its relationship through its core DNA: 'Ideapreneurship' culture that enables every employee working for its client to focus on value creation.
            </p>
            <p>
                Our insurance services have garnered industry-wide recognition with over 100+ clients successfully served in 31 countries. we have also been awarded "Excellence in Insurance Education" by LOMA for the 8th time. Our insurance software solutions have received Gartner's highest rating of "Mature" in delivering ITO services to both Life Insurance and P&C Insurance customers.
            </p>

        </div >
    )
}
