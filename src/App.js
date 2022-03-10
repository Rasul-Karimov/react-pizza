import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { setPizzas } from "./redux/action/pizzas";
function App() {
  const dispatch = useDispatch();

  useEffect(function () {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

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
