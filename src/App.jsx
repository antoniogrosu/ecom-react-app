import { Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Page />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
