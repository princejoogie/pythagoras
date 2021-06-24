import NavbarWrapper from "components/NavigationBar/NavbarWrapper";
import AuthProvider from "components/AuthProvider";

function Layout({ children }) {
  return (
    <AuthProvider>
      <NavbarWrapper />
      {children}
    </AuthProvider>
  );
}

export default Layout;
