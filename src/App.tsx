import { Routes, Route, Link } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
/**
 * OPTIONAL! These points were skipped in the project:
 * 1. TailwindCSS (this project uses simple CSS)
 * 2. Implementation with Next.js (the project was built with Vite + React + TypeScript)
 * 3. Pagination (all the projucts are listed on a one page)
 * 4. Unit tests with "testing-library/react"
 */
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="logo">
          Simple Shop
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
