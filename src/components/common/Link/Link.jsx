import { FaExternalLinkAlt } from "react-icons/fa";
import "./Link.css"

const Link = ({to, children}) => {
    return (
        <a href={to} className="link-container">
            {children}
            <FaExternalLinkAlt />
        </a>
    )
}

export default Link;