import ProductCard from "../ProductCard";

const ProductsSection = () => {
  const homeProducts = [
    {
      imageUrl: "/products/poster1.jpg",
      category: "Posters",
      title: "Poster V1",
      price: "457",
    },
    {
      imageUrl: "/products/poster2.jpg",
      category: "Posters",
      title: "Poster V2",
      price: "892",
    },
    {
      imageUrl: "/products/poster3.jpg",
      category: "Posters",
      title: "Poster V3",
      price: "123",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-12 border-b border-gray-300 px-56 py-28">
      {homeProducts.map((product, index) => (
        <ProductCard
          key={index}
          productInfo={product}
        />
      ))}
    </section>
  );
};

export default ProductsSection;
