import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { DataContext } from "DataContext";
import { AdminDataContext } from "AdminDataContext";
import "styles/Sidebar/SidebarMobile.scss";
import defaultAccount from "assets/account.svg";
import RoomIcon from "@material-ui/icons/Room";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AssessmentIcon from "@material-ui/icons/Assessment";

function SidebarMobile({ burgerClicked }) {
  const { user, token } = useContext(DataContext);
  const [currentUser, setCurrentUser] = user;
  const { tabs, selectedTab } = useContext(AdminDataContext);
  const [currentTab, setCurrentTab] = selectedTab;

  const [icons, setIcons] = useState([
    <RoomIcon />,
    <FormatListBulletedIcon />,
    <LocalCafeIcon />,
    <ReceiptIcon />,
    <AssessmentIcon />,
  ]);

  const [iconsSelected, setIconsSelected] = useState([
    <RoomIcon style={{ color: "blue" }} />,
    <FormatListBulletedIcon style={{ color: "blue" }} />,
    <LocalCafeIcon style={{ color: "blue" }} />,
    <ReceiptIcon style={{ color: "blue" }} />,
    <AssessmentIcon style={{ color: "blue" }} />,
  ]);

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
      {tabs[0].map((tab, index) => (
        <div
          className="sidebarDesktop__category"
          key={tab}
          onClick={() => setCurrentTab(tab)}
        >
          {currentTab === tab ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              {iconsSelected[index]}
              <div className="w-10" />
              <h5 style={{ color: "blue" }}>{tab}</h5>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              {icons[index]}
              <div className="w-10" />
              <h5>{tab}</h5>
            </div>
          )}
        </div>
      ))}
      <div className="spacer-100" />
    </div>
  );
}

export default SidebarMobile;
