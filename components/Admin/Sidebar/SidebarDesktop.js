import { useContext, useState } from "react";
import { AdminDataContext } from "AdminDataContext";
import "styles/Sidebar/SidebarDesktop.scss";
import RoomIcon from "@material-ui/icons/Room";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AssessmentIcon from "@material-ui/icons/Assessment";

function SidebarDesktop() {
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

  return (
    <div className="sidebarDesktop" id="sidebarDesktop">
      <div className="spacer-100" />
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

export default SidebarDesktop;
