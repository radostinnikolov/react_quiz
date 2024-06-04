import { decode } from 'html-entities';

export default function Question({ questionObj, onAnswer }){
    const shuffleAnswers = (answersArray) => { 
        return answersArray.sort(() => Math.random() - 0.5)
    }; 

    const data = {...questionObj}
    const answers = shuffleAnswers([data["correct_answer"], ...data["incorrect_answers"]])

    

    return (
        <>
        <div className='container-xl flex-auto h-screen justify-center text-center pt-80'>
        <p>{decode(data.question)}</p>
        {answers.map(item => <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                key={item} 
                                onClick={()=> onAnswer(decode(item))}>
                                    {decode(item)}
                            </button>)}
        </div>
        
        </>
    )
}