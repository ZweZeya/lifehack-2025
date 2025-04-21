import "./ProblemStatementsTree.scss"
import { useState } from "react"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { RiTreeLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../common/Header/Header";
import EntranceAnimation from "../../common/EntranceAnimation/EntranceAnimation";

const ProblemStatementsTree = ({ isEnabled }) => {
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
                    key: "SubTheme 1.1",
                    title: "Placeholder Subtheme 1.1",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    children: []
                },
                {
                    key: "SubTheme 1.2",
                    title: "Placeholder Subtheme 1.2",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    children: []
                },
                {
                    key: "SubTheme 1.3",
                    title: "Placeholder Subtheme 1.3",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
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
                    key: "SubTheme 2.1",
                    title: "Placeholder Subtheme 2.1",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    expandedStates: [],
                    children: []
                },
                {
                    key: "SubTheme 2.2",
                    title: "Placeholder Subtheme 2.2",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    expandedStates: [],
                    children: []
                },
                {
                    key: "SubTheme 2.3",
                    title: "Placeholder Subtheme 2.3",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
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
                    key: "SubTheme 3.1",
                    title: "Placeholder Subtheme 3.1",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    children: []
                },
                {
                    key: "SubTheme 3.2",
                    title: "Placeholder Subtheme 3.2",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
                    children: []
                },
                {
                    key: "SubTheme 3.3",
                    title: "Placeholder Subtheme 3.3",
                    content: "Build an innovative solution that addresses a real-world challenge faced by [target users] in the domain of [domain], focusing on [key goal or constraint].",
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
                {data.map((e, i) => <ThemeCard key={e.key} data={e} onClick={() => handleClick(i)} isExpanded={expanded == i} isEnabled={isEnabled} />)}
            </div>
        </div>
    )
}

const ThemeCard = (props) => {
    const { data, onClick, isExpanded, isEnabled } = props
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
                {isEnabled 
                    ? 
                        <motion.div className={`theme-card-expand-btn ${isExpanded ? "theme-card-expand-btn-expanded" : ""}`} onClick={onClick}>
                            <FaCaretDown size={24} />
                        </motion.div> 
                    :
                        <p>[Subthemes Coming Soon]</p>
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