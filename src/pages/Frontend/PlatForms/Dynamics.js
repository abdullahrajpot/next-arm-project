import React from 'react';
import img from "../../../assets/images/dynamics.png";
import { Typography } from 'antd';

const { Title } = Typography;

export default function Dynamics() {

    return (
        <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "50px auto" }}>
            <Title level={2} style={{ marginBottom: "20px" }}>
                Microsoft Dynamics
            </Title>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }} />

            <p>
                Microsoft Dynamics NAV (formerly Navision) is a complete enterprise resource planning (ERP) software solution for mid-sized organizations that is fast to implement, easy to configure, and simple to use. Right from the start, simplicity has guided—and continues to guide—innovations in product design, development, implementation, and usability. Microsoft Dynamics NAV has more than one million users worldwide and is available in more than 40 country versions.
            </p>
            <p>
                With Microsoft Dynamics NAV, you can implement proven industry-specific functionality relevant to your needs—even for the most highly specialized industries and organizations. The result? A cost-effective complete ERP software solution tailored precisely to your unique requirements—one that helps your employees be more effective and your company more competitive.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ In Office 365 experience</p>
            <p>
                Stay connected with all the parts of your business. Dynamics NAV works seamlessly with Office 365, which means you can easily manage business interactions with your customers and vendors directly within Outlook. Navigate effortlessly between your Dynamics NAV data and your Office tools – for example, Outlook, Microsoft Bookings, or Excel. The improved compatibility enables you to easily create customers, vendors, quotes, and invoices, all without leaving Outlook.
            </p>
            <p className='fs-5 pt-3' style={{ color: "#0185c3", marginTop: "20px" }}>═══ Faster setup and configuration</p>
            <p>
                Get up and running faster. Save time and avoid unnecessary manual tasks with the assisted setup wizard that helps you import data, set up integration with Office 365, and enjoy a simplified setup experience, with predefined setup data and limited customer interaction. Use the assisted setup feature to guide you through setup scenarios – simplifying and streamlining your tasks. For example, follow wizards to set up workflows for approvals, or set the fiscal year.
            </p>
            <p>
                In addition, with improved support for cash management, it is easy to set up and adjust cash flow forecasting, gathering data from all relevant sources to provide you with a complete overview
            </p>


        </div >
    )
}
