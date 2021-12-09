import React from "react";

const ListItem = ({ clickItem, readonly, item }) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <span> {item.title || ""}</span>
      <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
    </li>
  );
};

export default ListItem;

// import React from "react"

// function ListItem({item, handleClickGroceryItems, readonly}) {
//     return (
//         <li
//             key={item.id}
//             className="list-item"
//             onClick={handleClickGroceryItems}
//             value={item.title}
//         >
//             <span>{item.title}</span>
//             <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
//         </li>
//     )
// }

// export default ListItem