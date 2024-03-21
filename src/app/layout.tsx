import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { RentModal } from "./components/modals/RentModal";
import { SearchModal } from "./components/modals/SearchModal";
import { Suspense } from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Campy",
	description: "Campy is a platform to find and reserve a beautiful properties all over the globe with with comfort",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	//get current user from database with prisma on server side
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={nunito.className}>
				<ToasterProvider />
				<LoginModal />
				<RentModal />
				<Suspense>
					<SearchModal />
				</Suspense>
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className="pb-20 pt-28">
					{children}
				</div>
			</body>
		</html>
	);
}
