import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from 'next/error';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <BrowserRouter basename='/Foodfare'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<ProtectedRoutes element={<Success/>} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
