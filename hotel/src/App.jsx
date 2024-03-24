import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Route>
      
    </Routes>
  )
}

export default App
