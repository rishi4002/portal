import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
import Jobpage from './Jobpage.jsx';
import Inputpage from './Inputpage.jsx';
import About from './About.jsx';
import './App.css';
import { Routes, Route} from 'react-router';

function App() {
  

  return (
   <div className='appdiv'>
      <Navbar/>
      <div className='maindiv'>
        <Routes>
          <Route path='/jobs/:place/:qualification' element={<Jobpage/>}/>
          <Route path='/' element={<Inputpage/>}/>
          <Route path='/aboutMe' element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
   </div>
      
  
  )
}

export default App
