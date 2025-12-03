import { useEffect, useState } from "react";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

const API_URL = "https://fakestoreapi.com/products";
/**
 * Pagination isn't implemented into this rpoject.
 * the produts are listed in one page.
 */
export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // загружаем товары один раз при загрузке страницы
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(API_URL);
      const data: Product[] = await res.json();
      setProducts(data);
    }

    fetchProducts().catch(console.error);
  }, []);

  // debounce: ждём 300 мс после ввода
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(debouncedSearch)
  );

  return (
    <section>
      <h1 className="page-title">Products</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </section>
  );
}
