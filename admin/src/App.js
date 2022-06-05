import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List';
import Login from './pages/Login';
import BrandPage from './pages/BrandPage';



function App() {
  return (
    <div className='app'>
     <Routes>
       <Route path='/' element={<Home/>} />
       
       <Route path='/login/' element={<Login/>} />
       <Route path='/videos/' element={<Login/>} />
       <Route path='/events/' element={<Login/>} />
       <Route path='/events/' element={<Login/>} />

       <Route path='users'>
         <Route index element={<List/>}/>
         <Route path=':franchisor-reg' element={<BrandPage/>}/>
         <Route path=':userId' element={<BrandPage/>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App;   