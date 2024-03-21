import { Suspense } from "react";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import { EmptyState } from "./components/EmptyState";
import { ListingCard } from "./components/listings/ListingCard";
import { Categories } from "./components/navbar/Categories";
import { SafeListing } from "./types";

interface HomeProps {
	searchParams: IListingsParams
}

export const dynamic = 'force-dynamic'

const Home = async ({ searchParams }: HomeProps) => {

	const listings = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return (
			<EmptyState showReset />
		)
	}

  return (
    <Container>
			<Suspense>
				<Categories />
			</Suspense>
			<div className="pt-5 grid grid-cols-1 sm:grid-cold-2 bg-[#F4F4F4]
			md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
				{listings.map((listing: SafeListing) => {
					return (
						<>
						<ListingCard
							currentUser={currentUser}
							key={listing.id}
							data={listing} 
						/>
						</>
					)
				})}
			</div>
		</Container>
    
  );
}

export default Home;