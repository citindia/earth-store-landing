import GiftPostcard from "@/components/GiftPostcard";
import { Metadata } from "next";
import Image from "next/image";

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
      <section className="grid grid-cols-2 gap-4 px-56 py-28">
        <Image
          src="/about/our-mission.jpg"
          alt="logo"
          width={538}
          height={401}
          className="h-auto w-auto"
        />

        <div className="flex items-center">
          <div className="space-y-4 p-16">
            <div className="text-4xl font-semibold">OUR MISSION</div>

            <div className="text-justify text-lg">
              Hello, my name is Tyler Moore and with the help of many people I
              made this template. I made it so it is super easy to update and so
              that it flows perfectly with my tutorials. Lots of love and
              hundreds of hours went into making it. I hope you love it as much
              as I do.
            </div>

            <div className="text-justify text-lg">
              I wish you the best of luck with your business, enjoy the
              adventure.
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission Section End */}

      {/* Call to Action Section Start */}
      <GiftPostcard />
      {/* Call to Action Section End */}
    </>
  );
};

export default page;
