import GiftPostcard from "@/components/GiftPostcard";
import FeaturesSection from "@/components/HomeComponents/FeaturesSection";
import HomeHero from "@/components/HomeComponents/HomeHero";
import ProductsSection from "@/components/HomeComponents/ProductsSection";
import TestimonialsSection from "@/components/HomeComponents/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Earth Store",
  description: "Home page of Earth Store",
};

const page = () => {
  return (
    <>
      {/* Hero Section Start */}
      <HomeHero />
      {/* Hero Section End */}

      {/* Products Section Start */}
      <ProductsSection />
      {/* Products Section End */}

      {/* Testimonials Section Start */}
      <TestimonialsSection />
      {/* Testimonials Section End */}

      {/* Call to Action Section Start */}
      <GiftPostcard />
      {/* Call to Action Section End */}

      {/* Features Section Start */}
      <FeaturesSection />
      {/* Features Section End */}
    </>
  );
};

export default page;
