'use client'
import { Suspense, useEffect, useState } from "react";
import Container from "../Container";
import { Logo } from "./Logo";
import { Search } from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
	currentUser?: SafeUser | null;
}


const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
		window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	

	return (
		<div className="fixed w-full z-10">
			<div className={`py-7 transition-colors	w-full min-h-24
			${scrollY > 50 
				? 'bg-white/90 backdrop-blur-md shadow-sm' 
				: 'bg-evenDarkGrayNav/90 backdrop-blur-md shadow-md'
			}`}>
				<Container>
					<div className="flex flex-row items-center 
					justify-between gap-3 md:gap-0">
						
						<Logo />

						<Suspense>
							<Search scrollY={scrollY} />
						</Suspense>

						<UserMenu scrollY={scrollY} currentUser={currentUser} />
					</div>
				</Container>
			</div>

			
		</div>
 )
}
export default Navbar;