//ignore this please
import React from "react";
import products from './data'
import ProductCard from "./components/Product";

function App() {
  return (
    <>
      <div className="beard-prime">
      {
        products.map((product) => <ProductCard product={product} key={product.sku} />)
      }
      </div>
      <div
        id="amzn-bwp-cart"
        data-site-id="tds3sary6j"
        data-widget-id="w-UA7MN8pHGj6YDHJqCGhQD1"></div>
    </>
  );
}
export default App;
