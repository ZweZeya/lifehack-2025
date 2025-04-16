import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./ErrorPopup.scss"

const ErrorPopup = ({ messages }) => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [coordinates, setCoordinates] = useState([0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const [messageType, setMessageType] = useState(0);
    const [isHovered, setIsHovered] = useState(false);



    useEffect(() => {
        showRandomlyAfterDelay(2000)

        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const showRandomly = () => {
        const x = Math.random() * screenSize.width * 0.6
        const y = Math.random() * screenSize.height * 0.6
        setCoordinates([x, y])
        setMessageType(currMessage => (currMessage + 1) % messages.length)
        setIsVisible(true)
    }

    const showRandomlyAfterDelay = (delay) => {
        setTimeout(() => {
            showRandomly()
        }, delay)
    }

    const handleClick = () => {
        setIsVisible(false)
        setIsHovered(false)
        showRandomlyAfterDelay(500)
    }

    return (
        <div 
            className="hero-error-popup" 
            style={{ 
                left:coordinates[0], 
                top: coordinates[1], 
                display: isVisible ? "flex" : "none" 
            }} 
        >
            <div className="hero-error-content">
                <p className="hero-error-text">{messages[messageType]}</p>
                <div 
                    className="hero-error-close" 
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        color: isHovered ? "#ff66cc" : "#ffffff",
                        transform: isHovered ? "scale(1.4)" : "scale(1)",
                    }}
                >
                    <AiOutlineClose size={15} />
                </div>
            </div>
        </div>
    )
}

export default ErrorPopup