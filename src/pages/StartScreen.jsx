/* eslint-disable react/prop-types */
export default function StartScreen(props){
    return (
        <div className="start-screen">
            <h1 className="title">Quizzical</h1>
            <p className="description">Test your knowledge</p>
            <button className="start-button" onClick={props.startGame}>Start quiz</button>
        </div>
    )
}