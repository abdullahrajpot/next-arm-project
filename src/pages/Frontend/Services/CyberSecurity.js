import React from 'react';
import img from "../../../assets/images/cybersecurity.jpeg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function CyberSecurity() {
  return (
    <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "20px auto" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>
        Cyber Security
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
        <b>Cybersecurity:</b> In today's digital age, protecting your business from cyber threats is critical. We provide comprehensive cybersecurity services designed to safeguard your digital assets, protect sensitive information, and ensure business continuity in the face of ever-evolving cyber threats.
      </p>

      <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>
        ═══ Features We Offer
      </p>

      <p>
        <b>Security Assessments and Audits:</b> We conduct thorough security audits to identify vulnerabilities in your IT infrastructure, networks, and systems. These assessments help to uncover potential risks and weaknesses that could be exploited by cyber attackers.<br />
        <b>Threat Detection and Response:</b> Using advanced threat detection technologies, we monitor your systems 24/7 for any signs of malicious activity. If a threat is detected, we take immediate action to mitigate the risks and prevent data breaches or system compromises.<br />
        <b>Network and Endpoint Security:</b> We secure your network and connected devices with robust firewall protection, intrusion detection systems (IDS), and endpoint security solutions. This ensures that your entire IT environment is protected against both external and internal threats.<br />
        <b>Data Encryption and Backup Solutions:</b> To protect sensitive information, we offer data encryption services to ensure that your data is secure both at rest and in transit. Additionally, we provide reliable backup solutions to safeguard your critical business data in case of accidental loss or ransomware attacks.
      </p>

      <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>
        ═══ Why Choose Us?
      </p>

      <p>
        Proactive security measures to prevent cyber attacks<br />
        Continuous monitoring and rapid incident response<br />
        Expertise in handling compliance and regulatory requirements<br />
        Comprehensive security solutions tailored to your business
      </p>
    </div>
  );
}
