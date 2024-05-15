import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./routes/Nav"
import Home from "./routes/Home"
import Favorites from "./routes/Favorites";
import MyBooks from "./routes/MyBooks";
import BookInfo from "./routes/BookInfo";


import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/bookinfo/:bookId" element={<BookInfo />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/mybooks" element={<MyBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

