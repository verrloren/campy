'use client';

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountrySelectType = {
	flag: string;
	label: string;
	latlng: number[];
	region: string;
	value: string;
}
interface CountrySelectProps {
	value?: CountrySelectType;
	onChange: (value: CountrySelectType) => void;
}

export function CountrySelect({value, onChange}: CountrySelectProps) {

	const { getAll } = useCountries();
	
	return (
		<div>
			<Select 
				placeholder='Anywhere'
				isClearable
				options={getAll()}
				value={value}
				onChange={value => onChange(value as CountrySelectType)}
				formatOptionLabel={(option: any) => (
					<div className='flex flex-row items-center gap-3'>
						<div>{option.flag}</div>
						<div>
							{option.label}, 
							<span className='text-neutral-500 ml-1'>
								{option.region}
							</span>
						</div>
					</div>
				)}
				classNames={{
					control: () => 'p-3 border-[1px]',
					input: () => 'text-lg',
					option: () => 'text-lg'
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: '#191919',
						primary25: '#8dffe1'
					}
				})} />
		</div>
 )
}
