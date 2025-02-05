import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './view/Homepage';
import EditKomponent from './components/EditKombatant';
import ViewKombatant from './components/ViewKombatant';

function App() {

  return (
    <>
    <h1>MK DB</h1>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='/editKombatant/:id' element={<EditKomponent/>}/> 
      <Route path='/viewKombatant/:id' element={<ViewKombatant/>}/>
    </Routes>
    </>
  )
}

export default App
