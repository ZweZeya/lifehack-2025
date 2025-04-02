import './App.css'
import AboutWindowFrame from './components/About/AboutWindowFrame/AboutWindowFrame'
import Background from './components/Background/Background'
import ProblemStatementsTree from './components/ProblemStatements/ProblemStatementsTree/ProblemStatementsTree'

function App() {
    return (
        <>
            <Background />

            <div>
                <AboutWindowFrame />
                <ProblemStatementsTree />
            </div>
        </>
    )
}

export default App
