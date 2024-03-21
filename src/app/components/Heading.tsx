'use client'
import { FC } from 'react'

interface HeadingProps {
	title: string
	subtitle?: string
	center?: boolean
}

const Heading: FC<HeadingProps> = ({ title, subtitle, center }) => {
	return (
		<div className={center ? 'text-center' : 'text-start'}>
			<div className="text-2xl font-bold mt-3 md:mt-5 lg:mt-10">
				{title}
			</div>
			<div className="font-lign text-neutral-500 mt-2">
				{subtitle}
			</div>
		</div>
	)
}
export default Heading