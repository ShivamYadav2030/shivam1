import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { useState } from 'react'

function App() {
 const [data,setData] = useState()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
