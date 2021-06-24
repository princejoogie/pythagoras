import NavbarWrapper from "components/Admin/NavigationBar/NavbarWrapper";

function LayoutAdmin({ children }) {
  return (
    <div>
      <NavbarWrapper />
      {children}
    </div>
  );
}

export default LayoutAdmin;
