import startingScreenLogo from "../assets/quiz_game_logo.png";

export default function StartingScreen({ onStart }){
    return (
        <>
        <div className="text-center py-10"> 
        <h1 className="text-teal-900 text-5xl"> 
            Welcome to the Quiz Game! 
        </h1> 
        <h2 className="text-2xl"> 
            Press the logo to start the quiz!
        </h2> 
    </div> 
  
        <div className="flex justify-center items-center pt-12">
            <a onClick={onStart}><img className="w-72 h-96" src={startingScreenLogo} alt="quiz game logo"></img></a>
            
        </div>
        </>
        
    )
}