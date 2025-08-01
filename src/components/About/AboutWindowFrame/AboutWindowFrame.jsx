import Header from "../../common/Header/Header"
import WindowFrame from "../../common/WindowFrame/WindowFrame"
import "./AboutWindowFrame.scss"

const AboutWindowFrame = () => {
    return (
        <WindowFrame  className="about-container">
            <div>
                <Header className="about-header">What is LifeHack?</Header>
                <p>LifeHack is the annual flagship hackathon organised by NUS Students' Computing Club.</p>
                <p>LifeHack 2025 fosters creative solutions to enhance community interconnectivity. The event challenges participants to formulate impactful ideas, aiming to inspire innovation for a better-connected world.</p>
                <p>The event will run from 16 June to 19 June</p>
            </div>
        </WindowFrame>
    )
}

export default AboutWindowFrame