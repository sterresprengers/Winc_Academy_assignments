import React from "react"

function ListItem(prop) {

    function handleOnClick(item) {
        prop.handleClickItem(item)
    }

    return (
        <li
            key={prop.id}
            className="list-item"
            onClick={() => handleOnClick(prop)}
            value={prop.title}
        >{prop.title}</li>
    )
}

export default ListItem