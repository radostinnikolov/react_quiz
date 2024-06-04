import { useEffect, useRef, useState } from "react";
import Question from "./Question";

export default function Questions( {configData} ) {

    const [questions, setQuestions] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const userAnswers = useRef([]);
  
    useEffect(() => {
        async function getQuestions(){
            let data = {...configData}
            let mainUrl = `https://opentdb.com/api.php?amount=${data.number}`;
            data.category ? mainUrl += `&category=${data.category}` : mainUrl;
            data.difficulty ? mainUrl += `&difficulty=${data.difficulty}` : mainUrl;
            data.type ? mainUrl += `&type=${data.type}`: mainUrl;
            
            let response = await fetch(mainUrl)
            response = await response.json()
            setQuestions(response["results"])
        }
        getQuestions()
    }, [configData]);

    function handleAnswer(answer){
        if (currentQuestionIndex >= questions.length - 1){
            setIsFinished(true);
        }
        userAnswers.current.push(answer)
        setCurrentQuestionIndex((prevState) => prevState + 1)
    }

    return (
        <>
        <div>
        {!questions ? <h1>loading</h1> : undefined}
        {questions && !isFinished ? <Question questionObj={questions[currentQuestionIndex]} onAnswer={handleAnswer}/> : undefined}
        {isFinished && userAnswers.current.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        
        </>
    )
}