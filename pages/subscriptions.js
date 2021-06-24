import { useState } from "react";
import Layout from "components/Layout";
import "styles/ProfileTabs/mySubscriptions.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import testImg from "assets/test1.png";

function subscriptions() {
  const [showModal, setShowModal] = useState(false);

  function SubItem() {
    return (
      <div className="mySubs__modalBG__modal__subitem">
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
      <div className="mySubs__modalBG">
        <div className="mySubs__modalBG__modal">
          <div className="mySubs__modalBG__modal__title">
            <h1>Subscription Details</h1>
            <div
              className="mySubs__modalBG__modal__title__close"
              onClick={() => setShowModal(false)}
            >
              <CloseIcon fontSize="small" />
            </div>
          </div>
          <div className="divider" />

          <div className="mySubs__modalBG__modal__details">
            <div className="mySubs__modalBG__modal__details__item">
              <strong>
                <p>Branch</p>
              </strong>
              <p>Paranaque</p>
              <div />
            </div>

            <div className="mySubs__modalBG__modal__details__item">
              <strong>
                <p>Delivery Address</p>
              </strong>
              <p>
                Unit 1, Homely Homes Subdisivion Highway Hills, Mandaluyong City
                1550
              </p>
              <div />
            </div>

            <div className="mySubs__modalBG__modal__details__item">
              <strong>
                <p>Total Order</p>
              </strong>
              <p>P615.00</p>
              <div />
            </div>

            <div className="mySubs__modalBG__modal__details__item">
              <strong>
                <p>Payment Mode</p>
              </strong>
              <p>Credit Card</p>
              <div />
            </div>

            <div className="mySubs__modalBG__modal__details__item">
              <strong>
                <p>Subscription</p>
              </strong>
              <p>Every 3rd of the month</p>
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
          <div className="mySubs__modalBG__modal__subtotal">
            <div className="mySubs__modalBG__modal__subtotal__item">
              <p>Order Sub-total</p>
              <p>500.00</p>
            </div>

            <div className="mySubs__modalBG__modal__subtotal__item">
              <p>Delivery Fee</p>
              <p>150.00</p>
            </div>

            <div className="mySubs__modalBG__modal__subtotal__item">
              <strong>
                <p>Order Total Amount</p>
              </strong>
              <strong>
                <p>P615.00</p>
              </strong>
            </div>
          </div>
          <div className="divider" />

          <div className="mySubs__modalBG__modal__buttons">
            <div
              className="mySubs__modalBG__modal__buttons__close"
              onClick={() => setShowModal(false)}
            >
              <p>CLOSE</p>
            </div>
            <div className="w-15" />
            <div className="mySubs__modalBG__modal__buttons__reorder">
              <p>END SUBSCRIPTION</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="app__container mySubs">
        {showModal && <ItemModal />}
        <h1>My Subscriptions</h1>
        <div className="divider" />

        <div className="mySubs__rowTitles">
          <div className="mySubs__row">
            <h4>Item</h4>
          </div>
          <div className="mySubs__row">
            <h4>Quantity</h4>
          </div>
          <div className="mySubs__row">
            <h4>Subscription</h4>
          </div>
          <div className="mySubs__row">
            <h4>Payment</h4>
          </div>
          <div className="mySubs__row">
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
    <div className="mySubs__card" onClick={() => setShowModal(true)}>
      <div className="mySubs__card__button">
        <ArrowForwardIosIcon fontSize="small" />
      </div>
      <div className="mySubs__row">
        <p>Kalinga Dark Roast</p>
      </div>
      <div className="mySubs__row">
        <p>250 gram</p>
      </div>
      <div className="mySubs__row">
        <p>Every 3rd day of the month</p>
      </div>
      <div className="mySubs__row">
        <p>Credit Card •••1234</p>
      </div>
      <div className="mySubs__row">
        <p>P200.00</p>
      </div>
    </div>
  );
}

export default subscriptions;
