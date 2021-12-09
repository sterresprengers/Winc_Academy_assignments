import React from "react"
import List from "./List.js"

const GroceryList = ({groceryItems, handleClickGroceryItems}) => {
    return (
        <div>
            <List listItems={groceryItems} handleClickGroceryItems={handleClickGroceryItems}/>
            </div>
        
    )
}

export default GroceryList