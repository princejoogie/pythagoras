import { useState, useContext } from "react";
import Link from "next/link";
import logo from "assets/logo.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { DataContext } from "DataContext";
import SelectLocation from "components/SelectLocation";
import SidebarWrapper from "components/Sidebar/SidebarWrapper";
import "styles/Navbar/NavbarDesktop.scss";
import defaultAccount from "assets/account.svg";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import StoreIcon from "@material-ui/icons/Store";
import StarIcon from "@material-ui/icons/Star";

import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeInLeft } from "components/animation";

function NavbarDesktop() {
  const { cart, user, location, token } = useContext(DataContext);
  const cartLength = cart[0].length;
  const [currentUser, setCurrentUser] = user;
  const [currentLoc, setCurrentLoc] = location;
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const profileClicked = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    setCurrentUser(null);
    token[1](null);
    localStorage.removeItem("token");
  };

  const changeLocation = () => {
    setCurrentLoc(null);
  };

  const handleBurgerClick = () => {
    const hamburger = document.getElementById("navbar-hamburger");
    if (burgerClicked) {
      hamburger.classList.remove("open");
    } else {
      hamburger.classList.add("open");
    }

    setBurgerClicked(!burgerClicked);
  };

  function ProfileDropdown() {
    return (
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
        className="navbar__profileDropdown"
      >
        <Link href="/orders">
          <motion.div
            variants={fadeInLeft}
            className="navbar__profileDropdown__item"
          >
            <StoreIcon />
            <h3>My Orders</h3>
          </motion.div>
        </Link>

        <Link href="/subscriptions">
          <motion.div
            variants={fadeInLeft}
            className="navbar__profileDropdown__item"
          >
            <CardMembershipIcon />
            <h3>My Subscriptions</h3>
          </motion.div>
        </Link>

        <Link href="/wishlist">
          <motion.div
            variants={fadeInLeft}
            className="navbar__profileDropdown__item"
          >
            <StarIcon />
            <h3>My Wishlist</h3>
          </motion.div>
        </Link>

        <Link href="/settings">
          <motion.div
            variants={fadeInLeft}
            className="navbar__profileDropdown__item"
          >
            <SettingsIcon />
            <h3>Settings</h3>
          </motion.div>
        </Link>

        <motion.div
          variants={fadeInLeft}
          className="navbar__profileDropdown__item"
          onClick={() => logout()}
        >
          <ExitToAppIcon />
          <h3>Logout</h3>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      {!location[0] && <SelectLocation />}
      <SidebarWrapper
        burgerClicked={burgerClicked}
        setBurgerClicked={setBurgerClicked}
      />
      <div className="navbar" id="navbar">
        <div className=" navbar__items" id="navbar__items">
          <div className="navbar__logo">
            <Link as="/" href="/">
              <img src={logo} alt="logo_img" id="logo-img" />
            </Link>
            <div>
              <h3 id="logo-name">Pythagoras</h3>
              <span>Specialty Coffee & Tea</span>
            </div>
          </div>

          <div className="navbar__profile">
            {currentUser ? (
              <>
                {currentLoc && (
                  <div className="navbar__location" onClick={changeLocation}>
                    <LocationOnIcon />
                    <h4>Deliver to:</h4>
                    <p>{currentLoc}</p>
                  </div>
                )}
                <div className="w-15" />
                <Link as="/cart" href="/cart">
                  <div className="navbar__cart">
                    <ShoppingBasketIcon
                      fontSize="small"
                      style={{ color: "#11CDEF" }}
                    />
                    <h4>CART</h4>
                    <div className="navbar__cartCount">{cartLength}</div>
                  </div>
                </Link>

                <div className="navbar__profileIcon">
                  <AnimatePresence>
                    {showDropdown && <ProfileDropdown />}
                  </AnimatePresence>
                  <img
                    src={
                      currentUser.imageUrl
                        ? currentUser.imageUrl
                        : defaultAccount
                    }
                    alt="logo_img"
                    onClick={profileClicked}
                  />
                </div>
              </>
            ) : (
              <>
                <Link as="/login" href="/login">
                  <h3 className="navbar__btn" id="btn_login">
                    Login
                  </h3>
                </Link>
                <Link as="/register" href="/register">
                  <h3 className="navbar__btn" id="btn_register">
                    Register
                  </h3>
                </Link>
                <div className="w-15" />
                {currentLoc && (
                  <div className="navbar__location" onClick={changeLocation}>
                    <LocationOnIcon />
                    <h4>Deliver to:</h4>
                    <p>{currentLoc}</p>
                  </div>
                )}
                <div className="w-15" />
                <Link as="/cart" href="/cart">
                  <div className="navbar__cart">
                    <ShoppingBasketIcon
                      fontSize="small"
                      style={{ color: "#11CDEF" }}
                    />
                    <h4>CART</h4>
                    <div className="navbar__cartCount">{cartLength}</div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="spacer-50" />
    </>
  );
}

export default NavbarDesktop;
