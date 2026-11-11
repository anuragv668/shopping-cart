import { Link, useOutletContext } from "react-router";
import Item from "../products/items/Item";

function Cart () {

  const {cart} = useOutletContext();

  return (
    <>
      <p>This is the cart page.</p>
      <Link to="/">Click here to go back</Link>
      <div className="itemGrid">
          {
            cart.map((item) => {
            return <Item key={item.product.id} product={item.product} />
            })
          }
      </div>
    </>
  )
}
export default Cart
