import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings";
import { EmptyState } from "../components/EmptyState";
import { PropertiesClient } from "./PropertiesClient";

interface ITripsPage {}

export default async function PropertiesPage({}: ITripsPage) {
	
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<EmptyState
			title="Unauthorized"
			subtitle="Please login"
			/>
		)
	};

	const listings = await getListings({ userId: currentUser.id });

	if(!listings.length === null) {
		return (
			<EmptyState 
				title="No trips properties"
				subtitle="Looks like you have no properties"
			/>
		)
	};

	return (
		<PropertiesClient 
			listings={listings}
			currentUser={currentUser}
		/>
	)

}

