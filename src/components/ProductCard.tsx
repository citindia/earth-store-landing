import Image from "next/image";

type ProductCardProps = {
  productInfo: {
    imageUrl: string;
    category: string;
    title: string;
    price: string;
  };
};

const ProductCard = ({ productInfo }: ProductCardProps) => {
  return (
    <div className="grid gap-1">
      <Image
        src={productInfo.imageUrl}
        alt={productInfo.title}
        width={350}
        height={350}
        className="aspect-square h-auto w-full rounded-sm"
      />

      <div className="text-gray-500">{productInfo.category}</div>
      <div className="text-lg font-bold uppercase">{productInfo.title}</div>
      <div className="font-semibold">₹{productInfo.price}</div>
    </div>
  );
};

export default ProductCard;
