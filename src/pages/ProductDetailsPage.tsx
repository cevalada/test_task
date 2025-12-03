import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../types";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: Product = await res.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct().catch(console.error);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <section className="details-page">
      <Link to="/" className="back-link">
        ← Back to products
      </Link>

      <div className="details-content">
        <img
          src={product.image}
          alt={product.title}
          className="details-image"
        />

        <div className="details-info">
          <h1>{product.title}</h1>
          <p className="details-price">${product.price}</p>
          <p className="details-category">Category: {product.category}</p>
          <p className="details-description">{product.description}</p>
        </div>
      </div>
    </section>
  );
}
