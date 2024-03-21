'use client';

import Container from "../Container";
import { CategoryBox } from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/app/libs/categories";
import { Suspense } from "react";


export function Categories() {	

	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/'

	if(!isMainPage) {
		return null
	}


	return (
			<div className="w-full h-full bg-[#F4F4F4]">
				<Container>
					<div className="pt-4 bg-[#F4F4F4] flex flex-row items-center justify-between overflow-x-auto">
						{categories.map((item) => (
							<Suspense>
								<CategoryBox
									key={item.label}
									label={item.label}
									selected={category === item.label}
									icon={item.icon}
								/>
							</Suspense>
														))}
					</div>
				</Container>
			</div>
	)
}
