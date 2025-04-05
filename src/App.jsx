import './App.css';
import AboutWindowFrame from './components/About/AboutWindowFrame/AboutWindowFrame';
import Background from './components/Background/Background';
import Countdown from './components/Countdown/Countdown';
import Hero from './components/Hero/Hero';
import ProblemStatementsTree from './components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree';
import Timeline from './components/Timeline/Timeline';

function App() {
    return (
        <>
            <Background />

            <div>
                <Hero />

                <section>
                    <Countdown />
                </section>

                <section>
                    <AboutWindowFrame />
                </section>

                <section>
                    <ProblemStatementsTree />
                </section>

                <section>
                    <Timeline />
                </section>
            </div>
        </>
    )
}

export default App
