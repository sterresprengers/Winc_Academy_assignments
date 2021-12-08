import React from "react"

function ListItem(prop) {
    console.log("prop in ListItem", prop)
    // console.log("prop.id in ListItem", prop.id)
    // console.log("prop.item in ListItem", prop.item)

    function handleOnClick(item) {
        // event.preventDefault();
        // console.log("clicked from handleOnClick in ListItem", item)
        // console.log("this is prop.handleClickItem in handleOnClick", prop.handleClickItem)
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