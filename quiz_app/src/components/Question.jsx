import { decode } from 'html-entities';
import { useState, useMemo } from 'react';


const shuffleAnswers = (answersArray) => { 
    return answersArray.sort(() => Math.random() - 0.5)
};

const unansweredClassess = "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
const correctAnswerClassess = "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
const wrongAnswerClassess = "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"

export default function Question({ questionObj, onAnswer }){
    const [correctAnswer, setCorrectAnswer] = useState();
    const [isAnswered, setIsAnswered] = useState(false);
    const answers = useMemo(() => shuffleAnswers([questionObj["correct_answer"], ...questionObj["incorrect_answers"]]), [questionObj])

    function handleUserAnswer(currentAnswer){
        setCorrectAnswer(questionObj["correct_answer"])
        setIsAnswered(true)
        onAnswer(decode(currentAnswer))
    }

    return (
        <>
        <div className='container-xl flex-auto h-screen justify-center text-center pt-80'>
        <p>{decode(questionObj.question)}</p>
        <div>
        {answers.map(item => 
        <button 
        key={item} 
        onClick={() => handleUserAnswer(decode(item))} 
        className={isAnswered ? correctAnswer === decode(item) ? correctAnswerClassess : wrongAnswerClassess : unansweredClassess}
        disabled={isAnswered ? true : false}>{decode(item)}</button>)}
        </div>
        </div>
        
        </>
    )
}