import React from "react"
import List from "./List.js"
import InputField from "./InputField"

const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
  return (
    <React.Fragment>
      <InputField onSubmit={addGrocery} />
      <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    </React.Fragment>
  );
};

export default GroceryList;

// import React from "react"
// import List from "./List.js"
// import InputField from "./InputField"

// const GroceryList = ({groceryItems, handleClickGroceryItems, handleAddGrocery}) => {
//     return (
//         <div>
//             <InputField onSubmit={handleAddGrocery}/>
//             <List items={groceryItems} handleClickGroceryItems={handleClickGroceryItems}/>
//         </div>
//     )
// }

// export default GroceryList