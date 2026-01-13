import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="flex items-center justify-between border-t border-gray-300 px-48 py-6">
      <div className="space-x-4">
        <Link
          href="/"
          className="hover:text-earth-dark">
          Home
        </Link>
        <Link
          href="/products"
          className="hover:text-earth-dark">
          Products
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
      </div>

      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={20}
        className="h-auto w-auto"
      />

      <div>Copyright © 2025 Earth Store</div>
    </footer>
  );
};

export default SiteFooter;
