import { Link, Outlet } from "react-router"

function App() {
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
      <Outlet /> 
    </>
  )
}

export default App
