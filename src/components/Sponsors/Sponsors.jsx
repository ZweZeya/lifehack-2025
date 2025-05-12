import Header from "../common/Header/Header";

import "./Sponsors.scss";

const Sponsors = () => {
    const data = {
        "Gold": {
            color: "#FEBA17",
            logos: [
                {
                    className: "sponsor-logo--short",
                    img: "singtel.png",
                }
            ],
        },
        "Silver": {
            color: "#ffffff",
            logos: [
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
        },
        
    };

    return (
        <>
            <Header>Partner</Header>
            <div className="sponsors-container">
                <img src="b71.svg" style={{ height: "30vh" }}/>
            </div>

            <Header>Sponsors</Header>
            <div className="sponsors-container">
                {
                    Object.entries(data).map(([tier, tierData], i) => <div className="sponsor-tier-container" key={i}>
                        <div className="sponsor-tier">
                            <h2 className="sponsor-tier-text" style={{color: tierData.color}}>{tier}</h2>
                        </div>
                        {
                            tierData.logos.map((logo, j) => <img src={logo.img} className={`sponsor-logo ${logo.className ?? ""}`} key={j} />)
                        }
                    </div>)
                }
            </div>
        </>
    );
}

export default Sponsors;