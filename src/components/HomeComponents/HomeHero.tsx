import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="grid place-items-center bg-[url(/home-banner.jpg)] bg-cover bg-center py-64">
      <div className="grid place-items-center gap-6">
        <h1 className="text-earth-dark text-8xl font-semibold tracking-widest">
          EARTH
        </h1>

        <p className="text-4xl font-light tracking-widest uppercase">
          Multipurpose Store
        </p>

        <Link
          href={"/"}
          className="bg-earth-light hover:bg-earth-dark mt-4 rounded-sm px-8 py-2 text-xl text-white uppercase">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
