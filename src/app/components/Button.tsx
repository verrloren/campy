'use client'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
	label: string
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	disabled?: boolean
	outline?: boolean
	small?: boolean
	icon?: IconType
}

const Button: FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`relative disabled:opacity-70 py-4  hover:shadow-inner
			disabled:cursor-not-allowed rounded-lg transition w-full
			${outline ? 'hover:border-neutral-500 hover:text-[#555]' 
				: 'hover:bg-[#171717] hover:text-accent'}
			${outline ? 'bg-white/0 ' : 'bg-evenDarkGray'}
			${outline ? 'shadow-sm' : 'shadow-md'}
			${outline ? 'border-neutral-600' : 'border-evenDarkGray'}
			${outline ? 'text-neutral-700' : 'text-white'}
			${small ? 'py-1' : 'py-3'}
			${small ? 'text-small' : 'text-md'}
			${small ? 'font-light' : 'font-semibold'}
			${small ? 'border-[1px]' : 'border-[.1rem]'}
			`}
		>
			{Icon && (
				<Icon size={24} className='absolute left-4 top-3' />
			)}
			{label}
		</button>
	)
}
export default Button