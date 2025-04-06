import AboutWindowFrame from './components/About/AboutWindowFrame/AboutWindowFrame';
import Background from './components/Background/Background';
import Countdown from './components/Countdown/Countdown';
import Hero from './components/Hero/Hero';
import MapWindowFrame from './components/Map/MapWindowFrame/MapWindowFrame';
import ProblemStatementsTree from './components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree';
import Timeline from './components/Timeline/Timeline';

import './App.css';
import Prizes from './components/Prizes/Prizes';
import Register from './components/Register/Register';
import EntranceAnimation from './components/common/EntranceAnimation/EntranceAnimation';

function App() {
    return (
        <>
            <Background />

            <div>
                <Hero />

                <section>
                    <Countdown />
                </section>
                
                <EntranceAnimation>
                    <section className="about">
                        <AboutWindowFrame />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <ProblemStatementsTree />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <Timeline />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <Prizes />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <Register />
                    </section>
                </EntranceAnimation>

                <EntranceAnimation>
                    <section>
                        <MapWindowFrame />
                    </section>
                </EntranceAnimation>
            </div>
        </>
    )
}

export default App
