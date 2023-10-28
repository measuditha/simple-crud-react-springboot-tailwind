import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUsers from './Service/Users/AddUsers'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addUsers' element={<AddUsers/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
