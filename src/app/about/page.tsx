import OurMissionSection from "@/components/AboutComponents/OurMissionSection";
import GiftPostcard from "@/components/GiftPostcard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Earth Store",
  description: "About page of Earth Store",
};

const page = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section className="grid place-items-center bg-[url(/about/about-banner.jpg)] bg-cover bg-center py-64">
        <h1 className="text-earth-dark text-7xl font-semibold tracking-widest">
          WHO ARE WE?
        </h1>
      </section>
      {/* Hero Section End */}

      {/* Our Mission Section Start */}
      <OurMissionSection />
      {/* Our Mission Section End */}

      {/* Call to Action Section Start */}
      <GiftPostcard />
      {/* Call to Action Section End */}
    </>
  );
};

export default page;
