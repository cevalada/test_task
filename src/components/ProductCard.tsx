import { Link } from "react-router-dom";
import type { Product } from "../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">{product.price} €</p>
    </Link>
  );
}
