import Header from "../common/Header/Header";

import "./Sponsors.scss";

const Sponsors = () => {
    const data = {
        "Gold": ["millennium.png",],
        "Silver": ["ncs.png",],
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
                            logos.map((logo, j) =><img src={logo} className="sponsor-logo" key={j} />)
                        }
                    </div>)
                }
            </div>
        </>
    );
}

export default Sponsors;