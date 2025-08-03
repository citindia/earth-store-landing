import SiteHeader from "@/components/SiteHeader";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<SiteHeader />

				<main className="">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
