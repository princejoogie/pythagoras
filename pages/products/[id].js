import { useRouter } from "next/router";
import { DataContext } from "DataContext";
import { useContext, useEffect, useState } from "react";
import Layout from "components/Layout";
import Radio from "@material-ui/core/Radio";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Checkbox from "@material-ui/core/Checkbox";
import Toast from "components/Toast";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "styles/Product.scss";
import { v4 } from "uuid";
import { fadeInLeft, fadeInUp, stagger } from "components/animation";
import { motion } from "framer-motion";
import { DriveEtaRounded } from "@material-ui/icons";
function getProductByID({ query }) {
  const router = useRouter();
  const id = query.id;
  const { products, cart, addOns } = useContext(DataContext);
  const [cartItems, setCartItems] = cart;
  const [product, setProduct] = useState();
  const [selectedSize, setSelecedSize] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState(
    new Array(addOns[0].length).fill(false)
  );
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const blue = { color: "#5E72E4" };

  useEffect(() => {
    if (product) {
      let price = product.price * quantity;
      price += product.sizes[selectedSize].price * quantity;

      for (let i = 0; i < selectedAddOns.length; i++) {
        if (selectedAddOns[i]) {
          price += addOns[0][i].price * quantity;
        }
      }
      setTotalPrice(price);
    }
  }, [selectedSize, selectedAddOns, quantity]);

  useEffect(() => {
    const arr = products[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        setTotalPrice(arr[i].price);
        setProduct(arr[i]);
        break;
      }
    }
  }, []);

  function handleChange(index) {
    let val = selectedAddOns[index];
    let temp = [...selectedAddOns];
    temp[index] = !val;
    setSelectedAddOns(temp);
  }

  function AddOnItem({ item, index }) {
    return (
      <div className="product__selection">
        <div className="product__selection__first">
          <Checkbox
            style={blue}
            checked={selectedAddOns[index] === true}
            onChange={() => {
              handleChange(index);
            }}
          />
          <p>{item.name}</p>
        </div>
        <p>+{item.price.toFixed(2)}</p>
      </div>
    );
  }

  function SizeItem({ item, index }) {
    return (
      <div className="product__selection">
        <div className="product__selection__first">
          <Radio
            style={blue}
            checked={selectedSize === index}
            onChange={() => setSelecedSize(index)}
          />
          <p>{item.name}</p>
        </div>
        <p>+{item.price.toFixed(2)}</p>
      </div>
    );
  }

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);

    let adds = [];
    for (let i = 0; i < selectedAddOns.length; i++) {
      if (selectedAddOns[i]) {
        adds.push(addOns[0][i]);
      }
    }
    let item = {
      id: v4(),
      name: product.name,
      image: product.image,
      size: product.sizes[selectedSize].name,
      quantity: quantity,
      price: product.price,
      totalPrice: totalPrice,
      addOns: adds,
    };

    console.log(item);

    let index = itemExists(item);
    if (index !== -1) {
      let obj = cartItems[index];
      obj.quantity += quantity;
      obj.totalPrice += totalPrice;
      let temp = [...cartItems];
      temp.splice(index, 1, obj);
      setCartItems(temp);
    } else {
      setCartItems([...cartItems, item]);
    }
  }

  function itemExists(item) {
    let same = -1;
    for (let i = 0; i < cartItems.length; i++) {
      let a = cartItems[i];
      if (
        a.name === item.name &&
        a.size === item.size &&
        isSame(a.addOns, item.addOns)
      ) {
        same = i;
        break;
      }
    }

    return same;
  }

  function isSame(a, b) {
    if (a.length != b.length) {
      return false;
    }
    const n = Math.min(a.length, b.length);

    let same = true;

    for (let i = 0; i < n; i++) {
      if (a[i].id !== b[i].id) same = false;
    }

    return same;
  }

  return (
    <Layout>
      {showToast && <Toast message={"Adding " + product.name + " to cart"} />}
      {product && (
        <motion.div
          initial="initial"
          animate="animate"
          className="product app__container"
        >
          <motion.div
            variants={fadeInLeft}
            className="product__back"
            onClick={() => router.back()}
          >
            <ArrowBackIcon style={{ color: "#5E72E4" }} />
            <div className="w-10" />
            <p>Back to Browse</p>
          </motion.div>
          <div className="spacer-50" />

          <motion.div variants={stagger} className="product__row">
            <motion.div variants={fadeInLeft}>
              <img src={product.image}></img>
            </motion.div>
            <motion.div initial="initial" animate="animate">
              <motion.h1 variants={fadeInLeft}>{product.name}</motion.h1>
              <div className="spacer-10" />
              <motion.p variants={fadeInLeft}>{product.description}</motion.p>
              <div className="spacer-25" />
              <motion.h2 variants={fadeInLeft}>
                P{product.price.toFixed(2)}
              </motion.h2>
              <motion.p variants={fadeInLeft}>Base Price</motion.p>
              <div className="spacer-25" />

              <motion.h3 variants={fadeInLeft}>Size</motion.h3>
              <div className="spacer-10" />
              <motion.div variants={stagger}>
                {product.sizes.map((size, i) => (
                  <motion.div variants={fadeInUp}>
                    <SizeItem key={"size-" + i} item={size} index={i} />
                    <div className="divider" />
                  </motion.div>
                ))}
              </motion.div>

              <div className="spacer-25" />

              <motion.h3 variants={fadeInLeft}>Add Ons</motion.h3>
              <div className="spacer-10" />
              <motion.div variants={stagger}>
                {addOns[0].map((addOn, i) => (
                  <motion.div variants={fadeInUp}>
                    <AddOnItem key={"addon-" + i} item={addOn} index={i} />
                    <div className="divider" />
                  </motion.div>
                ))}
              </motion.div>

              <div className="spacer-25" />

              <motion.p variants={fadeInLeft}>Select Quantity</motion.p>
              <div className="spacer-10" />
              <motion.div variants={fadeInLeft} className="product__quantity">
                <div
                  className="product__quantity__operation"
                  onClick={decrementQuantity}
                >
                  <RemoveIcon />
                </div>
                <p>{quantity}</p>
                <div
                  className="product__quantity__operation"
                  onClick={incrementQuantity}
                >
                  <AddIcon />
                </div>
              </motion.div>

              <div className="spacer-50" />

              <motion.div
                variants={fadeInLeft}
                className="product__button"
                onClick={addToCart}
              >
                <p>ADD TO CART - P{totalPrice.toFixed(2)}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <div className="spacer-100" />
    </Layout>
  );
}

getProductByID.getInitialProps = ({ query }) => {
  return { query };
};

export default getProductByID;
