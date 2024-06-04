import { useState } from 'react'
import './App.css'
import NavigationBar from './components/Navigationbar.jsx'
import StartingScreen from './components/StartingScreen.jsx'
import ConfigScreen from './components/ConfigScreen.jsx'
import Questions from './components/Questions.jsx'

function App() {
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [config, setConfig] = useState(undefined);



  function handleConfig(data){
    setConfig({...data});
  }

  function handleGameStart(){
    setGameHasStarted(true)
  }

  return (
    <div className="h-screen bg-gradient-to-r from-green-100 via-green-300 to-green-700">
        <NavigationBar />
        {!gameHasStarted && !config ? <StartingScreen onStart={handleGameStart}/> : undefined}
        {gameHasStarted && !config ? <ConfigScreen onConfig={handleConfig}/> : undefined}
        {gameHasStarted && config ? <Questions configData={config}/>: undefined}

    </div>
      
  )
}

export default App
