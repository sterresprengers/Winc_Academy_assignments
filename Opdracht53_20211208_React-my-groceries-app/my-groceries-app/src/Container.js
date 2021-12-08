import React from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "Apples"},
                {id: 2, title: "Carton of milk"},
                {id: 3, title: "Box of eggs"},
                {id: 4, title: "Sixpack of beer"}
            ],
            shoppingListItems: [
                {id: 5, title: "Bread"},
                {id: 6, title: "Peanut butter"}
            ]
        }
        this.handleClickItem = this.handleClickItem.bind(this)
    }

    handleClickItem(event) {
        console.log("clicked handleClickItem with", event)
        this.setState({
            shoppingListItems: [...this.state.shoppingListItems].concat([event])
        })
    }

    render() {
        return (
            <div>
                <GroceryList list={this.state.groceryItems} handleClickItem={this.handleClickItem}/>
                <ShoppingCart list={this.state.shoppingListItems}/>
            </div> 
            
        )
    }
}

export default Container