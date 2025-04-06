import AboutWindowFrame from './components/About/AboutWindowFrame/AboutWindowFrame';
import Background from './components/Background/Background';
import Countdown from './components/Countdown/Countdown';
import Hero from './components/Hero/Hero';
import MapWindowFrame from './components/Map/MapWindowFrame/MapWindowFrame';
import ProblemStatementsTree from './components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree';
import Timeline from './components/Timeline/Timeline';

import './App.css';
import Prizes from './components/Prizes/Prizes';

function App() {
    return (
        <>
            <Background />

            <div>
                <Hero />

                <section>
                    <Countdown />
                </section>

                <section className="about">
                    <AboutWindowFrame />
                </section>

                <section>
                    <ProblemStatementsTree />
                </section>

                <section>
                    <Timeline />
                </section>

                <section>
                    <Prizes />
                </section>

                <section>
                    <MapWindowFrame />
                </section>
            </div>
        </>
    )
}

export default App
