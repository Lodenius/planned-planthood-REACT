import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import PlantInfo from './pages/plantInfo'
import Plants from './pages/Plants'


function App() {


    
    return (

        <Router>
        <header className='header'>
          <h3>PLANNED PLANTHOOD</h3>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Plants />} />
            <Route path='/plantInfo' element={<PlantInfo />} />
          </Routes>
        </main>
      </Router>

  )
}

export default App

