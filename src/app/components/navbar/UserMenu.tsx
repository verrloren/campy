'use client'

import { AiOutlineMenu } from "react-icons/ai"
import React, { EventHandler, FC, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
	currentUser?: SafeUser | null;
	scrollY: number
}


const UserMenu: FC<UserMenuProps> = ({ currentUser, scrollY }) => {

	const router = useRouter();
	const ref = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(false);
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const rentModal = useRentModal();

	useEffect(() => {
		let handler = (e: any) => {
			if(ref.current !== null) {
				if(!ref.current.contains(e.target)) {
					setIsOpen(prev => !prev)
				}
			}
		}

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])

	const toggleOpen = useCallback(() => {
		setIsOpen(prev => !prev)
	}, []);

	const onRent = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}

		rentModal.onOpen();
	}, [currentUser, loginModal, rentModal])


	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-1 md:gap-3 lg:gap-4">


				<div
					onClick={onRent}
					className="hidden md:block text-sm text-darkGray hover:text-accent
					font-semibold py-3 px-4 rounded-full transition-colors 
					trasition cursor-pointer">
					Become a host
				</div>
				<div className="rounded-[50%]	hover:brightness-105 hover:shadow-md
				 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
					<Avatar src={currentUser?.image} />
				</div>


				<div
					onClick={toggleOpen}
					className="p-4 md:py-1 md:px-2
					flex flex-row items-center gap-3 rounded-full cursor-pointer 
					transition">
					<AiOutlineMenu
						size={22}
						className={`transition-colors text-[#666]
						${scrollY > 50 ? 'hover:text-[#333]' : 'hover:text-[#888]'}`}
					/>
				</div>
			</div>
			{isOpen && (
				<div ref={ref}
					className={`absolute rounded-xl shadow-md z-20
					w-[30vw] md:w-3/4 lg:w-4/4 md:top-12 
					${scrollY > 50 ? 'bg-white' : 'bg-[#171717]'}
					overflow-hidden right-0 top-14 text-sm`}
				>
					<div className="flex flex-col cursor-pointer text-darkGray my-2">
						{currentUser ? (
							<>
								<MenuItem
									onClick={() => router.push('/trips')}
									label='My trips' />
								<MenuItem
									onClick={() => router.push('/favorites')}
									label='My favorites' />
								<MenuItem
									onClick={() => router.push('/reservations')}
									label='My reservations' />
								<MenuItem
									onClick={() => router.push('/properties')}
									label='My properties' />
								<div className="block md:hidden">
									<MenuItem
										onClick={rentModal.onOpen}
										label='Become a host' />
								</div>
								<MenuItem
									onClick={() => signOut()}
									label='Logout' />
							</>
						) : (
							<>
								<MenuItem
									onClick={loginModal.onOpen}
									label='Login' />

								<MenuItem
									onClick={registerModal.onOpen}
									label='Sign up' />
							</>
						)}

					</div>
				</div>
			)}
		</div>
	)
}
export default UserMenu;