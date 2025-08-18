import GiftPostcard from "@/components/GiftPostcard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About | Planet Earth Store",
	description: "About page of Planet Earth Store",
};

const page = () => {
	return (
		<>
			<section className="bg-[url(/about/about-banner.jpg)] bg-center bg-cover py-64 grid place-items-center">
				<h1 className="text-7xl tracking-widest font-semibold text-earth-dark">
					WHO ARE WE?
				</h1>
			</section>

			<section className="py-28 px-48 grid grid-cols-2 gap-4">
				<Image
					src="/about/our-mission.jpg"
					alt="logo"
					width={538}
					height={401}
					className="h-auto w-auto"
				/>

				<div className="p-16 space-y-4">
					<div className="text-4xl font-semibold">OUR MISSION</div>

					<div className="text-lg text-justify">
						Hello, my name is Tyler Moore and with the help of many people I
						made this template. I made it so it is super easy to update and so
						that it flows perfectly with my tutorials. Lots of love and hundreds
						of hours went into making it. I hope you love it as much as I do.
					</div>

					<div className="text-lg text-justify">
						I wish you the best of luck with your business, enjoy the adventure.
					</div>
				</div>
			</section>

			<GiftPostcard />
		</>
	);
};

export default page;
