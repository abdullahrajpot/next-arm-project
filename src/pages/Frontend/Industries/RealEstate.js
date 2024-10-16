import React from 'react';
import img from "../../../assets/images/real estate.jpeg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function RealEstate() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Real Estate
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
            At NextARM Technologies, we stand at the forefront of technological innovation as one of the most experienced development companies. Renowned for our unparalleled skillset and mastery of cutting-edge technologies, we have cultivated a legacy of excellence that sets us apart in the digital landscape.
            </p>
            <p>
            With an illustrious track record, we have collaborated with major companies and government agencies across the UAE, solidifying our reputation as dependable and quality-driven specialists. Our journey is defined by our commitment to crafting solutions that transcend expectations, with every project serving as a testament to our unwavering dedication.
            </p>
            <p>
            In line with our commitment to excellence, we have extended our services to cater to the real estate industry. Our comprehensive offerings include:
            </p>
           
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> <b>Mobile App Development:</b>  Crafting intuitive and powerful mobile applications that captivate your audience and drive engagement.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> <b>Website Design and Development: </b> Creating visually stunning websites seamlessly merge aesthetics with functionality.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> <b>Property Management System: </b> Streamlining property management processes through innovative software solutions.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> <b>Virtual and Augmented Reality Development: </b>  Pushing the boundaries of reality to deliver immersive experiences that captivate and engage.
            </p>
            <p>
                <span style={{ color: "#0185c3" }}>✓</span> <b>Property CRM: </b>  Providing a dedicated customer relationship management system tailored for the real estate industry.
            </p>
            
        </div >
    )
}
