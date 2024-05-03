import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateRecipes from './components/CreateRecipes';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Recipesdetails from './components/Recipesdetails';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createrecipes' element={<ProtectedRoute><CreateRecipes /></ProtectedRoute>} />
        <Route path='/favorites' element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        <Route path='/recipe/:ids' element={<Recipesdetails />} />
      </Routes>
    </>
  )
}

export default App