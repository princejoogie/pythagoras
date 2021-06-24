import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import "styles/Summary.scss";
import { DataContext } from "DataContext";
import DeliveryDetails from "components/DeliveryDetails";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { fadeInLeft, stagger } from "components/animation";
import { motion } from "framer-motion";

function summary({ fullName }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="d-summary app__container">
        <h1>Order Confirmed</h1>
        <div className="divider" />
        <div className="spacer-25" />

        <div className="d-summary__center">
          <h3>Your order has been received</h3>
          <p>
            We’re getting your order ready and will let you know once it’s on
            the way.
          </p>
        </div>
        <h4>Order Summary</h4>

        <SummaryAddress />
        <DeliveryDetails />
        <SummarySubtotal />

        <div className="d-summary__center">
          <div
            className="d-summary__button"
            onClick={() => router.replace("/")}
          >
            <p>BACK TO SHOP</p>
          </div>
          <p>
            Need help? <span>Contact our support</span>
          </p>
        </div>
        <div className="spacer-100" />
      </div>
    </Layout>
  );
}

function SummarySubtotal() {
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

  function Item({ item }) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        className="s-subtotal__item"
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="s-subtotal__item__first"
        >
          <motion.h3 variants={fadeInLeft}>{item.quantity}x</motion.h3>
          <div className="w-15" />
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h3 variants={fadeInLeft}>{item.name}</motion.h3>
            <motion.p variants={fadeInLeft}>{item.size}</motion.p>
            <motion.strong variants={fadeInLeft}>
              <small>Add-ons: </small>
            </motion.strong>
            {item.addOns.map((x) => (
              <motion.small variants={fadeInLeft}>{x.name}, </motion.small>
            ))}
          </motion.div>
        </motion.div>
        <motion.h3 variants={fadeInLeft}>
          P{item.totalPrice.toFixed(2)}
        </motion.h3>
      </motion.div>
    );
  }

  return (
    <div className="s-subtotal">
      {cart[0] && cart[0].map((item) => <Item item={item} />)}

      <div className="divider" />

      <div>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeInLeft} className="subtotal">
            <p>Subtotal</p>
            <p>P{subTotal.toFixed(2)}</p>
          </motion.div>

          <motion.div variants={fadeInLeft} className="delivery-fee">
            <p>Delivery Fee</p>
            <p>P{deliveryFee.toFixed(2)}</p>
          </motion.div>

          <div className="spacer-10" />
          <motion.div variants={fadeInLeft} className="total">
            <strong>Total</strong>
            <strong>P{(subTotal + deliveryFee).toFixed(2)}</strong>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SummaryAddress() {
  const { location, localUser, user } = useContext(DataContext);
  const [userDetails, _] = localUser;

  function Divider() {
    return (
      <>
        <div className="spacer-10" />
        <div className="divider" />
        <div className="spacer-10" />
      </>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="s-address"
    >
      <motion.div variants={fadeInLeft} className="s-address__item">
        <PersonIcon />
        <div className="w-15" />
        <div>
          <h3>
            {user[0] ? user[0].firstName + " " + user[0].lastName : "Guest"}
          </h3>
          <div className="spacer-10" />
          <p>{location[0]}</p>
        </div>
        <div className="w-15" />
      </motion.div>

      <Divider />

      <motion.div variants={fadeInLeft} className="s-address__item">
        <PhoneIcon />
        <div className="w-15" />
        <p>{userDetails.phone}</p>
        <div className="w-15" />
      </motion.div>

      <Divider />

      <motion.div variants={fadeInLeft} className="s-address__item">
        <EmailIcon />
        <div className="w-15" />
        <p>{userDetails.email}</p>
        <div className="w-15" />
      </motion.div>
    </motion.div>
  );
}

export default summary;
