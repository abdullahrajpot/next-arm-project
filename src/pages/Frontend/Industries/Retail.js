import React from 'react';
import img from "../../../assets/images/retail-consumer.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Retail() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Retail & Consumer
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />


            <p>Digitally enabling a best-in-class customer experience</p>

            <p>We help organizations digitally transform to provide seamless omni-channel customer experiences, enhance personalization and meet customer expectations for new offers, products and services.</p>

            <p>Retail and consumer services organizations continue to operate in a highly competitive and complex environment in which digital strategies are key to transforming the customer experience and delivering more value. However, the 2019 Repa Client Global Insights reveal that only 11% of retail and consumer services executives interviewed are producing results from their digital strategies</p>

            <p>We believe that delivering value requires a comprehensive end-to-end approach across the retail value chain—one that balances business agility and cultural change management, fundamental systems integration capabilities, and IT management approaches that are built on sustained and relevant innovation.</p>

            <p>Meet with our experts during NRF 2020 to learn more about our unique approach to digital transformation and explore some of our flagship solutions and innovations that are driving the future of retail. This year, we also invite you to join our private roundtables to share and discuss your specific topics of interest with industry peers.</p>

            <p>Become more customer-centric with our company Retail Xp360 platform.</p>

            <p> Developed at our company Retail and Consumer Services Innovation Center, Repa Retail Xp360 is an innovative, customer-centric and modular cloud platform that enables retail and consumer services organizations to provide a personalized, real-time and seamless customer and employee experience. The latest version of the solution includes features that enhance point-of-sale services and management and enable personalized prices and promotions. Meet us at the NRF Innovation Lab (Level 4) to learn more.</p>

            <p> Optimize operations and support sales with innovative solutions</p>

            <p> With the rise of omni - channel, dynamic pricing management has become a growing challenge for retailers.To support sales while meeting customer expectations, they need to jointly manage online and in -store prices in real time and provide timely and accurate product and service information.Careful shelf space monitoring can improve on - shelf availability and optimize shelf management through data analytics to achieve insight - led business outcomes.</p>

            <p>Join our experts at the NRF Innovation Lab(Level 4) to learn about our partnerships with Gleebees and Belive.AI that is helping clients optimize store operations.</p >

        </div >
    )
}
