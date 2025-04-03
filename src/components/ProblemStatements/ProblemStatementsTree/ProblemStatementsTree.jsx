import "./ProblemStatementsTree.scss"
import { useState, useEffect } from "react"

const ProblemStatementsTree = () => {
    const data = {
        key: "Overarching Theme",
        label: "Overarching Theme: Empowering Communities",
        content: "In our increasingly complex world with fast moving changes, it is paramount that our societies become more interconnected and resilient in the face of challenges. Design a hack to help strengthen and empower our community.",
        children: [
            {
                key: "Theme 1",
                label: "Theme 1: Health and Wellbeing",
                content: "Harness data‑driven technology to tackle inefficiencies in healthcare that improve community health outcomes.",
                children: [
                    {
                        key: "Theme 1.1",
                        label: "Placeholder label 1.1",
                        content: "Placeholder content 1.1",
                        children: []
                    },
                    {
                        key: "Theme 1.2",
                        label: "Placeholder label 1.2",
                        content: "Placeholder content 1.2",
                        children: []
                    },
                    {
                        key: "Theme 1.3",
                        label: "Placeholder label 1.3",
                        content: "Placeholder content 1.3",
                        children: []
                    }
                ]
            },
            {
                key: "Theme 2",
                label: "Theme 2: Knowledge and Collaboration",
                content: "Design digital solutions that personalise learning and break barriers so everyone can access knowledge anytime, anywhere.",
                children: [
                    {
                        key: "Theme 2.1",
                        label: "Placeholder label 2.1",
                        content: "Placeholder content 2.1",
                        expandedStates: [],
                        children: []
                    },
                    {
                        key: "Theme 2.2",
                        label: "Placeholder label 2.2",
                        content: "Placeholder content 2.2",
                        expandedStates: [],
                        children: []
                    },
                    {
                        key: "Theme 2.3",
                        label: "Placeholder label 2.3",
                        content: "Placeholder content 2.3",
                        expandedStates: [],
                        children: []
                    }
                ]
            },
            {
                key: "Theme 3",
                label: "Theme 3: Sustainability & Consumption",
                content: "Create tools that empower consumers with transparent insights, and inspire meaningful behaviour change toward a greener future.",
                children: [
                    {
                        key: "Theme 3.1",
                        label: "Placeholder label 3.1",
                        content: "Placeholder content 3.1",
                        children: []
                    },
                    {
                        key: "Theme 3.2",
                        label: "Placeholder label 3.2",
                        content: "Placeholder content 3.2",
                        children: []
                    },
                    {
                        key: "Theme 3.3",
                        label: "Placeholder label 3.3",
                        content: "Placeholder content 3.3",
                        children: []
                    }
                ]
            }
        ]
    }

    return (
        <div>
            <TreeNode data={data} isExpanded={true} />
        </div>
    )
}

const TreeNode = (props) => {
    const [expandedStates, setExpandedStates] = useState([]);

    const { data, isExpanded } = props

    useEffect(() => {
        setExpandedStates(data.children.map(() => false))
    }, [])

    const handleClick = (index) => {
        if (expandedStates[index]) return
        setExpandedStates(curr => curr.map((v, i) => i == index ? true : false))
    }

    return (
        <div>
            <div className="node-container" onClick={() => {}}>
                <p>{data.label}</p>
                <p>{data.content}</p>
            </div>
            { isExpanded && expandedStates.length > 0 &&
              <div>
                <ul className="child-nodes-container">
                    { data.children.map((v, i) => 
                        <li key={v.key} onClick={() => handleClick(i)}>
                            <TreeNode data={v} isExpanded={expandedStates[i]} />
                        </li>) 
                    }
                </ul>
              </div>
            }
        </div>
    )
}

export default ProblemStatementsTree