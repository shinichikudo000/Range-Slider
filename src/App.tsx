import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState('5000')

  function interpolate(value :any, inMin: number, inMax: number, outMin: number, outMax: number) {
    return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  }

  const interpolatedCount = interpolate(count, 1, 10000, 0.01, 100.00)
  
  const handleChange = (e: any) => {
    setCount(e.target.value)
  }
  return (
    <>
      <div className="wrapper">
        <div className="amount">
          <sup>$</sup>
          <span className="dollars">{interpolatedCount.toFixed(2)}</span>
        </div>
        <input type="range" id="priceRange" min="0" max="10000" step="1" value={count} onChange={handleChange}/>
        <br />
        <button>Buy Now</button>
        <script src="app.js"></script>
      </div>
    </>
  )
}

export default App
