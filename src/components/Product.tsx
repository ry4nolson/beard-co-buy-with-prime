import React from "react";
import { Product } from "../types/Product.type";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product product-grid-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-price">${product.price}</div>
      <div
        id="amzn-buy-now"
        data-site-id="tds3sary6j"
        data-widget-id="w-UA7MN8pHGj6YDHJqCGhQD1"
        data-sku={product.sku}
      ></div>
    </div>
  );
}
