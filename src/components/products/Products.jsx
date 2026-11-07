import { Link } from "react-router";
import useFetch from "./useFetch/useFetch";
import styledimage from "./Product.module.css";

function Products () {
const { product, error, loading } = useFetch('https://fakestoreapi.com/products/1');

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <>
    <p>This is the Products Page.</p>
    <Link to="/">Click to go back</Link>

    <br/>

    <img className={styledimage.product} src={product.image} alt={product.title} />
 
    
  </>
}

export default Products
