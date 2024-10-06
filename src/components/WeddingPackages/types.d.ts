import { TCity } from "../Citites/types";
import { TOrganizer } from "../Organizer/types";

export type TShow = "popular" | "newest";

type TPackage = {
	id: string;
	name: string;
	slug: string;
	price: number;
	isPopular: 1 | 0;
	thumbnail: string;
	about: string;
	city: TCity;
	weddingOrganizer: TOrganizer;
};
