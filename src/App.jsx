import { BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
