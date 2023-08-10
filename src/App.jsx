import { useState } from 'react'
import Weather_Card from './components/Weather_Card'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather_Card/>
    </>
  )
}

export default App
