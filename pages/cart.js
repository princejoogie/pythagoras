import { useContext } from "react";
import "styles/Cart.scss";
import { DataContext } from "DataContext";
import CartItem from "components/CartItem";
import OrderSummary from "components/OrderSummary";
import DeliveryAddress from "components/DeliveryAddress";
import DeliveryDetails from "components/DeliveryDetails";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, stagger } from "components/animation";
import Layout from "components/Layout";
import SpecialInstructions from "components/SpecialInstructions";

function Cart() {
  const { cart } = useContext(DataContext);
  const [cartItems, setCartItems] = cart;

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete all?`)) {
      setCartItems([]);
    }
  };

  return (
      <Layout>
        <div className="app__container cart">
          <motion.div initial="initial" animate="animate">
            <motion.div variants={fadeInLeft}>
              <h1>Cart</h1>
            </motion.div>
            <div className="divider" />
            <div className="spacer-25" />

            <div className="cart__grid">
              <div>
                <motion.div variants={fadeInLeft}>
                  <div className="cart__title">
                    <h2>{cartItems.length} Items</h2>
                    <span onClick={handleDelete}>Delete All</span>
                  </div>
                </motion.div>

                <motion.div variants={stagger}>
                  {cartItems.map((item) => (
                    <motion.div variants={fadeInUp} key={item.id}>
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="spacer-50" />
                <motion.div variants={fadeInLeft}>
                  <h2>Delivery Address</h2>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <DeliveryAddress />
                </motion.div>
                <div className="spacer-50" />
                <motion.div variants={fadeInLeft}>
                  <h2>Special Instructions</h2>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <SpecialInstructions />
                </motion.div>
                <div className="spacer-50" />
                <motion.div variants={fadeInLeft}>
                  <h2>Delivery Details</h2>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <DeliveryDetails />
                </motion.div>
                <div className="spacer-50" />
              </div>
              <div>
                <motion.div variants={fadeInLeft}>
                  <h2>Order Summary</h2>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <OrderSummary />
                </motion.div>
              </div>
            </div>

            <div className="spacer-100" />
          </motion.div>
        </div>
      </Layout>
  );
}

export default Cart;
