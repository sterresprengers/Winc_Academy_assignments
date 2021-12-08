import React from "react"
import ListItem from "./ListItem"

function List(props) {
    // props = listItems


    const items = props.listItems.map(item => {
        return <ListItem key={item.id} title={item.title} id={item.id} handleClickItem={props.handleClickItem} />
    })
    
    console.log("generated items in List with maps", items)            
    return (
        <ul>
            {items}
        </ul>
    )
}

export default List 