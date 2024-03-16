import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import { EmptyState } from "../components/EmptyState";
import { TripsClient } from "./TripsClient";

interface ITripsPage {}

export default async function TripsPage({}: ITripsPage) {
	
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<EmptyState
			title="Unauthorized"
			subtitle="Please login"
			/>
		)
	};

	const reservations = await getReservations({ userId: currentUser.id });

	if(!reservations.length === null) {
		return (
			<EmptyState 
				title="No trips found"
				subtitle="Looks like you havent reserved any trips"
			/>
		)
	};

	return (
		<TripsClient 
			reservations={reservations}
			currentUser={currentUser}
		/>
	)

}

