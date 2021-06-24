import { useEffect, useContext } from "react";
import Link from "next/link";
import { DataContext } from "DataContext";
import defaultAccount from "assets/account.svg";
import "styles/Sidebar/SidebarMobile.scss";

function SidebarMobile({ burgerClicked }) {
  const { user, categories, selectedCategory, token } = useContext(DataContext);
  const [currentUser, setCurrentUser] = user;
  const [currentCategory, setCurrentCategory] = selectedCategory;

  const handleLogout = () => {
    setCurrentUser(null);
    token[1](null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebarMobile");
    if (burgerClicked) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }
  }, [burgerClicked]);

  return (
    <div className="sidebarMobile" id="sidebarMobile">
      <div className="spacer-100" />
      {currentUser ? (
        <>
          <div className="sidebarMobile__profile">
            <img
              src={currentUser.imageUrl ? currentUser.imageUrl : defaultAccount}
              alt="profile-image"
            />
            <p>{currentUser.firstName}</p>
          </div>
          <div className="spacer-10" />
          <div className="sidebarDesktop__category">
            <h5>My Profile</h5>
          </div>
          <div className="sidebarDesktop__category">
            <h5 onClick={handleLogout}>Logout</h5>
          </div>
        </>
      ) : (
        <div>
          <Link href="/login">
            <div className="sidebarDesktop__category">
              <h5>Login</h5>
            </div>
          </Link>
          <Link href="/register">
            <div className="sidebarDesktop__category">
              <h5>Register</h5>
            </div>
          </Link>
        </div>
      )}

      <div className="divider" />
      {categories[0].map((category) => (
        <div
          className="sidebarDesktop__category"
          key={category}
          onClick={() => setCurrentCategory(category)}
        >
          {currentCategory === category ? (
            <h5 style={{ color: "blue" }}>{category}</h5>
          ) : (
            <h5>{category}</h5>
          )}
        </div>
      ))}
      <div className="spacer-100" />
    </div>
  );
}

export default SidebarMobile;
