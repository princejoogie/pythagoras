import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DataContext } from "DataContext";
import "styles/OrderSummary.scss";

function OrderSummary({ payment }) {
  const { cart } = useContext(DataContext);
  const items = cart[0];
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(50);

  useEffect(() => {
    let tempTotal = 0;

    for (var i = 0; i < items.length; i++) {
      tempTotal += items[i].totalPrice;
    }

    setSubTotal(tempTotal);
  }, [cart[0]]);

  return (
    <div className="summary">
      <div>
        <div className="summary__details">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>P{subTotal}</p>
          </div>

          <div className="delivery-fee">
            <p>Delivery Fee</p>
            <p>P{deliveryFee}</p>
          </div>

          <div className="spacer-10" />
          <div className="divider" />
          <div className="total">
            <p>Total</p>
            <p>P{subTotal + deliveryFee}</p>
          </div>
        </div>
        {!payment && (
          <>
            <div className="spacer-10" />
            <Link href="/payment">
              {cart[0].length <= 0 ? (
                <div className="summary__button btn-disable">
                  <p>PROCEED TO PAYMENT</p>
                </div>
              ) : (
                <div className="summary__button">
                  <p>PROCEED TO PAYMENT</p>
                </div>
              )}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
