import { useState } from "react";
import "./items.css";
import { useOutletContext } from "react-router";

function Item ({product }) {

  const [itemCount, setItemCount] = useState(1);
  const {addToCart} = useOutletContext();

  function increaseCount () {
    setItemCount((prev) => prev + 1);
  }

  function decreaseCount () {
    setItemCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      };
      return 0;
    });
  } 

  return (
    <div className="itemContainer">
      <img src={product.image} />
      <div className="itemTitle">
        {product.title}
      </div>
      <div className="itemPrice">
        ${product.price}
      </div>
      <div className="itemControls">
        <button onClick={increaseCount} >+</button>
        <div className="itemCount">
          {itemCount} 
        </div>
        <button onClick={decreaseCount}>-</button>
        <button onClick={() => {
          if (itemCount == 0) return
          addToCart({product, itemCount})
          }
        }>cart</button>
      </div>
    </div>
  );
}  

 

export default Item;
