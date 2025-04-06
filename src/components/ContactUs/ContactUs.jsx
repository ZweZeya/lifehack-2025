import Header from "../common/Header/Header"
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import "./ContactUs.scss"

const ContactUs = () => {
    const data = [
        {
            name: "telegram",
            icon: FaTelegram,
            to: "",
        },
        {
            name: "instagram",
            icon: FaInstagram,
            to: "",
        },
        {
            name: "linkedin",
            icon: FaLinkedin,
            to: "",
        },
        {
            name: "email",
            icon: MdOutlineMailOutline,
            to: "",
        }
    ]

    return (
        <div className="contacts-main-container">
            <Header className="contacts-header">Contact Us</Header>
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
            <data.icon className="contact-item-icon" size={30} />
        </a>
    )
}

export default ContactUs