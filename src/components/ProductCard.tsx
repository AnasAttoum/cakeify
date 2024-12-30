import { product } from "@/constants/types";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }:{ product: product }) {
  return (
    <li key={product.id}>
      <div className="relative w-48 h-48 mx-auto">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain"
          fill
        />
      </div>
      <div className="flex justify-between items-center">
        <h5>{product.name}</h5>
        <strong className="text-gray-400">
          {formatCurrency(product.basePrice)}
        </strong>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      <AddToCartButton product={product}/>
    </li>
  );
}
