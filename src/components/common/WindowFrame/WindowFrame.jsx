import "./WindowFrame.scss"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const WindowFrame = (props) => {
    const glitches = ["glitch1", "glitch2", "glitch3", "glitch4"];
    const [glitchIndex, setGlitchType] = useState(0);

    const handleClick = () => {
        setGlitchType((glitchIndex + 1) % glitches.length);
    }

    return (
        <div className={`window-frame-container ${props.className} ${glitches[glitchIndex]}`} onClick={props.onClick}>
            <div className="content-container">
                <div className="close-btn" onClick={handleClick}>
                    <AiOutlineClose size={25} className="close-icon" />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default WindowFrame;