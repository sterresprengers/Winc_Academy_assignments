import React from "react"

function ListItem({item, handleClickGroceryItems}) {
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={handleClickGroceryItems}
            value={item.title}
        >{item.title}</li>
    )
}

export default ListItem