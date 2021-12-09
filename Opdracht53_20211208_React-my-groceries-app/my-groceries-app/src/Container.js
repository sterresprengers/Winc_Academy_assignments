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
        this.handleClickGroceryItems = this.handleClickGroceryItems.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
    }

    handleClickGroceryItems(event) {
        const clickedItem = event.target.getAttribute("value")
        const clickedItemId = event.target.getAttribute("key")
        this.setState({
            shoppingListItems: [...this.state.shoppingListItems].concat({id: clickedItemId, title: clickedItem })
        })
    }

    emptyCart() {
        this.setState({ shoppingListItems: []})
    }

    render() { 
        return (
            <main className="container">
                <div className="groceries-list groceries">
                    <h1>Groceries List</h1>
                    <GroceryList 
                        groceryItems={this.state.groceryItems} 
                        handleClickGroceryItems={this.handleClickGroceryItems}
                    />
                </div>
                <div className="groceries-list basket">
                    <h1>Shopping Cart</h1>
                    <ShoppingCart 
                        shoppingItems={this.state.shoppingListItems} 
                        emptyCart={this.emptyCart}
                    />
                </div>
                
            </main> 
            
        )
    }
}

export default Container