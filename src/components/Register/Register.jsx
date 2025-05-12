import { LuClipboardPen } from "react-icons/lu";
import Header from "../common/Header/Header";

import "./Register.scss"

const Register = () => {
    return (
        <a href="" className="register-button">
            <div className="register-title">
                {/* <LuClipboardPen className="register-icon"/> */}
                <Header className="register-label">Register Now!</Header>
            </div>
            <div className="register-subtitle">
                <h3>Ends 30 May</h3>
            </div>
        </a>
    );
}

export default Register