import { HeartPlusIcon, LockKeyholeIcon, PackageIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="grid grid-cols-17 place-items-center gap-4 px-52 py-16">
      <div className="col-span-5 flex items-center gap-4">
        <div className="bg-earth-dark rounded-full p-3">
          <LockKeyholeIcon className="text-white" />
        </div>

        <div className="">
          <div className="text-lg font-semibold uppercase">Secure Payment</div>
          <div className="">All our payments our SSL secured</div>
        </div>
      </div>

      <div className="h-14 w-px bg-gray-500"></div>

      <div className="col-span-5 flex items-center gap-4">
        <div className="bg-earth-dark rounded-full p-3">
          <PackageIcon className="text-white" />
        </div>

        <div className="">
          <div className="text-lg font-semibold uppercase">
            Delivered With Care
          </div>
          <div className="">Super fast shipping to your door</div>
        </div>
      </div>

      <div className="h-14 w-px bg-gray-500"></div>

      <div className="col-span-5 flex items-center gap-4">
        <div className="bg-earth-dark rounded-full p-3">
          <HeartPlusIcon className="text-white" />
        </div>

        <div className="">
          <div className="text-lg font-semibold uppercase">
            Excellent Service
          </div>
          <div className="">Live chat and phone support</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
