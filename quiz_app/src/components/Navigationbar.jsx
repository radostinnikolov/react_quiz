import startingScreenLogo from "../assets/quiz_game_logo.png";


export default function NavigationBar() {
    return (
        <>
        <nav className="flex items-center text-center justify-center flex-wrap bg-gradient-to-r from-green-100 via-green-300 to-green-700 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <img src={startingScreenLogo} className="h-14 px-3" alt="quiz game logo" />                
                <span className="font-semibold text-3xl tracking-tight">Quiz Game</span>
            </div>
        </nav>
        </>
    )
}