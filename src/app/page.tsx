import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home | Planet Earth Store",
	description: "Home page of Planet Earth Store",
};

const page = () => {
	return (
		<>
			<section className="bg-[url(/home-banner.jpg)] bg-center bg-cover py-64 grid place-items-center">
				<div className="grid place-items-center gap-6">
					<h1 className="text-8xl tracking-widest font-semibold text-earth-dark">
						EARTH
					</h1>
					<p className="text-4xl uppercase tracking-widest font-light">
						Multipurpose Store
					</p>
					<Link
						href={""}
						className="text-xl uppercase px-8 py-2 bg-earth-light hover:bg-earth-dark text-white rounded-sm mt-4">
						Shop Now
					</Link>
				</div>
			</section>

			<section className="py-28 px-48 grid grid-cols-3 gap-6 border-b border-gray-300">
				<div className="grid gap-1">
					<Image
						src={"/poster1.jpg"}
						alt="poster1.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="font-bold text-lg uppercase">Poster V1</div>
					<div className="font-semibold">₹239.00</div>
				</div>

				<div className="grid gap-1">
					<Image
						src={"/poster2.jpg"}
						alt="poster2.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="font-bold text-lg uppercase">Poster V2</div>
					<div className="font-semibold">₹212.00</div>
				</div>

				<div className="grid gap-1">
					<Image
						src={"/poster3.jpg"}
						alt="poster3.jpg"
						width={350}
						height={350}
						className="aspect-square h-auto w-auto rounded-sm"
					/>

					<div className="text-gray-500">Posters</div>
					<div className="font-bold text-lg uppercase">Poster V3</div>
					<div className="font-semibold">₹251.00</div>
				</div>
			</section>

			<section className="py-28 px-48"></section>
		</>
	);
};

export default page;
