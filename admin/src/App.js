import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List';
import Login from './pages/Login';
import New from './pages/New';
import Single from './pages/Single';
function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       
       <Route path='/Login/' element={<Login/>} />
       <Route path='users'>
         <Route index element={<List/>}/>
         <Route path=':userId' element={<Single/>}/>
         <Route path='new' element={<New/>}/>
       </Route>
       <Route path='products'>
         <Route index element={<List/>}/>
         <Route path=':productId' element={<Single/>}/>
         <Route path='new' element={<New/>}/>
       </Route>
     </Routes>
    </>
  )
}

export default App;   