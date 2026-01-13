import ProductCard from "../ProductCard";

const PostcardsSection = () => {
  const postcards = [
    {
      imageUrl: "/products/postcard1.jpg",
      category: "Postcards",
      title: "Postcard V1",
      price: "156",
    },
    {
      imageUrl: "/products/postcard2.jpg",
      category: "Postcards",
      title: "Postcard V2",
      price: "287",
    },
    {
      imageUrl: "/products/postcard3.jpg",
      category: "Postcards",
      title: "Postcard V3",
      price: "423",
    },
    {
      imageUrl: "/products/postcard4.jpg",
      category: "Postcards",
      title: "Postcard V4",
      price: "589",
    },
    {
      imageUrl: "/products/postcard5.jpg",
      category: "Postcards",
      title: "Postcard V5",
      price: "734",
    },
    {
      imageUrl: "/products/postcard6.jpg",
      category: "Postcards",
      title: "Postcard V6",
      price: "912",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-12">
      {postcards.map((product, index) => (
        <ProductCard
          key={index}
          productInfo={product}
        />
      ))}
    </section>
  );
};

export default PostcardsSection;
