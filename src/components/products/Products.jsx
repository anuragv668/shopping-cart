import { Link } from "react-router";
import useFetch from "./useFetch/useFetch";
import Item from "./items/Item";

function Products () {
  const item = useFetch('https://fakestoreapi.com/products');
  const {products, error, loading} = item;
  
  return <>
    <p>This is the Products Page.</p>
    <Link to="/">Click to go back</Link>
    {error ? <p>Error</p> :(
      loading ? <p>Loading...</p> : 
        ( products.map((item) => {
          return <Item product={item}/>
        })
           )
    )}
  </>
}

export default Products
