import { useState } from "react";
import "styles/Admin/AdminOrders.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ord-1",
      type: "ONLINE",
      date: "16-Sep-20 13:15",
      status: "COMPLETED",
      branch: "MAKATI",
      deliveryFee: 115,
      items: [
        {
          id: "cof-1",
          name: "Coffee",
          price: 60,
          quantity: 2,
          addOns: [
            {
              id: "addon-1",
              name: "Caramel Syrup",
              price: 20,
              quantity: 1,
            },
          ],
        },
      ],
      paymentMethod: "CREDIT_CARD",
      customer: {
        name: "Prince Carlo Juguilon",
        deliveryAddress:
          "Unit 1, Homely Homes Subdisivion Highway Hills, Mandaluyong City 1550",
        contactNumber: "09457985711",
        email: "princecarlo@chamaeleon.io",
      },
    },
    {
      id: "ord-2",
      type: "ONLINE",
      date: "18-Sep-20 13:15",
      status: "PROCESSING",
      branch: "PARANAQUE",
      deliveryFee: 120,
      items: [
        {
          id: "cof-2",
          name: "Coffee 2",
          price: 80,
          quantity: 3,
          addOns: [
            {
              id: "addon-1",
              name: "Caramel Syrup",
              price: 20,
              quantity: 1,
            },
            {
              id: "addon-2",
              name: "Vanilla Syrup",
              price: 20,
              quantity: 2,
            },
          ],
        },
        {
          id: "cof-3",
          name: "Coffee 3",
          price: 120,
          quantity: 1,
          addOns: [
            {
              id: "addon-1",
              name: "Caramel Syrup",
              price: 40,
              quantity: 1,
            },
          ],
        },
      ],
      paymentMethod: "PAYMAYA",
      customer: {
        name: "Prince Carlo Juguilon",
        deliveryAddress:
          "Unit 1, Homely Homes Subdisivion Highway Hills, Mandaluyong City 1550",
        contactNumber: "09457985711",
        email: "princecarlo@chamaeleon.io",
      },
    },
  ]);

  return (
    <div className="adminOrders">
      <div className="adminOrders__fab">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <h1>Orders</h1>
      <div className="divider" />

      <div className="adminOrders__rowTitles">
        <div className="adminOrders__row">
          <h4>Order Details</h4>
        </div>
        <div className="adminOrders__row">
          <h4>Customer Name</h4>
        </div>
        <div className="adminOrders__row">
          <h4>Deilvery City</h4>
        </div>
        <div className="adminOrders__row itemcount">
          <h4>Items</h4>
        </div>
        <div className="adminOrders__row">
          <h4>Order Amount</h4>
        </div>
        <div className="adminOrders__row">
          <h4>Payment Method</h4>
        </div>
        <div className="adminOrders__row">
          <h4>Status</h4>
        </div>
      </div>

      {orders.map((order, index) => (
        <Order key={order.id} order={order} index={index} />
      ))}
    </div>
  );
}

function Order({ order, index }) {
  return (
    <div className="adminOrders__card">
      <div className="adminOrders__card__button">
        <ArrowForwardIosIcon fontSize="small" />
      </div>
      <div className="adminOrders__card__index">
        <p>{index + 1}</p>
      </div>
      <div className="adminOrders__row">
        <strong>
          <p>{order.type}</p>
        </strong>
        <p>{order.date}</p>
        <p>Order# {order.id}</p>
      </div>
      <div className="adminOrders__row">
        <p>{order.customer.name}</p>
      </div>
      <div className="adminOrders__row">
        <p>{order.branch}</p>
      </div>
      <div classNamew="adminOrders__row itemcount">
        <p>23{order.items.length}</p>
      </div>
      <div className="adminOrders__row">
        <p>Order: {getPrices(order.items).toFixed(2)}</p>
        <p>Delivery Fee: {order.deliveryFee.toFixed(2)}</p>
        <strong>
          <p>
            Total: P{(getPrices(order.items) + order.deliveryFee).toFixed(2)}
          </p>
        </strong>
      </div>
      <div className="adminOrders__row">
        <p>{order.paymentMethod}</p>
      </div>
      <div className="adminOrders__row">
        <p>{order.status}</p>
      </div>
    </div>
  );
}

function getPrices(items) {
  let price = 0;
  items.map((item) => (price += calculatePrice(item)));
  return price;
}

function calculatePrice(item) {
  let price = 0;
  price = item.price * item.quantity;
  item.addOns.map((addOn) => (price += addOn.price * addOn.quantity));
  return price;
}

export default Orders;
