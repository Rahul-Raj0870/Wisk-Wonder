
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
