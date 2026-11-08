import { useEffect, useState } from "react";
import "./items.css";

function Item ({data}) {
  const {product, error, loading} = data;
  const [itemCount, setItemCount] = useState(0);

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


    if (loading) {
      return (
        <div className="item">
          <p>Loading...</p>
        </div>
      );
    }
    if (product) {
    return (
      <div className="itemContainer">
        <img src={product.image} />
        <div className="itemTitle">
          {product.title}
        </div>
        <div className="itemPrice">
          {product.price}
        </div>
        <div className="itemControls">
          <button onClick={increaseCount} >+</button>
          <div className="itemCount">
            {itemCount} 
          </div>
          <button onClick={decreaseCount}>-</button>
          <button>cart</button>
        </div>
      </div>
    );
    }  
}
 

export default Item;
