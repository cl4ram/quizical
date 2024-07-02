import {decode} from 'html-entities';
/* eslint-disable react/prop-types */

export default function Question(props){

    const answerElement = props.answers.map((answer, i) => {
        let styles = {}
        if(props.checked){
            if (answer === props.q.correct){
                styles = { 
                    backgroundColor: '#94D7A2',
                    border: 'none',
                  }
            } else if (answer === props.q.selected) {
                styles = { 
                    backgroundColor: '#F8BCBC',
                    border: 'none',
                    opacity: '70%',
                  }
            } else {
                styles = { 
                    opacity: '70%',
                  }
            }
        }
        return (
            <button 
                key={i}
                onClick={() => props.handleClick(props.id, answer)}
                style={styles}
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