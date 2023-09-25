//ignore this please
import React from "react";
import products from './data'
import ProductCard from "./components/Product";


function App() {

  return (
    <div className="beard-prime">
    {
      products.map((product) => <ProductCard product={product} />)
    }
    </div>
  );
}
export default App;
