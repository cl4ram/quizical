import { useState } from 'react'
import './App.css'
import QuizScreen from './pages/QuizScreen'
import StartScreen from './pages/StartScreen'


function App() {
  const [start, setStart] = useState(false)

  function startGame(){
    setStart(true)
  }


  return (
    <>
      <main>
        {!start
        ?
        <StartScreen
          startGame={startGame}
        />
        : 
        <QuizScreen/>
        }
      </main>
      
    </>
  )
}

export default App
