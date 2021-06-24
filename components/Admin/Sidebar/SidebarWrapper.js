import SidebarDesktop from "components/Admin/Sidebar/SidebarDesktop";
import SidebarMobile from "components/Admin/Sidebar/SidebarMobile";
import { useState, useEffect } from "react";

function SidebarWrapper({ burgerClicked, setBurgerClicked }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <SidebarMobile
      burgerClicked={burgerClicked}
      setBurgerClicked={setBurgerClicked}
    />
  ) : (
    <SidebarDesktop />
  );
}

export default SidebarWrapper;
