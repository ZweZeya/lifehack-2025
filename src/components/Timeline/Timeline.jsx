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
            date: "21 April",
            title: "Registration",
            content: "Gather your friends and join together in teams of 2-4. Get excited to participate in the Hackathon.",
            icon: LuClipboardPen,
            iconColor: "#2a9df4",
        },
        {
            date: "16 June",
            title: "Opening Ceremony & Activities",
            content: "Come down and join us in games, workshops, and lucky draws. Make new friends, win prizes and start hacking on a high note.",
            icon: MdOutlineCelebration,
            iconColor: "#187bcd",
        },
        {
            date: "18 June",
            title: "Hack Submission",
            content: "Submit your exciting hack along with a pitch video. Get ready to be selected to be one of our exciting semi-finalists.",
            icon: HiComputerDesktop,
            iconColor: "#1167b1",
        },
        {
            date: "19 June",
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
                            contentArrowStyle={{ borderRight: "8px solid #ffffff" }}
                            date={event.date}
                            dateClassName="timeline-event-date"
                            icon={<event.icon />}
                            iconStyle={{ background: event.iconColor }}
                            iconClassName="timeline-event-icon"
                            key={index}
                        >
                            <WindowFrame className="timeline-window-frame">
                                <div>
                                    <h3 className="timeline-event-header">{event.title}</h3>
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