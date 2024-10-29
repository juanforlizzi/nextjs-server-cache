"use client";

import { ProductDetails } from "~/app/db/getProductDetails";

export default function ProductImages({ data }: { data: ProductDetails }) {
  const dataStr = Object.keys(data)
    .map((key) => {
      const value = Array.isArray(data[key]) ? data[key].join(", ") : data[key];
      return `${key}: ${value}`;
    })
    .join("\n");
  return (
    <button
      style={{ padding: 10 }}
      onClick={() => {
        alert(`Product DATA:\n${dataStr}`);
      }}
    >
      $ {data.price}
    </button>
  );
}
