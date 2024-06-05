import { useEffect, useRef, useState } from "react";
import Question from "./Question";
import Result from "./Result";

export default function Questions( {configData} ) {

    const [questions, setQuestions] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const userAnswers = useRef([]);
  
    useEffect(() => {
        async function getQuestions(){
            let mainUrl = `https://opentdb.com/api.php?amount=${configData.number}`;
            configData.category ? mainUrl += `&category=${configData.category}` : mainUrl;
            configData.difficulty ? mainUrl += `&difficulty=${configData.difficulty}` : mainUrl;
            configData.type ? mainUrl += `&type=${configData.type}`: mainUrl;
            
            let response = await fetch(mainUrl)
            response = await response.json()
            setQuestions(response["results"])
        }
        getQuestions()
    }, [configData]);

    function handleAnswer(answer){
        setTimeout(() => {
            if (currentQuestionIndex >= questions.length - 1){
                setIsFinished(true);
            }
            userAnswers.current.push(answer)
            setCurrentQuestionIndex((prevState) => prevState + 1)
        }, 3000)
        
    }

    return (
        <>
        <div>
        {!questions ? <h1>loading</h1> : undefined}
        {questions && !isFinished ? <Question key={currentQuestionIndex} questionObj={questions[currentQuestionIndex]} onAnswer={handleAnswer}/> : undefined}
        {isFinished && <Result userAnswers={userAnswers.current} correctAnswers={questions.map(item => item['correct_answer'])}/>}
        </div>
        
        </>
    )
}