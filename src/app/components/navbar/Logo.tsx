'use client'
import Image from "next/image";
import { useRouter } from "next/router"

export function Logo() {
	return (
		<Image
			src='/images/logo.png'	
			className="hidden md:block cursor-pointer"
			height='100'
			width='100'
			alt="logo" />
	)
}
