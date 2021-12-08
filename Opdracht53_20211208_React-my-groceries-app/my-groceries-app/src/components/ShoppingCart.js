import React from "react"
import List from "./List.js"

function ShoppingCart(props) {
    console.log("this is props.list in ShoppingCart", props.list)

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={props.emptyCart}>Empty cart</button>
            <List listItems={props.list} />
        </div>
    )
}

export default ShoppingCart