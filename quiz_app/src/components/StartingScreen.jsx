export default function StartingScreen({ onStart }){
    return (
        <>
        <div className="text-center mt-20"> 
            <h1 className="text-teal-900 text-5xl font-extrabold"> 
                Welcome to the Quiz Game! 
            </h1> 
            <h2 className="text-2xl"> 
                Press the button to start the quiz!
            </h2> 
            </div> 
    
            <div className="flex justify-center items-center pt-12">
            <button onClick={onStart} className="my-5 text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-4xl px-24 py-12 text-center me-2 mb-2">Start</button>
        </div>
        </>
        
    )
}