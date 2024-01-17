import { useState } from 'react'
import './App.css'
import { JokeApp } from './Components/JokeApp/Jokeapp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JokeApp></JokeApp>
    </>
  )
}

export default App
