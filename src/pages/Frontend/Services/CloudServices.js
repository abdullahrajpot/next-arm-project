import React from 'react';
import img from "../../../assets/images/CaaS.jpg";
import { Image, Typography } from 'antd';

const { Title } = Typography;

export default function CloudServices() {

  return (
    <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "20px auto" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>
        Cloud Services
      </Title>
      <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }}
      />
      <p>
        Our cloud services are designed to offer businesses enhanced flexibility, scalability, and cost efficiency by leveraging cloud-based infrastructure and solutions. We help businesses transition to the cloud smoothly and efficiently, reducing the complexity of managing on-premise systems.
      </p>
      <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Features We Offer</p>

      <p>
        <b>Cloud Migration:</b> We provide seamless cloud migration services, ensuring that your data, applications, and workloads are transferred to the cloud without disruption to your business operations. This includes strategy development, execution, and support throughout the migration process.<br />
        <b>Cloud Hosting:</b> Our cloud hosting solutions ensure that your business applications and websites are always available and can scale as needed. We utilize top-tier cloud platforms like AWS, Google Cloud, and Microsoft Azure to offer fast, secure, and reliable hosting.<br />
        <b>Cloud Management:</b> Managing cloud environments can be complex. We offer end-to-end cloud management services, which include performance monitoring, security management, and cost optimization. Our team ensures that your cloud infrastructure runs smoothly while aligning with your business goals.
      </p>

      <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>
        ═══ Why Choose Us?
      </p>

      <p>
        Expertise in leading cloud platforms<br />
        Cost-effective cloud solutions<br />
        Guaranteed uptime and performance<br />
        Scalable solutions to grow with your business
      </p>

      {/* <Image src={cloud_vedio}></Image> */}
    </div>
  );
}
