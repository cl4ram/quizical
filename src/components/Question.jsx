import {decode} from 'html-entities';
/* eslint-disable react/prop-types */

export default function Question(props){
    function handleClick(answer){
        props.handleClickAnswer(props.id, answer)
    }

    const answerElement = props.answers.map((answer, i) => {
        return (
            <button 
                key={i}
                onClick={() => handleClick(answer)}
                id={i}
                className={answer === props.q.selected ? 'answer selected' : 'answer'}
            >
                    {decode(answer)}
            </button>
        )}
    )

    return (
        <div className="question-item">
            <h2 className='question'>{decode(props.question)}</h2>
            <div className='answers-container'>
                {answerElement}
            </div>  
        </div>
    )
}