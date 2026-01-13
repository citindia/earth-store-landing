import FormSection from "@/components/ContactComponents/FormSection";
import InfoSection from "@/components/ContactComponents/InfoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Earth Store",
  description: "Contact page of Earth Store",
};

const page = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section className="grid place-items-center bg-[url(/contact/contact-banner.jpg)] bg-cover bg-center py-64">
        <h1 className="text-earth-dark text-7xl font-semibold tracking-widest">
          CONTACT US
        </h1>
      </section>
      {/* Hero Section End */}

      {/* 2nd Section Start */}
      <section className="grid grid-cols-2 gap-36 px-56 py-28">
        {/* Form Section Start */}
        <FormSection />
        {/* Form Section End */}

        {/* Contact Info Section Start */}
        <InfoSection />
        {/* Contact Info Section End */}
      </section>
      {/* 2nd Section End */}
    </>
  );
};

export default page;
