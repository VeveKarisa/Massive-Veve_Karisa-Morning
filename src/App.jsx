import { useState } from 'react'
import Navigation from './components/Layout/Navigation'
import Main from './components/Layout/Main'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Experience from './components/Pages/experience'
import Portfolio from './components/Pages/Portfolio'
import Contact from './components/Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main>
      <Home/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </Main>
    
    </>
  )
}

export default App
