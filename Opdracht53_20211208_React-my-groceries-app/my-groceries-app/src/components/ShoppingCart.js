import React from "react";
import List from "./List";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
  return (
    <React.Fragment>
      <button className="button-primary" onClick={handleClickEmptyCart}>
        Leeg de winkelmand
      </button>
      <List readonly={true} items={groceryItems} />
    </React.Fragment>
  );
};

export default ShoppingCart;

// import React from "react"
// import List from "./List.js"

// function ShoppingCart({shoppingItems, emptyCart}) {
//     return (
//         <div>            
//             <button onClick={emptyCart}>Empty cart</button>
//             <List items={shoppingItems} readonly={true}/>
//         </div>
//     )
// }

// export default ShoppingCart