import "./WindowFrame.scss"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const WindowFrame = (props) => {
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
        <div className={`container ${glitches[glitchType + 1]}`}>
            <div className="top-bar">
                <div className="close-btn" onClick={handleClick}>
                    <AiOutlineClose size={props.iconSize ? props.iconSize : 25} className="close-icon" />
                </div>
            </div>
            <div className="content-container">
                {props.children}
            </div>
        </div>
    )
}

export default WindowFrame;