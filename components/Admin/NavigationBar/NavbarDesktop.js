import { useState, useContext } from "react";
import Link from "next/link";
import logo from "assets/logo.png";
import { DataContext } from "DataContext";
import SidebarWrapper from "components/Admin/Sidebar/SidebarWrapper";
import "styles/Admin/Navbar/NavbarDesktop.scss";
import defaultAccount from "assets/account.svg";

function NavbarDesktop() {
  const { user, token } = useContext(DataContext);
  const [currentUser, setCurrentUser] = user;
  const [burgerClicked, setBurgerClicked] = useState(false);

  const profileClicked = () => {
    setCurrentUser(null);
    token[1](null);
    localStorage.removeItem("token");
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

  return (
    <>
      <SidebarWrapper
        burgerClicked={burgerClicked}
        setBurgerClicked={setBurgerClicked}
      />
      <div className="navbar" id="navbar">
        <div className="navbar__items" id="navbar__items">
          <div className="navbar__logo">
            <Link as="/admin" href="/admin">
              <img src={logo} alt="logo_img" id="logo-img" />
            </Link>
            <div>
              <h3 id="logo-name">Pythagoras</h3>
              <span>Specialty Coffee & Tea | Admin</span>
            </div>
          </div>
          
          <div className="navbar__profile">
            {currentUser ? (
              <img
                src={
                  currentUser.imageUrl ? currentUser.imageUrl : defaultAccount
                }
                alt="logo_img"
                onClick={profileClicked}
              />
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
