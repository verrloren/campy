'use client';

import { IconType } from "react-icons"

interface CategoryInputProps {
	label: string
	icon: IconType
	selected?: boolean
	onClick: (value: string) => void
}

export function CategoryInput({ onClick,
	selected,
	label,
	icon: Icon }: CategoryInputProps) {


	return (
		<div 
			onClick={() => onClick(label)}
			className={`rounded-xl border-2 p-4 flex flex-col 
			gap-3 hover:border-[#333] transition cursor-pointer 
			${selected ? 'bg-accent/90' : 'border-neutral-300'}
			${selected ? 'border-neutral-800' : 'border-neutral-300'} `} >
			<Icon size={30} />
			<div className="font-semibold">
				{label}
			</div>
		</div>
 )
}
