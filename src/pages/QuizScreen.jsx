import { useEffect, useState } from "react"
import Question from "../components/Question"

export default function QuizScreen(){
  const [questions, setQuestions] = useState([])
  const [allChecked, setAllChecked] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [start, setStart] = useState(0)

  const shuffleArray = (arr) => arr.sort(() => .5 - Math.random());
  const questionElement = questions.map(question => {
      return (
        <Question 
        key={question.id} 
        id={question.id} 
        q={question}
        question={question.question} 
        answers={question.answers} 
        checked={allChecked}
        handleClick={handleClickAnswer}/>
      )
    })

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://opentdb.com/api.php?amount=5')
      const data = await res.json()
      let array = []
      data.results.forEach((question, i) => {
        array.push(
          {
            id: i, 
            question: question.question, 
            correct: question.correct_answer, 
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), 
            selected: null, 
            checked: false,
          })
      })
      setQuestions(array)
    }
    getData()
  }, [start])

  function handleClickAnswer(id, answer){
    setQuestions(prevQuestions => prevQuestions.map(question => {
      return question.id === id
      ?{...question,
        selected: answer,
      }
      :
      question
    }))
  }

  function handleSubmit(){
    const allChecked = questions.every(question => question.selected !==null)
    let correctAnswers = 0
    if(questions.length > 0 && allChecked){
      questions.map(question =>{
        if(question.selected === question.correct){
          return correctAnswers += 1
        }
      })
    } else { return}
    setAllChecked(allChecked)
    setCorrect(correctAnswers)
  
  }

  function playAgain(){
    setStart(game => game + 1)
    setAllChecked(false)
    setQuestions([])
    setCorrect(0)
  }

  return (
    <div className="quiz-screen">
      {questions.length !== 0
      ?
      <div className="container">
        {questionElement}
        <div className="handlers-container">
        {!allChecked
        ? 
        <button className="button check" onClick={handleSubmit}>Check answers</button> 
        : 
        <>
        {allChecked && <p className="scores">You scored {correct}/5 correct answers </p>}
        <button className="button again" onClick={playAgain}>Play again</button>
        </>
        }
        

        </div>
      </div>
      :
      <div>Loading...</div>}
    </div>
  )
}


