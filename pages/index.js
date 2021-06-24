import { useContext } from "react";
import { DataContext } from "DataContext";
import ProductList from "components/ProductList";
import Layout from "components/Layout";
import AboutPythagoras from "components/AboutPythagoras";

function index() {
  const { selectedCategory } = useContext(DataContext);

  return (
      <Layout>
        {selectedCategory[0] === "About Pythagoras" ? (
          <AboutPythagoras />
        ) : (
          <ProductList />
        )}
      </Layout>
  );
}

export default index;
