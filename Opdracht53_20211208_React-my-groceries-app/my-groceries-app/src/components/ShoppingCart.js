import React from "react"
import List from "./List.js"

function ShoppingCart({shoppingItems, emptyCart}) {
    return (
        <div>            
            <button onClick={emptyCart}>Empty cart</button>
            <List listItems={shoppingItems} />
        </div>
    )
}

export default ShoppingCart