import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="flex items-center justify-between border-t border-gray-300 px-48 py-6">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={20}
        className="h-auto w-auto"
      />

      <div className="">Copyright © 2025 Planet Earth Store</div>
    </footer>
  );
};

export default SiteFooter;
