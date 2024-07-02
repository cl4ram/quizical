import { useState } from 'react'
import './App.css'
import QuizScreen from './pages/QuizScreen'
import StartScreen from './pages/StartScreen'
import bubbleBlue from './assets/background-blue.png'
import bubbleYellow from './assets/background-yellow.png'


function App() {
  const [start, setStart] = useState(false)

  function startGame(){
    setStart(true)
  }


  return (
    <>
      <img className='bubble blue' src={bubbleBlue} alt="Background buble" />
      <img className='bubble yellow' src={bubbleYellow} alt="Background buble" />

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
