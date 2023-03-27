import React from 'react'
import {Navbar,Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas} from './components';

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  )
}

export default App