import AboutWindowFrame from "./components/About/AboutWindowFrame/AboutWindowFrame";
import Background from "./components/Background/Background";
import ContactUs from "./components/ContactUs/ContactUs";
import Countdown from "./components/Countdown/Countdown";
import EntranceAnimation from "./components/common/EntranceAnimation/EntranceAnimation";
import FAQs from "./components/FAQs/FAQs";
import Hero from "./components/Hero/Hero";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ProblemStatementsTree from "./components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree";
import Prizes from "./components/Prizes/Prizes";
import Register from "./components/Register/Register";
import Sponsors from "./components/Sponsors/Sponsors";
import Timeline from "./components/Timeline/Timeline";
import Workshops from "./components/Workshops/Workshops";

import "./App.css";

function App() {
    return (
        <>
            <Background />
            <NavigationMenu />

            <div id="page-wrap">
                <Hero />

                <section>
                    <Countdown />
                </section>
                
                <EntranceAnimation>
                    <section id="about" className="about-section">
                        <AboutWindowFrame />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section id="problem-statements">
                        <ProblemStatementsTree />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section id="timeline">
                        <Timeline />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section id="prizes">
                        <Prizes />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section className="register-section">
                        <Register />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <Sponsors />
                    </section>
                </EntranceAnimation>

                {/* <EntranceAnimation>
                    <section>
                        <Workshops />
                    </section>
                </EntranceAnimation> */}

                <EntranceAnimation>
                    <section id="faqs">
                        <FAQs />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <ContactUs />
                    </section>
                </EntranceAnimation>
            </div>
        </>
    )
}

export default App
