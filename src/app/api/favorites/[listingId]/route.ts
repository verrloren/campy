import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from '@/app/libs/prismadb';

interface IParams {
	listingId?: string
}

//post(, reservation)
export async function POST(
	request: Request,
	//передаем парапетр в виде объекта
	//и даем ему тип строка в объекте
	{ params } : { params: IParams }
) {

	//получаем действущего юзера
	const currentUser = await getCurrentUser();

	//проверка на существование юзера
	if(!currentUser) {
		return NextResponse.error()
	}

	//диструктаризируем объект с патаметром, получаем номер объявления
	const { listingId } = params;

	//проверяем существование листинг айди
	if (!listingId || typeof listingId != 'string') {
		throw new Error('Invalid ID')
	}

	//создаем массив и диструктаризируем в него
	//поля айди любимых объвлений из существещго юзера
	let favoriteIds = [...(currentUser.favoriteIds || [])]

	//в массив добавляем номер объявления
	favoriteIds.push(listingId);

	//обновляем в призме в юзере поле айди
	// меняем ему значение на айди любимого объявления
	const user = await prisma.user.update({
		where: {
			id: currentUser.id
		},
		data: {
			favoriteIds: favoriteIds
		}
	});

	return NextResponse.json(user)
}

export async function DELETE( 
	request: Request, { params }: { params: IParams }) {
		
		const currentUser = await getCurrentUser();

		if(!currentUser) {
			return NextResponse.error();
		}

		const { listingId } = params;

		if (!listingId || typeof listingId != 'string') {
			throw new Error('Invalid ID')
		}

		let favoriteIds = [...(currentUser.favoriteIds || [])];

		favoriteIds = favoriteIds.filter((id) => id != listingId)

		const user = await prisma.user.update({
			where: {
				id: currentUser.id
			},
			data: {
				favoriteIds
			}
		});

		return NextResponse.json(user)
	}