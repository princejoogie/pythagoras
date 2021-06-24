import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "components/ProductCard";
import { fadeInUp, stagger } from "components/animation";
import { motion } from "framer-motion";
import { DataContext } from "DataContext";
import Categories from "components/Categories";
import "styles/ProductList.scss";

function ProductList() {
  const { products, selectedCategory } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory[0]]);

  return isLoading ? (
    <>
      <Categories />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={stagger}
        className="productList app__container"
      >
        {products[0].map((product) => (
          <motion.div variants={fadeInUp} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              sizes={product.sizes}
              image={product.image}
              isLoading={true}
            />
          </motion.div>
        ))}
        <div className="spacer-100"></div>
      </motion.div>
    </>
  ) : (
    <>
      <Categories />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={stagger}
        className="productList app__container"
      >
        {products[0].map((product) => (
          <motion.div variants={fadeInUp} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              sizes={product.sizes}
              image={product.image}
              isLoading={false}
            />
          </motion.div>
        ))}
        <div className="spacer-100"></div>
      </motion.div>
    </>
  );
}

export default ProductList;
