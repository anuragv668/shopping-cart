import { useState } from "react";
import { Link, Outlet } from "react-router"
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prev => [...prev, item] );
  }
  console.log(cart);

  return (
    <>
      <div className="logo">
        <Link className="nav-link" to="/">
        The Shoppers Hub
        </Link>
      </div> 
      <nav>
          <Link className="nav-link" to="/">Homepage</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
      </nav>
      <Outlet context={{cart, addToCart}}/>
    </>
  )
}

export default App
