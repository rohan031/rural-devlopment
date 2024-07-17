import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Navigation from "@/components/Navigation/Navigation";
import ViewPort from "@/components/ViewPort/ViewPort";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PRISE",
	description: "Ministry of Rural Development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				<main>{children}</main>
				<Footer />

				<ViewPort />
			</body>
		</html>
	);
}
