import { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setshowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }

    if (search && !product.name.includes(search)){
    return false;
  }
  return true});

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setshowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

export default App;
