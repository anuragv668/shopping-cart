import { Link } from "react-router";
import useFetch from "./useFetch/useFetch";
import Item from "./items/Item";

function Products () {
  const item = useFetch('https://fakestoreapi.com/products/1');
  console.log(item)
  return <>
    <p>This is the Products Page.</p>
    <Link to="/">Click to go back</Link>

    <br/>

    <Item data={item} />
 
  </>
}

export default Products
