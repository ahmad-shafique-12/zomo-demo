import React from 'react'
import Header from './Component/Header'
import Categoris from './Component/Categoris'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import CategoriseProduct from './Pages/CategoriseProduct'
import Finaldetail from './Pages/Finaldetail'
import SearchData from './Pages/SearchData'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catagory/:url' element={<CategoriseProduct/>}/>
      <Route path='/viewcart' element={<Finaldetail/>}/>
      <Route path='/searhitem/:item' element={<SearchData/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
