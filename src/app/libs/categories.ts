import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiVillage } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { LuMountainSnow } from "react-icons/lu";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbPool } from "react-icons/tb";

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!'
	},
	{
		label: 'Mountains',
		icon: LuMountainSnow,
		description: 'This property is near mountains!'
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This property is modern!'
	},
	{
		label: 'Countryside',
		icon: GiVillage,
		description: 'This property is in a countryside!'
	},
	{
		label: 'Poopls',
		icon: TbPool,
		description: 'This property has a pool!'
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'This property is on an island!'
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This property is close to a lake!'
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'This property has skiing activities!'
	},
	{
		label: 'Castles',
		icon: GiCastle,
		description: 'This property is in to a castle!'
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'This property has camping activities!'
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'This property is in an arctic!'
	},
	{
		label: 'Cave',
		icon: GiCaveEntrance,
		description: 'This property is in a cave!'
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'This property is in the desert!'
	},
	{
		label: 'Barns',
		icon: GiBarn,
		description: 'This property is in the barn!'
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		description: 'This property is luxuriuos!'
	},
]