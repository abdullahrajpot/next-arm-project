import React from 'react';
import img from "../../../assets/images/devops.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function DevOps() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                DevOps
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══  Take control of your digital future with DevOps</p>
            <p>
                DevOps has emerged as an end-to-end IT delivery approach that makes business change faster, more flexible and more reliable. It removes cultural and organizational silos between key stakeholders and introduces a high degree of process integration and tooling automation within IT environments. NextArm helps clients in their DevOps transformation journey to become high-performing agile organizations.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Become a Digital Disrupter in your Market</p>
            <p>
                As a trusted DevOps expert and change agent, we help clients in their DevOps transformation journey to become high-performing agile organizations. We offer a wide breadth of services—from DevOps education and awareness to maturity and gap assessments, to transformation roadmaps. We can drive the implementation of a multi-dimensional roadmap by establishing and staffing Centers of Enablement (CoE) and tailoring and administering iterative and agile change programs. In addition, we can provide DevOps as a partial or fully managed service, including as part of IT outsourcing engagements.
            </p>
            <p>
                We work closely with clients locally, but also offer the strength of global scale and experience. We bring a proven in-depth and hands-on agile and iterative approach to DevOps transformation. We also have a suite of accelerators, such as a multi-dimensional DevOps maturity model, a DevOps reference blueprint and a proven four-step iterative transformation approach. All of this is supported by our time-tested Management Foundation. In fact, this is how we run our own business and IP portfolio. Our DevOps experts and coaches have years of practical experience in driving successful cultural, process, architectural and technology change.
            </p>

        </div >
    )
}
