import './App.css';
import AboutWindowFrame from './components/About/AboutWindowFrame/AboutWindowFrame';
import Background from './components/Background/Background';
import Countdown from './components/Countdown/Countdown';
import Hero from './components/Hero/Hero';
import ProblemStatementsTree from './components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree';

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
                <ProblemStatementsTree />
            </div>
        </>
    )
}

export default App
