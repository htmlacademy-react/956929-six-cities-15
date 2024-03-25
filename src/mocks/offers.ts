import { Offer } from '../types/offer';

export const offers: Offer = [
  {
    id: 'a6482170-b154-4a65-b7f8-bdc10c9a2240',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'House',
    bedrooms: '7',
    maxAdults: '10',
    price: 139,
    isFavorite: true,
    isPremium: true,
    rating: 1.9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    host: {
      hostName: 'Djon',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/1000'
    }
  },
  {
    id: '4d038bc6-544d-4f6a-8b84-ccf9b0e17984',
    title: 'Perfectly located Castro',
    type: 'Apartment',
    bedrooms: '3',
    maxAdults: '4',
    price: 350,
    isFavorite: false,
    isPremium: true,
    rating: 2.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Coffee machine',
      'Baby seat'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    host: {
      hostName: 'Moris',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/2000'
    }
  },
  {
    id: '6cd40154-8663-4951-bd7f-539edc1a5c05',
    title: 'Waterfront with extraordinary view',
    type: 'Apartment',
    bedrooms: '3',
    maxAdults: '3',
    price: 217,
    isFavorite: true,
    isPremium: true,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    host: {
      hostName: 'Nastya',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2003'
    }

  },
  {
    id: 'd995f437-9aca-498f-bf66-603fd919d005',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Hotel',
    bedrooms: '2',
    maxAdults: '2',
    price: 329,
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Heating',
      'Coffee machine',
      'Baby seat'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    host: {
      hostName: 'Jack',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2004'
    }
  }
];
