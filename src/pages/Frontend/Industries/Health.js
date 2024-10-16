import React from 'react';
import img from "../../../assets/images/health-care.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Health() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Health Care
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Globally, healthcare enterprises including providers and payers are constantly striving to achieve three major objectives: Improve patient care experience, optimize health outcomes and reduce healthcare costs through healthcare consulting.
            </p>
            <p>
                With managing health outcomes as a central theme, healthcare organizations are striving to drive synergies in cost reduction, operational efficiency and delivery of care. However, for healthcare organizations to realize the triple aim, it is important to address the inherent challenges of modernizing technology systems that have grown in an unstructured manner over a period of time. The challenges for healthcare consulting also include the need for integration of disparate systems, processes and people along with optimization of interaction/touch points to enable seamless communication between different stakeholders.
            </p>
            <p>
                Simultaneously, the healthcare industry has to navigate the ever-changing regulatory framework. From ICD-10 migration and meaningful use of health information technology to the Affordable Care Act (ACA) and American Healthcare Act (AHCA), there is no respite for health management systems as they continue to invest significant time and money to keep pace with regulatory mandates. This is besides several other Medicare and Medicaid reforms such as MACRA that demand healthcare organizations to do "more for less".
            </p>
            <p>
                This new normal requires significant investments in additional capabilities while also deflating the cost curve. Consequently, an ideal new age IT vendor therefore should have the acumen to understand how business processes and technology can be aligned to enable the patient centricity efforts of payers and providers.
            </p>
            <p>
                As a technology leader in healthcare consulting, we are always at the cutting edge of the quest to continuously improve on best practices in healthcare IT consulting services. Our enterprise medical services have helped our customers to meet their Triple Aim goals while maximizing their Return on Investment (RoI).
            </p>


        </div >
    )
}
