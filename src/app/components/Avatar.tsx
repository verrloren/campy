'use client'
import Image from "next/image";

export function Avatar() {
	return (
		<Image
			src='/images/placeholder.jpg'
			height='30'
			width='30'
			alt="avatar"
			className="rounded-full " />
	)
}
