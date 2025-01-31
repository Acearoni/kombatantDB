import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './view/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>MK DB</h1>
    <Routes>
      <Route index element={<Homepage/>}/>
    </Routes>
    </>
  )
}

export default App
