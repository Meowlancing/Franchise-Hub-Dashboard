import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List';
import ListAll from './pages/ListAll';
import Login from './pages/Login';
import New from './pages/New';
import Single from './pages/Single';
import ListApproved from "./pages/ListApproved"
import { userInputs, productInputs } from './formSource';

function App() {
  return (
    <div className='app dark'>
     <Routes>
       <Route path='/' element={<Home/>} />
       
       <Route path='/Login/' element={<Login/>} />
       <Route path='users'>
         <Route index element={<ListAll/>}/>
         <Route path=':userId' element={<Single/>}/>
         <Route path='new' element={<New inputs={userInputs} title='Add new franchisor'/>}/>
       </Route>
       <Route path='products'>
         <Route index element={<List/>}/>
         <Route path=':productId' element={<Single/>}/>
         <Route path='new' element={<New inputs={productInputs} title='Add new investor'/>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App;   