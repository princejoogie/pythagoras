import { useState, createContext, useEffect } from "react";
import t1 from "./assets/test1.png";
import t2 from "./assets/test2.png";
import t3 from "./assets/test3.png";
import t4 from "./assets/test4.png";
import t5 from "./assets/test5.png";
import t6 from "./assets/test6.png";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: "prod-1",
      name: "Coffee 1",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "8oz",
          price: 0,
        },
        {
          name: "12oz",
          price: 20,
        },
      ],
      image: t1,
    },
    {
      id: "prod-2",
      name: "Coffee 2",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "8oz",
          price: 0,
        },
        {
          name: "12oz",
          price: 20,
        },
      ],
      image: t2,
    },
    {
      id: "prod-3",
      name: "Coffee 3",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "8oz",
          price: 0,
        },
        {
          name: "12oz",
          price: 20,
        },
      ],
      image: t3,
    },
    {
      id: "prod-4",
      name: "Coffee 4",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "8oz",
          price: 0,
        },
        {
          name: "12oz",
          price: 20,
        },
      ],
      image: t4,
    },
    {
      id: "prod-5",
      name: "Coffee 5",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "16oz",
          price: 0,
        },
        {
          name: "22oz",
          price: 20,
        },
      ],
      image: t5,
    },
    {
      id: "prod-6",
      name: "Coffee 6",
      description:
        "Hot cappucino using medium roasted arabica beans with full cream milk",
      price: 100,
      type: "COFFEE",
      sizes: [
        {
          name: "16oz",
          price: 0,
        },
        {
          name: "22oz",
          price: 20,
        },
      ],
      image: t6,
    },
  ]);

  const [addOns, setAddOns] = useState([
    {
      id: "addon-1",
      name: "Soy Milk",
      price: 20,
    },
    {
      id: "addon-2",
      name: "Lactose-free Milk",
      price: 20,
    },
    {
      id: "addon-3",
      name: "Stevia",
      price: 20,
    },
    {
      id: "addon-4",
      name: "Additional Syrup",
      price: 20,
    },
    {
      id: "addon-5",
      name: "1 Espresso Shot",
      price: 20,
    },
    {
      id: "addon-6",
      name: "2 Espresso Shot",
      price: 20,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [location, setLocation] = useState(
    "Avida Tower 4, Reliance Street, Highway Hills, Mandaluyong City"
  );
  const [user, setUser] = useState();
  const [localUser, setLocalUser] = useState({
    email: "princecarlo@chamaeleon.io",
    phone: "09457985711",
    specialInstructions: null,
  });
  const [categories, setCategories] = useState([
    "About Pythagoras",
    "All Products",
    "Specialty Coffee",
    "Frappe Jelly",
    "Milkshakes",
    "Milk Teas",
    "Fruit Teas",
    "Gourmet Pasta",
    "Pastries & Desserts",
    "Specials",
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [token, setToken] = useState();
  const [userAuth, setUserAuth] = useState("GUEST"); // GUEST | USER

  useEffect(() => {
    if (token) {
      axios
        .get(process.env.BASE_URL + "/api/account", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setLocalUser({
            email: response.data.email,
            phone: response.data.phone,
          });
        })
        .catch((error) => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    setToken(currentToken);
  }, []);

  return (
    <DataContext.Provider
      value={{
        cart: [cartItems, setCartItems],
        user: [user, setUser],
        location: [location, setLocation],
        products: [products, setProducts],
        categories: [categories, setCategories],
        selectedCategory: [selectedCategory, setSelectedCategory],
        token: [token, setToken],
        userAuth: [userAuth, setUserAuth],
        localUser: [localUser, setLocalUser],
        addOns: [addOns, setAddOns],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
