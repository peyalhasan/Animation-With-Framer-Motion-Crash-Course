import './App.css'
import { Route, Routes, useLocation } from "react-router"
import ButtonTap from './Components/ButtonTap'
import Counter from './Components/Counter'
import Keyframe from './Components/Keyframe'
import ScrollReveal from './Components/ScrollReveal'
import Simple from './Components/Simple'
import Stagger from './Components/Stagger'
import TextMotion from './Components/TextMotion'
import Variants from './Components/Variants'
import TransitionType from './TransitionType'
import Home from './Components/Home'
import { AnimatePresence } from 'motion/react'

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} exact />
          <Route path="/Stagger" element={<Stagger />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/keyframe" element={<Keyframe />} />
          <Route path="/button-tap" element={<ButtonTap />} />
          <Route path="/text-motion" element={<TextMotion />} />
          <Route path="/transition" element={<TransitionType />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/scroll" element={<ScrollReveal />} />
          <Route path="/variants" element={<Variants />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
