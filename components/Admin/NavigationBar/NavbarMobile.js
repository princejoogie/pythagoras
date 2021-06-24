import { useState, useContext } from "react";
import Link from "next/link";
import logo from "assets/logo.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { DataContext } from "DataContext";
import SidebarWrapper from "components/Admin/Sidebar/SidebarWrapper";
import SelectLocation from "components/SelectLocation";
import "styles/Admin/Navbar/NavbarMobile.scss";

function NavbarMobile() {
  const { cart, location } = useContext(DataContext);
  const cartLength = cart[0].length;
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerClick = () => {
    const hamburger = document.getElementById("navbarMobile-hamburger");
    if (burgerClicked) {
      hamburger.classList.remove("open");
    } else {
      hamburger.classList.add("open");
    }

    setBurgerClicked(!burgerClicked);
  };

  return (
    <>
      {!location[0] && <SelectLocation />}
      <SidebarWrapper
        burgerClicked={burgerClicked}
        setBurgerClicked={setBurgerClicked}
      />
      <div className="navbarMobile" id="navbarMobile">
        <div className="navbarMobile__items">
          <div className="navbarMobile__hamburger" id="navbarMobile-hamburger">
            <div onClick={handleBurgerClick}>
              <div className="navbarMobile__line" />
              <div className="navbarMobile__line" />
              <div className="navbarMobile__line" />
            </div>
          </div>

          <div className="navbarMobile__logo">
            <Link as="/admin" href="/admin">
              <img src={logo} alt="logo_img" />
            </Link>
          </div>

          <div className="navbarMobile__cart"></div>
        </div>
      </div>
      <div className="spacer-50" />
    </>
  );
}

export default NavbarMobile;
