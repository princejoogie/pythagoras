import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "DataContext";
import "styles/Sidebar/SidebarDesktop.scss";

function SidebarDesktop() {
  const router = useRouter();
  const { categories, selectedCategory } = useContext(DataContext);
  const [currentCategory, setCurrentCategory] = selectedCategory;

  return (
    <div className="sidebarDesktop" id="sidebarDesktop">
      <div className="spacer-100" />
      {categories[0].map((category) => (
        <div
          className="sidebarDesktop__category"
          key={category}
          onClick={() => {
            setCurrentCategory(category);
            if (router.pathname !== "/") router.replace("/");
          }}
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

export default SidebarDesktop;
