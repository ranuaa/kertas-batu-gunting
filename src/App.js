import { useEffect, useState } from 'react'
import './App.css'
import Hasil from './components/Hasil'
import Pilihan from './components/Pilihan'
import Skor from './components/Skor'

const App = () => {
  const [userChoice, setUserChoice] = useState('batu')
  const [computerChoice, setComputerChoice] = useState('batu')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Siapa Yang Akan Menang')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['batu', 'kertas', 'gunting']

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'guntingkertas' || comboMoves === 'batugunting' || comboMoves === 'kertasbatu') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('Kamu Menang')
        if (updatedUserPoints === 5){
          setResult('Selamat Kamu Menang')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'kertasgunting' || comboMoves === 'guntingbatu' || comboMoves === 'batukertas') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Komputer Menang')
        if (updatedComputerPoints === 5) {
          setResult('Yah Kamu Kalah :(')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'kertaskertas' || comboMoves === 'batubatu' || comboMoves === 'guntinggunting') {
        setTurnResult('Draw Bosskuh')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      
      <h1 
      style={{color: 'white'}}
      >batu-kertas-gunting</h1>
      <Skor userPoints={userPoints} computerPoints={computerPoints} />

      <Pilihan userChoice={userChoice} computerChoice={computerChoice} />
      
      <div className='button-div'>
        {choices.map((choice, index) =>
          <div className='button'>
            <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
          </div>
          
        )}
      </div>

      <Hasil turnResult={turnResult} result={result} />
     
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}


export default App