import PostcardsSection from "@/components/ShopComponents/PostcardsSection";
import PostersSection from "@/components/ShopComponents/PostersSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Earth Store",
  description: "Products page of Earth Store",
};

const page = () => {
  return (
    <div className="space-y-10 px-56 py-28">
      {/* Shop Postcards Section Start */}
      <section className="space-y-10">
        <h1 className="text-earth-dark text-center text-5xl font-semibold">
          Postcards
        </h1>

        <PostcardsSection />
      </section>
      {/* Shop Postcards Section End */}

      {/* Shop Posters Section Start */}
      <section className="space-y-10">
        <h1 className="text-earth-dark text-center text-5xl font-semibold">
          Posters
        </h1>

        <PostersSection />
      </section>
      {/* Shop Posters Section End */}
    </div>
  );
};

export default page;
