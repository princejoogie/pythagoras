import NavbarDesktop from "components/NavigationBar/NavbarDesktop";
import NavbarMobile from "components/NavigationBar/NavbarMobile";
import { useState, useEffect } from "react";

function NavbarWrapper() {
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

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}

export default NavbarWrapper;
