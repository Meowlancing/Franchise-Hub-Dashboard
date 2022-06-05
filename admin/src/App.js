import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List';
import Login from './pages/Login';
import BrandPage from './pages/BrandPage';
import Registration from './components/RegForm';
import VideoSection from './components/VideoSection';



function App() {
  return (
    <div className='app'>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/videos/' element={<VideoSection/>} />
       <Route path='/events/' element={<BrandPage/>} />
       <Route path='/newsletter/' element={<BrandPage/>} />
       <Route path='/free/' element={<BrandPage/>} />
       <Route path='/access/' element={<Login/>} />

       <Route path='users'>
         <Route index element={<List/>}/>
         <Route path=':franchisor-reg' element={<Registration/>}/>
         <Route path=':userId' element={<BrandPage/>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App;   