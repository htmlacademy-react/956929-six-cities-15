import { Offer } from '../types/offer';
import { SortType } from '../const';

export const countStars = (width: number) => `${Math.round(width) * 20}%`;

export function sortOffers(sortType: SortType, offers: Offer[]) {
  switch (sortType) {
    case SortType.LowToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortType.HighToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export function ucFirst(text: string) {
  if (!text) {
    return text;
  }

  return text[0].toUpperCase() + text.slice(1);
}

