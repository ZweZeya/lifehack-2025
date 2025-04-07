import Header from "../common/Header/Header";
import WindowFrame from "../common/WindowFrame/WindowFrame";
import MapWindowFrame from "../Map/MapWindowFrame/MapWindowFrame";

import "./FAQs.scss";

const FAQs = () => {
    const data = [
        {
            question: "placeholder question",
            answer: "placeholder answer",
        },
        {
            question: "placeholder question",
            answer: "placeholder answer",
        },
        {
            question: "placeholder question",
            answer: "placeholder answer",
        },
    ];

    return (
        <>
            <Header>FAQs</Header>
            <div className="faqs-container">
                {
                    data.map((element, index) => <WindowFrame className="faq-window-frame" key={index}>
                        <h2 className="faq-question">{element.question}</h2>
                        <p className="faq-answer">{element.answer}</p>
                    </WindowFrame>)
                }
                <MapWindowFrame className="faq-window-frame" />
            </div>
        </>
    );
}

export default FAQs;