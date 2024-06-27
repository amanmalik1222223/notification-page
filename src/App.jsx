import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white w-full h-screen font-sans'>
      <Body/>
      </div>
    </>
  )
}

export default App
