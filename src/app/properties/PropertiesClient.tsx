'use client';

import { SafeListing, SafeUser } from "../types"
import Heading from "../components/Heading"
import Container from "../components/Container"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {ListingCard} from "../components/listings/ListingCard";

interface PropertiesClientClientProps {
	listings: SafeListing[]
	currentUser?: SafeUser | null
}

export function PropertiesClient({ listings, currentUser }: PropertiesClientClientProps) {
	
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onCancel = useCallback((id: string) => {
		setDeletingId(id)
		
		axios.delete(`/api/listings/${id}`)
			.then(() => {
				toast.success('Listing deleted');
				router.refresh();
			})
			.catch((error) => {
				toast.error(error?.response?.data?.error)
			})
			.finally(() => {
				setDeletingId('')
			})
	}, [router])
	

	return (
		<Container>
			<Heading 
				title="Properties"
				subtitle="List of your properties"
			/>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 
			md:grid-cols-3vlg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 ">
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
			</div>
		</Container>
 )
}
