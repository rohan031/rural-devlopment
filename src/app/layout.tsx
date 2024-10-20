import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Navigation from "@/components/Navigation/Navigation";
import ViewPort from "@/components/ViewPort/ViewPort";
import Footer from "@/components/Footer/Footer";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
				<ToastContainer
					stacked
					position="bottom-right"
					autoClose={5000}
					limit={10}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition={Bounce}
				/>
			</body>
		</html>
	);
}
