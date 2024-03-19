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

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Airbnb",
	description: "Airbnb clone",
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
				<SearchModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className="pb-20 pt-28">
					{children}
				</div>
			</body>
		</html>
	);
}
