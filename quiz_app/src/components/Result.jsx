import { decode } from 'html-entities';

export default function Result( { userAnswers, correctAnswers, questions } ){
    const correctBackgroundClass = 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 my-5 mx-96 text-xl'
    const wrongBackgroundClass = 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 my-5 mx-96 text-xl'
    return (
        <>
        {questions.map((item, index) => 
        <div key={index} className={userAnswers[index] === correctAnswers[index] ? correctBackgroundClass : wrongBackgroundClass}>
        <h1 className='font-bold'>Question {index + 1}: {decode(item.question)}</h1>
        <div className='flex-row flex justify-center space-x-10'>
        <p>Your answer: {userAnswers[index]}</p>
        <p>Correct answer: {decode(correctAnswers[index])}</p>
        </div>

        </div>
        
        )}
        </>
    )
}