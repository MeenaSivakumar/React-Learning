import React from "react";
import { ProductList, ProductCardTypes } from "./ProductCard.types";

export const ProductCard = ({ productList }: ProductList) => {
  return (
    <div style={{ width: "500px" }}>
      {productList?.map((product: ProductCardTypes, index: number) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          {product && (
            <>
              <h2>Product {index + 1}</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <strong>Name:</strong> {product.name || "Unknown"}
                </li>
                <li>
                  <strong>Price:</strong> ₹{product.price}
                </li>
                <li>
                  <strong>Category:</strong> {product.category}
                </li>
                <li>
                  <strong>Features:</strong> {product.features}
                </li>
              </ul>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#4a90e2",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  alert(`${product.name || "Unknown"} bought successfully!`)
                }
              >
                Add
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
