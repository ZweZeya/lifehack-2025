import { FaMedal } from "react-icons/fa"
import { HiComputerDesktop } from "react-icons/hi2"
import { LuClipboardPen } from "react-icons/lu"
import { MdOutlineCelebration } from "react-icons/md"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import Header from "../common/Header/Header";
import WindowFrame from "../common/WindowFrame/WindowFrame";


import "./Timeline.scss"
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {

    const events = [
        {
            date: "14 April",
            title: "Registration",
            content: "Gather your friends and join together in teams of 2-4. Get excited to participate in the Hackathon.",
            icon: LuClipboardPen,
            iconColor: "#2a9df4",
        },
        {
            date: "29 May",
            title: "Opening Ceremony and Activities",
            content: "Come down and join us in games, workshops, and lucky draws. Make new friends, win prizes and start hacking on a high note.",
            icon: MdOutlineCelebration,
            iconColor: "#187bcd",
        },
        {
            date: "31 May",
            title: "Hack Submission",
            content: "Submit your exciting hack along with a pitch video. Get ready to be selected to be one of our exciting semi-finalists.",
            icon: HiComputerDesktop,
            iconColor: "#1167b1",
        },
        {
            date: "1 June",
            title: "Finale",
            content: "Pitch you hack and meet industry leaders. Celebrate your hard earned hackathon victory.",
            icon: FaMedal,
            iconColor: "#031273",
        }
    ]

    return (
        <div className="timeline-container">
            <Header className="timeline-header">Event Timeline</Header>
            <VerticalTimeline>
                {
                    events.map((event, index) =>
                        <VerticalTimelineElement
                            contentStyle={{ padding: 0, background: "none", border: "none", boxShadow: "none" }}
                            contentArrowStyle={{ borderRight: "16px solid #ffffff" }}
                            date={event.date}
                            dateClassName="timeline-event-date"
                            icon={<event.icon />}
                            iconStyle={{ background: event.iconColor, color: '#ffffff', opacity: 1 }}
                            key={index}
                        >
                            <WindowFrame className="tmp">
                                <div>
                                    <h3>{event.title}</h3>
                                    <p>{event.content}</p>
                                </div>
                            </WindowFrame>
                        </VerticalTimelineElement>
                    )
                }
            </VerticalTimeline>
        </div>
    );
}

export default Timeline