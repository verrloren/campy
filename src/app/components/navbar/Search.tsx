'use client'

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi"

interface SearchProps {
	scrollY: number
}

export function Search({ scrollY }: SearchProps) {

	const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  const  startDate = params?.get('startDate');
  const  endDate = params?.get('endDate');
  const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);
	

	return (
			<div
				onClick={searchModal.onOpen}
				className={`w-full md:w-auto py-2
				shadow-sm transition cursor-pointer rounded-full group
				${scrollY > 50
					? 'border-[.1rem] hover:border-[#999] border-[#bbb] hover:shadow-md'
					: 'border-[.1rem] hover:border-[#3b3b3b] border-[#363636] hover:shadow-lg'}`}
				>
				<div className="flex flex-row items-center justify-between">
					<div className="text-sm font-semibold px-6  text-darkGray
					group-hover:text-[#828282] transition-colors">
							{locationLabel}
					</div>
					<div className="hidden sm:block text-sm font-semibold px-6  text-darkGray
					border-x-[1px] flex-1 text-center
					group-hover:text-[#828282] transition-colors">
						{durationLabel}
					</div>
					<div className="text-sm pl-6 pr-2 darkGray
					flex flex-row items-center gap-3">
						<div className="hidden text-darkGray sm:block
						group-hover:text-[#828282] transition-colors">
							{guestLabel}
						</div>
						<div className="p-2  rounded-full text-white ">
							<BiSearch
							className="text-darkGray group-hover:text-accent transition-colors"
							size={17} />
						</div>
					</div>
				</div>
			</div>
 )
}

