import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import Calculadora from './componentes/Calculadora.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Calculadora</h1>
      <div className="container">
        <Calculadora/>
      </div>
      <PWABadge />
    </>
  )
}

export default App
