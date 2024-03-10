'use server'
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb'

export async function getServSession() {
	return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
	try {
		
		const session = await getServSession();
		
		//check if user exists
		if(!session?.user?.email) {
			return null
		};

		//get user's email from db with prisma
		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email as string
			}
		});

		if(!currentUser) return null;

		return {
			...currentUser,
			createdAt: currentUser.createdAt.toISOString(),
			updatedAt: currentUser.updatedAt.toISOString(),
			emailVerified: currentUser.emailVerified?.toISOString() || null
		};

	} catch (error: any) {
		return null;
	}
}