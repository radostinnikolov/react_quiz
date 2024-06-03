import { useState } from 'react'
import './App.css'
import NavigationBar from './components/Navigationbar.jsx'
import StartingScreen from './components/StartingScreen.jsx'
import ConfigScreen from './components/ConfigScreen.jsx'

function App() {
  const [gameHasStarted, setGameHasStarted] = useState(false)

  function handleGameStart(){
    setGameHasStarted(true)
  };

  return (
    <div className="h-screen bg-gradient-to-r from-green-100 via-green-300 to-green-700">
        <NavigationBar />
        {gameHasStarted ? <ConfigScreen /> : <StartingScreen onStart={handleGameStart}/>}
    </div>
      
  )
}

export default App
