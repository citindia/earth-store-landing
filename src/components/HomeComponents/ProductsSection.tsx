import Image from "next/image";

const ProductsSection = () => {
  return (
    <section className="grid grid-cols-3 gap-12 border-b border-gray-300 px-56 py-28">
      <div className="grid gap-1">
        <Image
          src={"/poster1.jpg"}
          alt="poster1.jpg"
          width={350}
          height={350}
          className="aspect-square h-auto w-full rounded-sm"
        />

        <div className="text-gray-500">Posters</div>
        <div className="text-lg font-bold uppercase">Poster V1</div>
        <div className="font-semibold">₹239.00</div>
      </div>

      <div className="grid gap-1">
        <Image
          src={"/poster2.jpg"}
          alt="poster2.jpg"
          width={350}
          height={350}
          className="aspect-square h-auto w-full rounded-sm"
        />

        <div className="text-gray-500">Posters</div>
        <div className="text-lg font-bold uppercase">Poster V2</div>
        <div className="font-semibold">₹212.00</div>
      </div>

      <div className="grid gap-1">
        <Image
          src={"/poster3.jpg"}
          alt="poster3.jpg"
          width={350}
          height={350}
          className="aspect-square h-auto w-full rounded-sm"
        />

        <div className="text-gray-500">Posters</div>
        <div className="text-lg font-bold uppercase">Poster V3</div>
        <div className="font-semibold">₹251.00</div>
      </div>
    </section>
  );
};

export default ProductsSection;
