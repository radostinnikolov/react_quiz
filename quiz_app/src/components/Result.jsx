export default function Result( { userAnswers, correctAnswers } ){
    // const data = userAnswers
    return (
        <>
        <h1>Your answers:</h1>
        {userAnswers.map((item, index) => <p key={index}>Question {index+1}: {item}</p>)}

        <h1>Correct answers:</h1>
        {correctAnswers.map((item, index) => <p key={index}>Question {index+1}: {item}</p>)}
        </>
    )
}