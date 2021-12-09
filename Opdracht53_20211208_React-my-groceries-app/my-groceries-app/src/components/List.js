import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { items, readonly, handleClickItem } = this.props;
    const listItems = items
      ? items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            readonly={readonly}
            clickItem={handleClickItem}
          />
        ))
      : " ";

    return (
      <React.Fragment>
        <ul>{listItems}</ul>
      </React.Fragment>
    );
  }
}

export default List;

// import React from "react"
// import ListItem from "./ListItem"

// // function List(props) {
// //     const items = props.listItems.map(item => {
// //         return <ListItem key={item.id} item={item} handleClickGroceryItems={props.handleClickGroceryItems}/>
// //     })
// class List extends React.Component {
//     render() {
//       const { items, readonly, handleClickGroceryItems } = this.props;
//       const listItems = items
//         ? items.map(item => (
//             <ListItem
//               key={item.id}
//               item={item}
//               readonly={readonly}
//               clickItem={handleClickGroceryItems}
//             />
//           ))
//         : " ";

//         return (
//             <ul>
//                 {items}
//             </ul>
//         )
//     }
// }

// export default List 