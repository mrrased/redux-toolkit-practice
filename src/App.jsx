import { useState } from 'react'
import CounterSlice from './Features/Counter/CounterSlice'
import Counter from './Components/Counter/Counter'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import TestModal from './Components/TestModal/TestModal'


function App() {
  

  return (
    <div>
      {/* <Home /> */}
      <Header />
      <Counter />
      <TestModal />
    </div>
  )
}

export default App
