import "./ProblemStatementsTree.scss"
import { useState } from "react"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { RiTreeLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Header from "../../common/Header/Header";
import EntranceAnimation from "../../common/EntranceAnimation/EntranceAnimation";

const ProblemStatementsTree = () => {
    const [expanded, setExpanded] = useState(-1)

    const data = [
        {
            key: "Theme 1",
            title: "Health & Wellbeing",
            content: "Harness data-driven technology to tackle inefficiencies in healthcare that improve community health outcomes.",
            icon: MdOutlineHealthAndSafety,
            color: "#ff00cc",
            children: [
                {
                    key: "Theme 1.1",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                },
                {
                    key: "Theme 1.2",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                },
                {
                    key: "Theme 1.3",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                }
            ]
        },
        {
            key: "Theme 2",
            title: "Knowledge & Collaboration",
            content: "Design digital solutions that personalise learning and break barriers so everyone can access knowledge anytime, anywhere.",
            icon: PiBrain,
            color: "#00aaff",
            children: [
                {
                    key: "Theme 2.1",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    expandedStates: [],
                    children: []
                },
                {
                    key: "Theme 2.2",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    expandedStates: [],
                    children: []
                },
                {
                    key: "Theme 2.3",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    expandedStates: [],
                    children: []
                }
            ]
        },
        {
            key: "Theme 3",
            title: "Sustainability & Consumption",
            content: "Create tools that empower consumers with transparent insights, and inspire meaningful behaviour change toward a greener future.",
            icon: RiTreeLine,
            color: "#00ffaa",
            children: [
                {
                    key: "Theme 3.1",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                },
                {
                    key: "Theme 3.2",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                },
                {
                    key: "Theme 3.3",
                    title: "Digital Rights Management (DRM)",
                    content: "DRM utilizes various technologies to safeguard digital content, preventing its unauthorized access and distribution by protecting creators' and distributors' rights.",
                    children: []
                }
            ]
        }
    ]

    const handleClick = (idx) => {
        if (expanded == idx) {
            setExpanded(-1)
        } else {
            setExpanded(idx)
        }
    }

    return (
        <div className="problem-statements-main-container">
            <Header>Problem Statements</Header>
            <div className="main-theme-container">
                <h2>Overarching Theme: Empowering Communities</h2>
                <p>In our increasingly complex world with fast moving changes, it is paramount that our societies become more interconnected and resilient in the face of challenges. Design a hack to help strengthen and empower our community.</p>
            </div>
            <div className="themes-layout">
                {data.map((e, i) => <ThemeCard key={e.key} data={e} onClick={() => handleClick(i)} isExpanded={expanded == i} />)}
            </div>
        </div>
    )
}

const ThemeCard = (props) => {
    const { data, onClick, isExpanded } = props
    const animate = {
        layout: "position",
        animate: {opacity: 1},
        transition: {delay: 0.3},
        initial: {opacity: 0}
    }
    return (
        <EntranceAnimation>
            <motion.div 
                className="theme-card-container" 
                style={{border: `2px solid ${data.color}`}} 
                onClick={onClick} 
                transition={{duration: 0.17, bounce: 0, type: "spring"}}
                layout
            >
                <motion.div layout="position" className="theme-card-visible-container">
                    <motion.div layout="position" className="theme-card-icon" style={{backgroundColor: data.color}}>
                        <data.icon size={60} />
                    </motion.div>
                    <motion.div layout="position">
                        <motion.h2 layout="position" className="theme-card-title">{data.title}</motion.h2>
                        <motion.p layout="position" className="theme-card-content">{data.content}</motion.p>
                    </motion.div>
                </motion.div>
                {isExpanded && 
                    <motion.div {... animate} className="subthemes-layout">
                        <hr style={{border: `1px solid ${data.color}`}}/>
                        {data.children.map(e => <SubThemeCard key={e.key} data={e} />)}
                    </motion.div>
                }
            </motion.div>
        </EntranceAnimation>
    )
}

const SubThemeCard = (props) => {
    const { data } = props

    return (
        <motion.div>
            <motion.h4>{data.title}</motion.h4>
            <motion.p className="subtheme-card-content">{data.content}</motion.p>
        </motion.div>
    )
}

export default ProblemStatementsTree