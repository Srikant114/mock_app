import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import "./App.css"
import Data from './components/Data'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path="data" element={<Data/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App