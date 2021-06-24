import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import "styles/Payment.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PayMayaIcon from "assets/paymaya.png";
import AmexIcon from "assets/cards/amex.png";
import MasterCardICon from "assets/cards/master-card.png";
import PayPalIcon from "assets/cards/paypal.png";
import VisaIcon from "assets/cards/visa.png";
import OrderSummary from "components/OrderSummary";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeInLeft } from "components/animation";

function payment() {
  const router = useRouter();
  const [method, setMethod] = useState("credit-card");

  function ExpandCreditCard() {
    return (
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
        className="payment__cc"
      >
        <motion.div variants={fadeInLeft} className="payment__cc__cards">
          <img src={VisaIcon} alt="visa" />
          <img src={MasterCardICon} alt="mastercard" />
          <img src={AmexIcon} alt="amex" />
          <img src={PayPalIcon} alt="paypal" />
        </motion.div>
        <div className="spacer-25" />

        <motion.p variants={fadeInLeft}>Card Details</motion.p>
        <motion.input
          variants={fadeInLeft}
          placeholder="Card Number"
        ></motion.input>
        <motion.input
          variants={fadeInLeft}
          placeholder="Cardholder Name"
        ></motion.input>

        <motion.div variants={fadeInLeft} className="payment__cc__cards__row">
          <input type="date" placeholder="Expiry"></input>
          <input maxLength={3} placeholder="CVV"></input>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          className="payment__cc__button"
          onClick={() => router.push("/summary")}
        >
          <p>PAY & CONFIRM ORDER</p>
        </motion.div>
      </motion.div>
    );
  }

  function ExpandPayMaya() {
    return (
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
        className="payment__cc"
      >
        <motion.p variants={fadeInLeft}>Login with PayMaya</motion.p>
        <motion.input
          variants={fadeInLeft}
          placeholder="Username"
        ></motion.input>
        <motion.input
          variants={fadeInLeft}
          type="password"
          placeholder="Password"
        ></motion.input>
        <motion.input variants={fadeInLeft} placeholder="OTP"></motion.input>

        <motion.div
          variants={fadeInLeft}
          className="payment__cc__button"
          onClick={() => router.push("/summary")}
        >
          <p>PAY & CONFIRM ORDER</p>
        </motion.div>
      </motion.div>
    );
  }

  function ExpandCOD() {
    return (
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
        className="payment__cc"
      >
        <motion.p variants={fadeInLeft}>Shipping Information</motion.p>

        <motion.div variants={fadeInLeft} className="payment__cc__cards__row">
          <input placeholder="First Name*"></input>
          <input placeholder="Last Name"></input>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          className="payment__cc__button"
          onClick={() => router.push("/summary")}
        >
          <p>PAY & CONFIRM ORDER</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Layout>
      <div className="payment app__container">
        <h1>Payment</h1>
        <div className="divider" />
        <div className="spacer-10" />

        <div
          id="back-btn"
          className="payment__back"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIcon color="inherit" fontSize="small" />
          <p>Back to Cart</p>
        </div>

        <div className="spacer-25" />
        <div className="payment__grid">
          <div>
            <h2>Select Payment Method</h2>

            <div className="spacer-20" />
            <div className="payment__card">
              <div
                className="payment__card__main"
                onClick={() => setMethod("credit-card")}
              >
                <div className="payment__card__method">
                  <Radio
                    checked={method === "credit-card"}
                    color="primary"
                    value="credit-card"
                    name="credit-card"
                    style={{ padding: "0" }}
                  />
                  <div className="w-10" />
                  <CreditCardIcon style={{ color: "#525F7F" }} />
                  <div className="w-5" />
                  <p>Credit Card</p>
                </div>
                <div>
                  <ExpandMoreIcon fontSize="small" />
                </div>
              </div>
              <AnimatePresence>
                {method === "credit-card" && <ExpandCreditCard />}
              </AnimatePresence>
            </div>

            <div className="spacer-10" />
            <div className="payment__card">
              <div
                className="payment__card__main"
                onClick={() => setMethod("paymaya")}
              >
                <div className="payment__card__method">
                  <Radio
                    checked={method === "paymaya"}
                    color="primary"
                    value="paymaya"
                    name="paymaya"
                    style={{ padding: "0" }}
                  />
                  <div className="w-10" />
                  <img src={PayMayaIcon} height={24} alt="paymaya" />
                  <div className="w-5" />
                  <p>PayMaya</p>
                </div>
                <div>
                  <ExpandMoreIcon fontSize="small" />
                </div>
              </div>
              <AnimatePresence>
                {method === "paymaya" && <ExpandPayMaya />}
              </AnimatePresence>
            </div>

            <div className="spacer-10" />
            <div className="payment__card">
              <div
                className="payment__card__main"
                onClick={() => setMethod("cod")}
              >
                <div className="payment__card__method">
                  <Radio
                    checked={method === "cod"}
                    color="primary"
                    value="cod"
                    name="cod"
                    style={{ padding: "0" }}
                  />
                  <div className="w-10" />
                  <LocalAtmIcon style={{ color: "#525F7F" }} />
                  <div className="w-5" />
                  <p>Cash on Delivery</p>
                </div>
                <div>
                  <ExpandMoreIcon fontSize="small" />
                </div>
              </div>
              <AnimatePresence>
                {method === "cod" && <ExpandCOD />}
              </AnimatePresence>
            </div>
          </div>
          <div>
            <h2>Order Smmary</h2>
            <OrderSummary payment={true} />
          </div>
        </div>

        <div className="spacer-100" />
      </div>
    </Layout>
  );
}

export default payment;
