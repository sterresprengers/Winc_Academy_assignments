import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const items = props.listItems.map(item => {
        return <ListItem key={item.id} item={item} handleClickGroceryItems={props.handleClickGroceryItems}/>
    })
    return (
        <ul>
            {items}
        </ul>
    )
}

export default List 