import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./routes/Home";
import Favorites from "./routes/Favorites";
import MyBooks from "./routes/MyBooks";
import Footer from "./components/Footer/Footer";
import BookInfo from "./routes/BookInfo";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/bookinfo/:id" element={<BookInfo />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/mybooks" element={<MyBooks />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
