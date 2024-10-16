import React from 'react';
import img from "../../../assets/images/telecommunications.jpg";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Retail() {

  return (
    <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>
        Telecommunications
      </Title>
      <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />


      <p>
        Proven call center solutions for your telecom, media and entertainment business
      </p>
      <p>
        Enhance your contact center and increase customer intelligence with us. See how TELUS is making it happen.
      </p>
      <p>
        AI provides business value through viable data, technical feasibility, speed to implementation and alignment of corporate initiatives.
        With our company Watson, 90% of customer inquiries are automated and redirected to apps, chatbots and web interactions, and live agents have the tools they need at their fingertips to respond quickly and accurately when needed. Deflection is achieved using analytic-based insights to help agents reach customers before they are discouraged.
      </p>
      <p>
        Public consumption of physical and digital content and media has changed, bringing with it a host of challenges and opportunities. We work with media and entertainment companies to adapt to these trends today and prepare for tomorrow's opportunities.
      </p>
      <p>
        As consumers are becoming more digital, their media and entertainment consumption and purchase habits have also evolved from multi-tasking while watching TV to accessing information via multiple devices. This brings on both challenges and opportunities around the distribution and consumption of digital content for media and entertainment companies.
      </p>
      <p>
        Our global Media & Entertainment practice helps broadcast, publishing, and entertainment organizations innovate and stay ahead of the market. Whether it's identifying new opportunities for increasing revenue and reducing cost; implementing a new business process and solution for an operational and content management system; or building and operating a digital supply chain solution, you can depend on our experts.
      </p>


    </div >
  )
}
