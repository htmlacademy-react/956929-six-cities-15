import { Location } from './location';
import { City } from './city';
import { Host } from './host';

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    previewImage: string;
    image: string[];
    bedrooms: number;
    adults: number;
    description: string;
    city: City;
    location: Location;
    host: Host;
}
