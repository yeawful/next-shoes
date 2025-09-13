import type { Metadata } from "next";
import { Rubik, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const rubik = Rubik({
	weight: ["400", "600"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-rubik",
});

const openSans = Open_Sans({
	weight: ["400", "600"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-open-sans",
});

const inter = Inter({
	weight: ["400", "600"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "KICKS on Nextjs",
	description: "KICKS Shoes Nextjs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${rubik.variable} ${openSans.variable} ${inter.variable}`}
			>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
