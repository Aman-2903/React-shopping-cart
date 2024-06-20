//this is root component
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./component/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
