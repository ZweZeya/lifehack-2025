import "./ProblemStatementsTree.scss"

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
                children: []
            },
            {
                key: "Theme 2",
                label: "Theme 2: Knowledge and Collaboration",
                content: "Design digital solutions that personalise learning and break barriers so everyone can access knowledge anytime, anywhere.",
                children: []
            },
            {
                key: "Theme 3",
                label: "Theme 3: Sustainability & Consumption",
                content: "Create tools that empower consumers with transparent insights, and inspire meaningful behaviour change toward a greener future.",
                children: []
            }
        ]
    }

    return (
        <div>
            <TreeNode data={data} />
        </div>
    )
}

const TreeNode = (props) => {
    const data = props.data
    return (
        <>
            <div className="node-container">
                <p>{data.label}</p>
                
            </div>
            <div className="child-nodes-container">
                {data.children.map(e => <TreeNode key={e.key} data={e} />)}
            </div>
        </>
    )
}

export default ProblemStatementsTree