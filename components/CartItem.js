import { useContext, useEffect } from "react";
import { DataContext } from "DataContext";
import "styles/CartItem.scss";

function CartItem({ item }) {
  const { cart } = useContext(DataContext);
  const [cartItems, setCartItems] = cart;

  const deleteItem = () => {
    if (confirm(`Remove ${item.name}?`)) {
      let tempItems = cartItems;
      let obj = tempItems.find((x) => x.id === item.id);
      let index = tempItems.indexOf(obj);
      tempItems.splice(index, 1);
      setCartItems([...tempItems]);
    }
  };

  return (
    <div className="cartitem" key={String(item.id).concat(item.size)}>
      <div className="cartitem__left">
        <img src={item.image}></img>
        <div className="cartitem__name">
          <h3>{item.name}</h3>
          <p>{item.size}</p>
        </div>
      </div>
      <div className="cartitem__right">
        <div className="cartitem__remove" onClick={deleteItem}>
          <p>X</p>
        </div>
        <p>P{item.totalPrice}</p>
        <h3>
          Qty: <span>{item.quantity}</span>
        </h3>
      </div>
    </div>
  );
}

export default CartItem;
