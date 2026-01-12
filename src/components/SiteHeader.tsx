import Image from "next/image";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="absolute top-0 right-0 left-0 flex items-center justify-between px-36 py-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={240}
          height={30}
          className="h-auto w-[230px]"
        />
      </Link>

      <nav className="flex gap-8 text-lg tracking-widest uppercase">
        <Link
          href="/"
          className="hover:text-earth-dark">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-earth-dark">
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-earth-dark">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default SiteHeader;
