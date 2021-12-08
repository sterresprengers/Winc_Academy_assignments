import React from "react"
import List from "./List.js"

function GroceryList(props) {
    console.log("this is props in GroceryList", props)
    // props = list
    return (
        <div>
            <h1>Grocery List</h1>
            <List listItems={props.list} handleClickItem={props.handleClickItem}/>
            </div>
        
    )
}

export default GroceryList