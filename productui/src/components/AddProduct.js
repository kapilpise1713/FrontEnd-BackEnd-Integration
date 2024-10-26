import React, { useState } from "react";
import { addProduct } from "../services/ProductService";

export default function AddProduct() {
  const [product, setProducts] = useState({ name: "", price: 0 });

  const handleProduct = (e) => {
    e.preventDefault();
    addProduct(product).then(() => {
      setProducts({ name: "", price: 0 });
      alert("Product Added Successfully..!");
    });
  };

  return (
    <>
      <form onSubmit={handleProduct}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => {
              setProducts({ ...product, name: e.target.value });
            }}
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type='number'
            value={product.price}
            onChange={(e) => {
              setProducts({ ...product, price: e.target.value });
            }}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}
