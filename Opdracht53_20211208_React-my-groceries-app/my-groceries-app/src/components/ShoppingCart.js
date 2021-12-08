import React from "react"
import List from "./List.js"

function ShoppingCart(props) {
    console.log("this is props.list in ShoppingCart", props.list)

    return (
        <div>
            <h1>Shopping Cart</h1>
            <List listItems={props.list} handleClickItem={props.handleClickItem}/>
        </div>
    )
}

export default ShoppingCart