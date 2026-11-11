import { Link } from "react-router";
import useFetch from "./useFetch/useFetch";
import Item from "./items/Item";
import "./Products.css";

function Products () {
  const item = useFetch('https://fakestoreapi.com/products');
  const {products, error, loading} = item;
 
  const cart = [];
  function addToCart(item) {
    cart.push(item);
    console.log(cart)
  }
  console.log(cart);
  return <>
    <p>This is the Products Page.</p>
    <Link to="/">Click to go back</Link>
    {error ? <p>Error</p> :(
      loading ? <p>Loading...</p> :
        (
          <div className="itemGrid">
          {
            products.map((item) => {
            return <Item key={item.id} product={item} action={addToCart} />
            })
          }
          </div>
           
        )
    )}
  </>
}

export default Products
