import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Info from './components/Info'
import Interests from './components/Interests'
import About from './components/About'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div class="main-box">
      <div class="main-inner-box">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
      </div>
  </div>
 ,
)
