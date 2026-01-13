import { QuoteIcon } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="space-y-8 px-56 py-28">
      <div className="text-5xl font-semibold uppercase">
        What Our Customers Say
      </div>

      <div className="grid grid-cols-3 gap-24">
        <div className="space-y-6">
          <div className="">
            Fast shipping and excellent customer service. The product was even
            better than expected. I will definitely be a returning customer.
          </div>

          <div className="flex justify-between">
            <div className="space-y-4">
              <Image
                src={"/avatar-1.jpeg"}
                alt="Jennifer Lewis"
                width={44}
                height={44}
                className="aspect-square h-10 w-10 rounded-full"
              />

              <div className="font-bold uppercase">Jennifer Lewis</div>
            </div>

            <QuoteIcon className="text-earth-dark fill-earth-dark" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="">
            Great user experience on your website. I found exactly what I was
            looking for at a great price. I will definitely be telling my
            friends.
          </div>

          <div className="flex justify-between">
            <div className="space-y-4">
              <Image
                src={"/avatar-2.jpeg"}
                alt="Alicia Heart"
                width={44}
                height={44}
                className="aspect-square h-10 w-10 rounded-full"
              />

              <div className="font-bold uppercase">Alicia Heart</div>
            </div>

            <QuoteIcon className="text-earth-dark fill-earth-dark" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="">
            Thank you for the excellent shopping experience. It arrived quickly
            and was exactly as described. I will definitely be shopping with you
            again in the future.
          </div>

          <div className="flex justify-between">
            <div className="space-y-4">
              <Image
                src={"/avatar-3.jpeg"}
                alt="Juan Carlos"
                width={44}
                height={44}
                className="aspect-square h-10 w-10 rounded-full"
              />

              <div className="font-bold uppercase">Juan Carlos</div>
            </div>

            <QuoteIcon className="text-earth-dark fill-earth-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
