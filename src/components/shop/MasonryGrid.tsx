"use client";
import { productMocks, type ProductMocksInterface } from "@/mocks/product.mock";
import { ProductCard } from "./ProductCard";
import { VariantsAnimate } from "./animation/VariantsAnimate";

const groupedProductCard = productMocks.reduce((acc, _, index) => {
  if (index % 3 === 0) {
    acc.push(productMocks.slice(index, index + 3));
  }
  return acc;
}, [] as ProductMocksInterface[][]);

function renderProductCard(product: ProductMocksInterface) {
  if (!product) return null;

  return ProductCard({ product });
}

export const MasonryGrid = () => {
  return (
    <VariantsAnimate
      className="m-auto w-5/6 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      items={groupedProductCard.map((group, index) => (
        <div key={index} className="grid gap-4">
          {group.map((item, index) => (
            <div key={index}>{renderProductCard(item)}</div>
          ))}
        </div>
      ))}
    />
  );
};
