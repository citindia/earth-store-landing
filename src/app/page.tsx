import SiteHeader from "@/components/SiteHeader";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home | Planet Earth Store",
	description: "Home page of Planet Earth Store",
};

const page = () => {
	return (
		<>
			<SiteHeader />

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
		</>
	);
};

export default page;
