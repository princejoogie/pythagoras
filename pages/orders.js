import { useState } from "react";
import Layout from "components/Layout";
import "styles/ProfileTabs/MyOrders.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import testImg from "assets/test1.png";

function orders() {
  const [showModal, setShowModal] = useState(false);

  function SubItem() {
    return (
      <div className="myOrders__modalBG__modal__subitem">
        <img src={testImg} />
        <div>
          <strong>
            <p>Coffee x2</p>
          </strong>
          <p>Regular</p>
        </div>
        <p>P200.00</p>
      </div>
    );
  }

  function ItemModal() {
    return (
      <div className="myOrders__modalBG">
        <div className="myOrders__modalBG__modal">
          <div className="myOrders__modalBG__modal__title">
            <h1>Order Details</h1>
            <div
              className="myOrders__modalBG__modal__title__close"
              onClick={() => setShowModal(false)}
            >
              <CloseIcon fontSize="small" />
            </div>
          </div>
          <div className="divider" />

          <div className="myOrders__modalBG__modal__details">
            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Branch</p>
              </strong>
              <p>Paranaque</p>
              <div />
            </div>

            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Order Date & Time</p>
              </strong>
              <p>16-Sep-20 13:15</p>
              <div />
            </div>

            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Delivery Address</p>
              </strong>
              <p>
                Unit 1, Homely Homes Subdisivion Highway Hills, Mandaluyong City
                1550
              </p>
              <div />
            </div>

            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Total Order</p>
              </strong>
              <p>P615.00</p>
              <div />
            </div>

            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Payment Mode</p>
              </strong>
              <p>Credit Card</p>
              <div />
            </div>

            <div className="myOrders__modalBG__modal__details__item">
              <strong>
                <p>Order Status</p>
              </strong>
              <p>Completed</p>
              <div />
            </div>

            <div className="spacer-25" />

            <h2>4 items</h2>
            <SubItem />
            <SubItem />
            <SubItem />
            <SubItem />
          </div>

          <div className="divider" />
          <div className="myOrders__modalBG__modal__subtotal">
            <div className="myOrders__modalBG__modal__subtotal__item">
              <p>Order Sub-total</p>
              <p>500.00</p>
            </div>

            <div className="myOrders__modalBG__modal__subtotal__item">
              <p>Delivery Fee</p>
              <p>150.00</p>
            </div>

            <div className="myOrders__modalBG__modal__subtotal__item">
              <strong>
                <p>Order Total Amount</p>
              </strong>
              <strong>
                <p>P615.00</p>
              </strong>
            </div>
          </div>
          <div className="divider" />

          <div className="myOrders__modalBG__modal__buttons">
            <div
              className="myOrders__modalBG__modal__buttons__close"
              onClick={() => setShowModal(false)}
            >
              <p>CLOSE</p>
            </div>
            <div className="w-15" />
            <div className="myOrders__modalBG__modal__buttons__reorder">
              <p>REDORDER</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="app__container myOrders">
        {showModal && <ItemModal />}
        <h1>My Orders</h1>
        <div className="divider" />

        <div className="myOrders__rowTitles">
          <div className="myOrders__row">
            <h4>Branch</h4>
          </div>
          <div className="myOrders__row">
            <h4>Order Date</h4>
          </div>
          <div className="myOrders__row">
            <h4>Items</h4>
          </div>
          <div className="myOrders__row">
            <h4>Status</h4>
          </div>
          <div className="myOrders__row">
            <h4>Total</h4>
          </div>
        </div>

        <OrderItem setShowModal={setShowModal} />
        <OrderItem setShowModal={setShowModal} />
        <OrderItem setShowModal={setShowModal} />
        <OrderItem setShowModal={setShowModal} />
        <OrderItem setShowModal={setShowModal} />
      </div>
    </Layout>
  );
}

function OrderItem({ setShowModal }) {
  return (
    <div className="myOrders__card" onClick={() => setShowModal(true)}>
      <div className="myOrders__card__button">
        <ArrowForwardIosIcon fontSize="small" />
      </div>
      <div className="myOrders__row">
        <p>Paranque</p>
      </div>
      <div className="myOrders__row">
        <p>September 22, 2020 7:30 PM</p>
      </div>
      <div className="myOrders__row">
        <p>4 Items</p>
      </div>
      <div className="myOrders__row">
        <p>Completed</p>
      </div>
      <div className="myOrders__row">
        <p>P200.00</p>
      </div>
    </div>
  );
}

export default orders;
