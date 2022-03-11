import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
