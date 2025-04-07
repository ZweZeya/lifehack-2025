import { FaBookmark } from "react-icons/fa";

import Header from "../common/Header/Header";
import WindowFrame from "../common/WindowFrame/WindowFrame";

import "./Workshops.scss";

const Workshops = () => {
    const data = [
        {
            title: "Workshop",
            body: "workshop description",
            icon: FaBookmark,
        },
        {
            title: "Workshop",
            body: "workshop description",
            icon: FaBookmark,
        },
    ];

    return (
        <>
            <Header>Workshops</Header>
            <div className="workshops-container">
                {
                    data.map((element, index) => <WindowFrame className="workshop-window-frame" key={index}>
                        <div className="workshop-title">
                            <div className="workshop-icon">
                                <element.icon size={32} />
                            </div>
                            <h2>{element.title}</h2>
                        </div>
                        <p className="workshop-body">{element.body}</p>
                    </WindowFrame>)
                }
            </div>
        </>
    );
}

export default Workshops;