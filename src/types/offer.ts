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
    maxAdults: number;
    rating: number;
    previewImage: string;
    images: string[];
    goods: string[];
    bedrooms: number;
    description: string;
    city: City;
    location: Location;
    host: Host;
}
