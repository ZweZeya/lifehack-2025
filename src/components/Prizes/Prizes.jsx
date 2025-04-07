import Header from "../common/Header/Header"
import "./Prizes.scss"
import { FaMedal } from "react-icons/fa"
import { useState, useEffect } from "react"

const Prizes = () => {
    const data = [
        {
            title: "1st",
            prize: "$3000",
            prizeClassName: "first-place",
        },
        {
            title: "2nd",
            prize: "$2000",
            prizeClassName: "second-place",
        },
        {
            title: "3rd",
            prize: "$3000",
            prizeClassName: "third-place",
        },
    ];

    const sortPedestals = () => {
        return window.innerWidth <= 767 ? [...data] : [data[1], data[0], data[2]];
    }

    const [pedestals, setPedestals] = useState(sortPedestals());

    useEffect(() => {
        window.addEventListener("resize", () => setPedestals(sortPedestals()), false);
    }, []);

    return (
        <div className="prizes-main-container">
            <Header>Prizes</Header>
            <div className="prizes-container">
                {pedestals.map(e => <Pedestal key={e.title} data={e} />)}
            </div>
            <div className="finalist-container">
                <p className="finalist-text">Finalists (4-10): $200 each</p>
            </div>
            <hr className="prizes-line-break" />
            <p className="prizes-special-category">Special category: Win up to 6 prizes totaling $1450</p>
            <p className="prizes-lucky-draw">Come down on opening day to earn points and participate in lucky draws. Top 3 teams with points will earn prizes totalling $300.</p>
        </div>
    )
}

const Pedestal = (props) => {
    const { title, prize, prizeClassName } = props.data

    return (
        <div className={`prize ${prizeClassName}`}>
            <Medal title={title} />
            <div className="pedestal">
                <div className="pedestal-info">
                    <p className="prize-title">{title}</p>
                    <p className="prize-amount">{prize}</p>
                </div>
            </div>
        </div>
    )
}

const Medal = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFlipped(prev => !prev)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="medal-container">
            <div className={`medal-flipper  ${isFlipped ? "medal-flip-animation" : ""}`}>
                <div className="medal-front">
                    <FaMedal />
                </div>
                <div className="medal-back">
                    <FaMedal />
                </div>
            </div>
        </div>
    )
}

export default Prizes