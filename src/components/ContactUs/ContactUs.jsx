import Header from "../common/Header/Header"
import { RiTelegramLine, RiLinkedinBoxLine, RiInstagramLine, RiMailLine } from "react-icons/ri"
import "./ContactUs.scss"

const ContactUs = () => {
    const data = [
        {
            name: "telegram",
            icon: RiTelegramLine,
            to: "",
        },
        {
            name: "instagram",
            icon: RiInstagramLine,
            to: "",
        },
        {
            name: "linkedin",
            icon: RiLinkedinBoxLine,
            to: "",
        },
        {
            name: "email",
            icon: RiMailLine,
            to: "",
        }
    ]

    return (
        <div className="contacts-main-container">
            {/* <Header className="contacts-header">Contact Us</Header> */}
            <div className="contacts-items-layout">
                {data.map(e => <ContactItem key={e.name} data={e} />)}
            </div>
        </div>
    )
}

const ContactItem = (props) => {
    const data = props.data

    return (
        <a href={data.name === "email" ? `mailto:${data.to}` : data.to} className="contact-item-container">
            <data.icon className="contact-item-icon" size={40} />
        </a>
    )
}

export default ContactUs