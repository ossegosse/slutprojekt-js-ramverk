import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./routes/Nav"
import Home from "./routes/Home"
import Subjects from "./routes/Subjects"
import About from "./routes/About"


import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="about" element={<About />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
