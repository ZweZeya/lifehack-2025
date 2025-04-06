import "./WindowFrame.scss"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const WindowFrame = (props) => {
    const {title, children} = props

    const glitches = [
        "",
        "glitch1",
        "glitch2",
        "glitch3",
        "glitch4",
    ]
    const [glitchType, setGlitchType] = useState(0);

    const handleClick = () => {
        setGlitchType((glitchType + 1) % 4)
    }

    return (
        <div className={`window-frame-container ${glitches[glitchType + 1]}`}>
            <div className="window-top-bar">
                { title }
                <div className="close-btn" onClick={handleClick}>
                    <AiOutlineClose size={25} className="close-icon" />
                </div>
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export default WindowFrame;