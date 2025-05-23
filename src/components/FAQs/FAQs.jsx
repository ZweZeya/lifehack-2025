import Header from "../common/Header/Header";
import WindowFrame from "../common/WindowFrame/WindowFrame";
import MapWindowFrame from "../Map/MapWindowFrame/MapWindowFrame";
import { useState } from "react";
import { motion } from "framer-motion";

import "./FAQs.scss";

const FAQs = () => {
    const [expanded, setExpanded] = useState(-1)

    const data = [
        {
            question: "What is the format and schedule of the hackathon?",
            answer: <p>
                LifeHack 2025 is a hybrid hackathon running from 16 June to 19 June 2025. The event begins with an opening ceremony and various onsite activities on 16 June, and the problem statement will be released exclusively at the ceremony. Online hacking takes place on 17 and 18 June, and the Finale with team presentations will be held physically on 19 June.
            </p>
        },
        {
            question: "How are submissions evaluated?",
            answer: <p>
                Submissions are evaluated in two rounds based on criteria such as technical implementation, relevance, innovation, usability, and potential impact. 
The top ten teams will make it to the Finale, where judges will determine the winners by considering both their presentations and their earlier submission scores.
            </p>
        },
        {
            question: "What is required to make a submission?",
            answer: <p>
                All teams must submit their project on Devpost. Your submission must include:
Project title and short description
Detailed project description (Fill in project_information.docx with all fields filled and rename to team_name.docx)
Public GitHub link with a clear README and all relevant files
Demo video (max 10 mins) hosted on YouTube and linked on Devpost
Only one member needs to submit the project on Devpost, but all team members must be tagged as contributors.
Judges will evaluate your submission directly from your Devpost project page.
            </p>
        },
        {
            question: "What if I can't attend every day?",
            answer: <p>
                Attending the Opening Day on 16 June is mandatory, as the problem statement will be released during the opening ceremony. Day 2 and 3 (17–18 June) will be conducted virtually for project development. The Finale on 19 June will be held physically, and finalist teams must have at least one member present during their pitch.
            </p>
        },
    ];

    const handleClick = (index) => {
        if (index == expanded) {
            setExpanded(-1)

        } else {
            setExpanded(index)
        }
    }

    return (
        <>
            <Header>FAQs</Header>
            <div className="faqs-container">
                {
                    data.map((element, index) => <FAQBox key={index} data={element} isExpanded={expanded == index} onClick={() => handleClick(index)} />)
                }
                <MapWindowFrame className="faq-window-frame" />
            </div>
        </>
    );
}

const FAQBox = (props) => {
    const { question, answer } = props.data
    const animate = {
        layout: "position",
        animate: { opacity: 1 },
        transition: { delay: 0.1, duration: 0.17, bounce: 0, type: "spring" },
        initial: { opacity: 0 }
    }

    return (
        <WindowFrame className="faq-window-frame">
            <motion.span onClick={props.onClick}>
                <motion.h2 className="faq-question">{question}</motion.h2>
                {props.isExpanded &&
                    <motion.span {...animate}>
                        <motion.hr style={{ border: "1px solid" }} />
                        <motion.div className="faq-answer">{answer}</motion.div>
                    </motion.span>
                }
            </motion.span>
        </WindowFrame>
    )
}

export default FAQs;