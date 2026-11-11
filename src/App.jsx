import { useState } from "react";
import { Link, Outlet } from "react-router"

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prev => [...prev, item] );
  }
  console.log(cart);

  return (
    <>
      <p>This is the main Page</p>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Outlet context={{cart, addToCart}}/>
    </>
  )
}

export default App
