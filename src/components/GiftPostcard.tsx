import Link from "next/link";

const GiftPostcard = () => {
	return (
		<section className="bg-[url(/call-to-action.jpg)] bg-center bg-cover py-28 px-48 grid place-items-center gap-8">
			<div className="text-5xl font-semibold uppercase">
				Give the Gift of a Postcard
			</div>

			<div className="text-lg">
				Give the gift of a lasting memory with a postcard
			</div>

			<Link
				href={""}
				className="text-xl uppercase px-8 py-2 bg-earth-light hover:bg-earth-dark text-white rounded-sm mt-4">
				Purchase A Postcard
			</Link>
		</section>
	);
};

export default GiftPostcard;
