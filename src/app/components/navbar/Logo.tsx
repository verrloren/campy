'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"

export function Logo() {
	const router = useRouter();
	return (
		<Image
			onClick={() => router.push('/')}
			src='/images/logoCampyBlue.png'	
			className="hidden md:block cursor-pointer 
			hover:brightness-110 transition-colors"
			height='100'
			width='100'
			alt="logo" />
	)
}
