'use client';

import { IconType } from "react-icons"
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from 'query-string'


interface ICategoryBox {
	icon: IconType
	label: string
	selected?: boolean
}

export function CategoryBox({ label, icon: Icon, selected }: ICategoryBox) {

	const router = useRouter();
	const params = useSearchParams();

	const handleCLick = useCallback(() => {
		let currentQuery = {};

		if (params) {
			//create an object out of query parameters that were parsed
			// this needs to be scalable, because there will be a lot of params futher, such as:
			// number of guests, starting and ending date of vacation, etc.
			currentQuery = qs.parse(params.toString());
		}

		//when we click on category, current label will be assigned as category param in url
		const updatedQuery: any = {
			...currentQuery,
			//add new category
			category: label
		}

		//check if we already clicked on category, and if we clicked 2nd time - we reset category
		if (params?.get('category') === label) {
			delete updatedQuery.category;
		}

		const url = qs.stringifyUrl({
			url: '/',
			query: updatedQuery
		}, { skipNull: true })

		router.push(url);
	}, [label, params, router]);

	return (
			<div
				onClick={handleCLick}
				className={`flex flex-col items-center justify-center gap-2 p-3
				border-b-2 hover:text-neutral-800 transition cursor-pointer
				${selected ? 'border-accent' : 'border-transparent'}
				${selected ? 'text-neutral-800' : 'text-neutral-500'} `}>
				<Icon size={26} />
				<div className="font-medium text-sm">
					{label}
				</div>
			</div>
	)
}
