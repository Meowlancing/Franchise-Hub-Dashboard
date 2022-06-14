import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/FranRegList';
import Login from './pages/Login';
import BrandPage from './pages/BrandPage';
import Registration from './components/RegForm';
import VideoSection from './components/VideoSection';
import Events from './components/Events';
import FreeAd from "./pages/FreeAd"
import NewsLet from "./pages/NewsLet"
import AddEvent from './components/pages/AddEvent';
import AddVideos from './components/pages/AddVideos';
import UpdateVideo from './components/pages/UpdateVideo';
import InstaApply from './components/InstaApply';
function App() {
  return (
    <div className='app'>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/videos/' element={<VideoSection/>} />
       <Route path='/events/' element={<Events/>} />
       <Route path='/free/' element={<FreeAd/>} />
       <Route path="/insta-apply" element={<InstaApply />} />
       <Route path='/newsletter/' element={<NewsLet/>} />
       <Route path='/access/' element={<Login/>} />
       <Route path='/addevent' element={<AddEvent/>} />
       <Route path='/addvideos' element={<AddVideos/>} />
       <Route path='/updatevideos/:type' element={<UpdateVideo/>} />
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