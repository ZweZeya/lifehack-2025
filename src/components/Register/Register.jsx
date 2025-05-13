import { LuClipboardPen } from "react-icons/lu";
import Header from "../common/Header/Header";

import "./Register.scss"

const Register = () => {
    return (
        <a href="https://lifehack-2025.devpost.com/register?flow%5Bdata%5D%5Bchallenge_id%5D=24777&flow%5Bname%5D=register_for_challenge" className="register-button">
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