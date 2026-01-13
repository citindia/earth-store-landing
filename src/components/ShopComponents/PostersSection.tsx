import ProductCard from "../ProductCard";

const PostersSection = () => {
  const posters = [
    {
      imageUrl: "/products/poster1.jpg",
      category: "Posters",
      title: "Poster V1",
      price: "234",
    },
    {
      imageUrl: "/products/poster2.jpg",
      category: "Posters",
      title: "Poster V2",
      price: "456",
    },
    {
      imageUrl: "/products/poster3.jpg",
      category: "Posters",
      title: "Poster V3",
      price: "567",
    },
    {
      imageUrl: "/products/poster4.jpg",
      category: "Posters",
      title: "Poster V4",
      price: "678",
    },
    {
      imageUrl: "/products/poster5.jpg",
      category: "Posters",
      title: "Poster V5",
      price: "789",
    },
    {
      imageUrl: "/products/poster6.jpg",
      category: "Posters",
      title: "Poster V6",
      price: "890",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-12">
      {posters.map((product, index) => (
        <ProductCard
          key={index}
          productInfo={product}
        />
      ))}
    </section>
  );
};

export default PostersSection;
