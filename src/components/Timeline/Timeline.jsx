import "react-vertical-timeline-component/style.min.css"
import { FaMedal } from "react-icons/fa"
import { HiComputerDesktop } from "react-icons/hi2"
import { LuClipboardPen } from "react-icons/lu"
import { MdOutlineCelebration } from "react-icons/md"
import "./Timeline.scss"

const Timeline = () => {

    const data = [
        {
            date: "14 April",
            title: "Registration",
            content: "Gather your friends and join together in teams of 2-4. Get excited to participate in the Hackathon.",
            icon: LuClipboardPen,
        },
        {
            date: "29 May",
            title: "Opening Ceremony and Activities",
            content: "Come down and join us in games, workshops, and lucky draws. Make new friends, win prizes and start hacking on a high note.",
            icon: MdOutlineCelebration,
    
        },
        {
            date: "31 May",
            title: "Hack submission day",
            content: "Submit your exciting hack along with a pitch video. Get ready to be selected to be one of our exciting semi-finalists.",
            icon: HiComputerDesktop,
        },
        {
            date: "1 June",
            title: "Finale Day Schedule",
            content: "Pitch you hack and meet industry leaders. Celebrate your hard earned hackathon victory.",
            icon: FaMedal,
        }
    ]

    return (
        <div className="timeline-container">
            <h1 className="timeline-header">Event Timeline</h1>
            <div className="timeline-items">
                {data.map(e => <TimelineElement key={e.title} data={e} />)}
            </div>
        </div>
        
    )
}

const TimelineElement = (props) => {
    const {title, content, date} = props.data
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{date}</div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Timeline