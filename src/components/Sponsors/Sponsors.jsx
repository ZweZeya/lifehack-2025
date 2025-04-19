import Header from "../common/Header/Header";

import "./Sponsors.scss";

const Sponsors = () => {
    const data = {
        "Gold": [
            {
                className: "sponsor-logo--short",
                img: "singtel.png",
            }
        ],
        "Silver": [
            {
                img: "st.png",
                
            },
            {
                img: "ncs.png",
            },
            {
                img: "millennium.png",
            },
        ],
    };

    return (
        <>
            <Header>Sponsors</Header>
            <div className="sponsors-container">
                {
                    Object.entries(data).map(([tier, logos], i) => <div className="sponsor-tier-container" key={i}>
                        <div className="sponsor-tier">
                            <h2>{tier}</h2>
                        </div>
                        {
                            logos.map((logo, j) => <img src={logo.img} className={`sponsor-logo ${logo.className ?? ""}`} key={j} />)
                        }
                    </div>)
                }
            </div>
        </>
    );
}

export default Sponsors;