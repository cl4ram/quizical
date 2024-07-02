import { useEffect, useState } from "react"
import Question from "../components/Question"

export default function QuizScreen(){
  const [questions, setQuestions] = useState([])

  const shuffleArray = (arr) => arr.sort(() => .5 - Math.random());

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
  }, [])

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

  const questionElement = questions.length !== 0 
  ? questions.map(question => {
      return (
        <Question 
        key={question.id} 
        id={question.id} 
        q={question}
        question={question.question} 
        answers={question.answers} 
        handleClickAnswer={handleClickAnswer}/>
      )
    })
  : <div>Loading</div>

  console.log(questions)

  return (
    <div className="quiz-screen">
      {questionElement}
    </div>
  );
}