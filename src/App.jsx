import React from 'react'
import Chart from './components/1-top/chart'
import Api from './components/3-top/Dinamik'
import Interektiv from './components/4-top/interektiv'
import Allchats from './components/2-top'

function App() {
  return (
    <div>
      <Allchats></Allchats>
      <Chart></Chart>
      <Api></Api>
      <Interektiv></Interektiv>
    </div>
  )
}

export default App
