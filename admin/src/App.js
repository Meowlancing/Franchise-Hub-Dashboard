import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import List from './pages/FranRegList';
import Login from './pages/Login';
import BrandPage from './pages/BrandPage';
import Registration from './components/RegForm';
import VideoSection from './components/VideoSection';
import Events from './components/Events';
import FreeAd from "./pages/FreeAd"
import NewsLet from "./pages/NewsLet"


function App() {
  return (
    <div className='app'>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/videos/' element={<VideoSection/>} />
       <Route path='/events/' element={<Events/>} />
       <Route path='/free/' element={<FreeAd/>} />
       <Route path='/newsletter/' element={<NewsLet/>} />
       <Route path='/access/' element={<Login/>} />

       <Route path='users'>
         <Route index element={<List/>}/>
         <Route path=':franchisor-reg' element={<List/>}/>
         <Route path=':reg-form' element={<Registration/>}/>
         <Route path=':userId' element={<BrandPage/>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App;   