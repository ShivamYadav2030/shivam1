import React from 'react'
import './App.css'
import ViewUsers from './components/ViewUsers'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header></Header>
      <ViewUsers></ViewUsers>
      <Footer></Footer>
    </div>
  )
}

export default App