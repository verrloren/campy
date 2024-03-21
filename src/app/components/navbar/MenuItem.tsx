'use client'
import { FC } from 'react'

interface MenuItemProps {
	label: string
	onClick: () => void
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div 
		onClick={onClick}
		className='px-6 py-3 hover:text-accent transition-colors font-semibold'>
			{label}
		</div>
	)
}
export default MenuItem