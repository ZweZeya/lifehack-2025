import "./ProblemStatementsTree.scss"
import { useState } from "react"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { RiTreeLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../common/Header/Header";
import EntranceAnimation from "../../common/EntranceAnimation/EntranceAnimation";
import Link from "../../common/Link/Link";

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
                    situation: <span>Vaccine wastage is a significant global issue, with the World Health Organization (WHO) estimating that up to 50% of vaccines are wasted annually, primarily due to challenges in maintaining the cold chain and logistics. <Link to="https://www.weforum.org/stories/2018/07/the-biggest-hurdle-to-universal-vaccination-might-just-be-a-fridge/?utm_source=chatgpt.com">World Economic Forum</Link></span>,
                    challenge: <span>This problem is exacerbated in underserved areas, where lack of infrastructure leads to delays and reduced vaccine efficacy. Design a system to track the journey of medical supplies in real time, ensuring accountability and minimizing waste. The solution can for example leverage blockchain's tamper-proof records while integrating user-friendly dashboards for stakeholders at all levels of the supply chain. Consider challenges such as limited internet access in underserved regions and scalability for large-scale operations.</span>,
                },
                {
                    key: "SubTheme 1.2",
                    situation: <span>Fragmented patient data across multiple healthcare providers can lead to misdiagnosis and medical errors, adversely affecting patient outcomes. A 2023 report highlighted that diagnostic errors in the U.S. result in approximately 795,000 serious harms annually. <Link to="https://qualitysafety.bmj.com/content/33/2/109?utm_source=chatgpt.com">Quality & Safety in Health Care</Link></span>,
                    challenge: <span>Develop a centralized Electronic Health Record (EHR) system that integrates seamlessly across providers, ensuring data accuracy and security. How would you incorporate real-time updates, user training, and compliance with healthcare regulations like HIPAA?</span>,
                },
                {
                    key: "SubTheme 1.3",
                    situation: <span>Public health crises like COVID-19 have highlighted the critical role of timely and accurate data in shaping effective policies. However, many regions lack platforms that provide real-time updates on essential metrics like vaccination rates, pollution levels, or emergency response readiness. A case study during the pandemic showed that delayed public health data in India resulted in ineffective policy responses, exacerbating the crisis. During the pandemic, delays in data reporting hindered effective policy responses in various areas. <Link to="https://harvardpublichealth.org/policy-practice/the-u-s-public-health-data-system-is-weak-heres-how-we-fix-it/?utm_source=chatgpt.com">Harvard Public Health</Link></span>,
                    challenge: <span>Design a real-time health monitoring system that leverages geographic mapping, mobile alerts, and intuitive dashboards to improve public health outcomes. The solution should ensure data accuracy, inclusivity for underserved populations, and adaptability to a variety of public health metrics. How would you address challenges such as data privacy, misinformation, and maintaining user engagement over time</span>,
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
                    situation: <span>Traditional education systems often adopt a one-size-fits-all approach, leaving students who learn differently or at varying speeds behind. According to UNESCO (2023), approximately 260 million students globally fail to achieve minimum proficiency levels due to inflexible educational methodologies.</span>,
                    challenge: <span>Develop an AI-powered adaptive learning platform capable of dynamically adjusting lesson difficulty, content type, and pacing in real time, based on continuous assessment of each student's progress, learning preferences, and unique needs. Consider integrating multimodal learning (visual, auditory, kinesthetic) and a robust analytics dashboard that allows teachers to monitor student development. How would the system handle diverse educational standards across regions, ensure data privacy, and maintain learner motivation over extended periods?</span>,
                },
                {
                    key: "SubTheme 2.2",
                    situation: <span>The rise of remote education has emphasized the limitations of existing virtual classrooms, including ineffective communication, limited interactive opportunities, and decreased student engagement. A 2023 OECD study highlighted that 42% of educators found existing remote collaboration tools insufficient for interactive learning.</span>,
                    challenge: <span>Design an integrated platform for real-time collaboration that allows seamless interaction among students and teachers in remote settings. The platform should include features such as live quizzes with instant analytics, interactive whiteboards for brainstorming, peer feedback tools, and video-conferencing integration. Address how the system could manage bandwidth constraints, user accessibility, cybersecurity concerns, and facilitate teacher training to effectively leverage these digital tools.</span>,
                },
                {
                    key: "SubTheme 2.3",
                    situation: <span>Educational institutions frequently overlook accessibility requirements, resulting in exclusion and academic disadvantages for students with disabilities. A recent UNICEF report (2023) revealed that globally, over 50% of schools lack sufficient tools or resources to accommodate students with varying disabilities.</span>,
                    challenge: <span>Develop an accessible EdTech solution capable of transforming traditional educational content into formats accessible to students with disabilities. The solution should include features such as real-time transcription services, text-to-speech functionalities, automated sign language interpretation, and compatibility with various assistive devices. Consider addressing integration with existing learning management systems, compliance with accessibility standards (such as WCAG 2.1), and ease-of-use for educators and students.</span>,
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
                    situation: <span>Consumers often unintentionally support unsustainable practices due to a lack of clear information about the environmental impacts of their purchases. A 2023 report by McKinsey indicates that 68% of consumers want to make sustainable choices but lack accessible and reliable information.</span>,
                    challenge: <span>Design a sustainability shopping companion—a browser extension or mobile application—that provides users real-time information about the environmental sustainability of brands and products as they shop online. The app should offer alternative recommendations, detailed sustainability scores, and easy-to-understand visual indicators of environmental impact. How would the platform ensure the reliability of sustainability data, encourage sustained user engagement, and balance comprehensiveness with simplicity for everyday use?</span>,
                },
                {
                    key: "SubTheme 3.2",
                    situation: <span>Ethical consumerism is hindered by limited transparency concerning brands’ ethical practices, including labor conditions, fair trade adherence, and environmental responsibility. According to Ethical Consumer Magazine (2023), 74% of consumers express frustration over difficulties in accessing credible ethical performance data of companies.</span>,
                    challenge: <span>Develop an ethical brand awareness tool that aggregates comprehensive data regarding brands' ethical practices. The platform should evaluate criteria such as labor policies, sourcing transparency, carbon footprint, animal welfare, and corporate governance. The tool should include interactive dashboards, personalized notifications based on user preferences, and integration capabilities with popular e-commerce sites. How will you maintain data accuracy, foster consumer trust, and motivate continuous user engagement?</span>,
                },
                {
                    key: "SubTheme 3.3",
                    situation: <span>Generic customer loyalty programs often fail to resonate personally with consumers, limiting effectiveness in customer retention and satisfaction. A 2023 Gartner study found that only 25% of consumers felt loyalty programs were genuinely tailored to their preferences, diminishing brand engagement.</span>,
                    challenge: <span>Create an AI-driven personalized loyalty app that customizes rewards, promotions, and interactions based on individual user behavior, purchasing patterns, and expressed interests. The system should incorporate predictive analytics to anticipate consumer preferences, seamlessly integrating with both digital and physical retail environments. Address data privacy concerns, mechanisms for gathering user consent, and strategies for maintaining user interest and engagement over the long term.</span>,
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
                        {data.children.map(e => <SubThemeCard key={e.key} data={e} color={data.color} />)}
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
    const { data, color } = props

    return (
        <motion.div>
            <motion.p className="subtheme-card-content">
                <span style={{color: color}} className="subtheme-text-bold">Situation:</span> {data.situation}
            </motion.p>
            <motion.p className="subtheme-card-content">
                <span style={{color: color}} className="subtheme-text-bold">Challenge:</span> {data.challenge}
            </motion.p>
            <hr style={{border: `1px solid ${color}`}}/>
        </motion.div>
    )
}

export default ProblemStatementsTree