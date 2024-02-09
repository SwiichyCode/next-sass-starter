import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductMocksInterface } from "@/mocks/product.mock";

type Props = {
  product: ProductMocksInterface;
};

export const ProductCard = ({ product }: Props) => {
  const { id, src, alt, name, price } = product;

  return (
    <div className="p-10 pb-4 bg-gray-100 bg-opacity-50 space-y-4">
      <Link href={`/shop/${id}`}>
        <img key={id} src={src} alt={alt} className="h-auto max-w-full" />
      </Link>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="uppercase font-prompt ">{name}</h3>
          <span className="font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
};
