'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SafeUser } from "../types"
import useFavorite from '../hooks/useFavorite'

interface HeartButtonProps {
	listingId: string
	currentUser?: SafeUser | null
}

export function HeartButton({ listingId, currentUser }: HeartButtonProps) {

	const { hasFavorited, toggleFavorite } = useFavorite({ listingId, currentUser })

	return (
		<div
			onClick={toggleFavorite}
			className="relative hover:opacity-80 transition cursor-pointer">

			<AiOutlineHeart
				size={28}
				className="fill-white absolute -top-[2px] -right-[2px]" />

			<AiFillHeart 
				size={24}
				className={hasFavorited ? 'fill-[#29E8B3]' : 'fill-neutral-500/70'} />
		</div>
	)
}
