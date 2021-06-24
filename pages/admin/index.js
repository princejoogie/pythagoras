import LayoutAdmin from "components/Admin/LayoutAdmin";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "DataContext";
import { AdminDataContext } from "AdminDataContext";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import AuthProvider from "components/AuthProvider";
import Locations from "components/Admin/Locations";
import Categories from "components/Admin/Categories";
import Products from "components/Admin/Products";
import Orders from "components/Admin/Orders";
import Reports from "components/Admin/Reports";

function index() {
  const { token } = useContext(DataContext);
  const { selectedTab } = useContext(AdminDataContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token[0]) {
      const tokenData = jwt_decode(token[0]);
      const roles = tokenData.auth;
      if (roles.includes("ROLE_ADMIN")) {
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
    }
  }, [token[0]]);

  return !isAdmin ? (
    <div
      className="app__container"
      style={{
        paddingLeft: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Link href="/login">
        <div className="login__button">
          <p>You do not have access to Admin Panel</p>
        </div>
      </Link>
    </div>
  ) : (
    <AuthProvider>
      <LayoutAdmin>
        <div className="app__container">{handleTab(selectedTab[0])}</div>
      </LayoutAdmin>
    </AuthProvider>
  );
}

function handleTab(tab) {
  switch (tab) {
    case "Locations":
      return <Locations />;
      break;
    case "Categories":
      return <Categories />;
      break;
    case "Products":
      return <Products />;
      break;
    case "Orders":
      return <Orders />;
      break;
    case "Reports":
      return <Reports />;
      break;
    default:
      break;
  }
}

export default index;
