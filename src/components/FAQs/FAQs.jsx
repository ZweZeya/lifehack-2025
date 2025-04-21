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
            question: "Who can participate in LifeHack 2025?",
            answer: <p>
                LifeHack 2025 is open to all post-secondary students as of Academic Year 2024/25.
                This includes Polytechnic students, Junior College students, ITE students, students awaiting university admission, and current undergraduates.
                No prior experience is required — just a passion to build and create.
            </p>
        },
        {
            question: "What is the format and schedule of the hackathon?",
            answer: <p>
                LifeHack 2025 is a hybrid hackathon running from 16 June to 19 June 2025.
                The event begins with an Opening Ceremony and various onsite activities on 16 June,
                followed by online hacking and workshops on 17 and 18 June.
                The Finale and presentations take place physically on 19 June. 
            </p>
        },
        {
            question: "How many people are there in a team?",
            answer: <p>
                Teams should consist of 2 to 4 participants.
                You may form your team before or after registration.
            </p>
        },
        {
            question: "Can I join if I don't have a team?",
            answer: <p>
                Yes, solo participants are welcome!
                If you register without a team, the organizers will assist in team matching so you can connect with other like-minded individuals before the event.
            </p>
        },
        {
            question: "Do I need prior hackathon experience to take part?",
            answer: <p>
                Not at all! LifeHack 2025 is beginner-friendly and provides workshops and mentor support throughout the event.
                Whether you're new to hackathons or already experienced, there's something for everyone.
            </p>
        },
        {
            question: "How are submissions evaluated?",
            answer: <p>
                Submissions are judged over three rounds.
                Judging criteria include technical implementation, relevance, innovation, usability, and potential impact.
                <ul>
                    <li>In Round 2, selected teams will be invited to pitch their hacks live.</li>
                    <li>In Round 3, the top ten finalists will face off in the finale, and judges will decide the winners based on both presentation and earlier submission scores.</li>
                </ul>
            </p>
        },
        {
            question: "What is required to make a submission?",
            answer: <p>
                Teams are required to submit their solution via a Google Form that will be provided on the submission day.
                Each submission must include:
                <ul>
                    <li>A public GitHub repository link (if applicable)</li>
                    <li>A demo video with a maximum duration of 10 minutes</li>
                    <li>
                        A written description of the project that addresses the following questions:
                        <ol>
                            <br />
                            <li>What is your project called?</li>
                            <li>What problem statement are you addressing?</li>
                            <li>How does your solution tackle the problem?</li>
                            <li>How did you build it?</li>
                            <li>Additionally, if GitHub is used, the submission must include a README.md file, as well as any other relevant files that are not included in the repository</li>
                        </ol>
                    </li>
                </ul>

            </p>
            
        },
        {
            question: "What if I can't attend every day?",
            answer: <p>
                While attending the full event is encouraged, it's not mandatory to be present every day.
                However, to qualify for the lucky draw, you must attend both the Opening Day (16 June) and at least one workshop.
                Teams are still eligible to submit their hacks as long as they meet the submission deadline and follow the event rules.
                Round 2 and finalists must have at least one team member present during their respective pitches.
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
                        <motion.p className="faq-answer">{answer}</motion.p>
                    </motion.span>
                }
            </motion.span>
        </WindowFrame>
    )
}

export default FAQs;