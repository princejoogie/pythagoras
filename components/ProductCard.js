import Link from "next/link";
import "styles/ProductCard.scss";

function ProductCard({ id, name, description, price, image }) {
  return (
    <div className="productcard" key={id}>
      <div>
        <div>
          <img alt="productcard_image" src={image} />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="productcard__view">
          <h6>P{price}</h6>
          <Link href="/products/[id]" as={`/products/${id}`}>
            <div className="productcard__button">
              <p>View</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
