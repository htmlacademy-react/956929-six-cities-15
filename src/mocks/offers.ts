import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 'a6482170-b154-4a65-b7f8-bdc10c9a2240',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'House',
    bedrooms: 7,
    maxAdults: 10,
    price: 139,
    isFavorite: true,
    isPremium: true,
    rating: 1.9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg'
    ],
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
    bedrooms: 3,
    maxAdults: 4,
    price: 350,
    isFavorite: false,
    isPremium: true,
    rating: 2.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
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
    bedrooms: 3,
    maxAdults: 3,
    price: 217,
    isFavorite: true,
    isPremium: true,
    rating: 4.2,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
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
    bedrooms: 2,
    maxAdults: 2,
    price: 329,
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg'
    ],
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
  },
  {
    id: 'ee47aec6-6983-4f54-acc5-03ba0e2f8e0e',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    bedrooms: 3,
    maxAdults: 3,
    price: 797,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    host: {
      hostName: 'Nastya',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2003'
    }
  },
  {
    id: 'cf8b1b8f-8f23-43b7-b4a7-989882d1ea49',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    bedrooms: 3,
    maxAdults: 3,
    price: 491,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg'
    ],
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.6,
    host: {
      hostName: 'Nastya',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2003'
    }
  },
  {
    id: '9e411218-b425-4ef8-ac95-05dc47517dba',
    title: 'Tile House',
    type: 'apartment',
    bedrooms: 3,
    maxAdults: 3,
    price: 151,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.3,
    host: {
      hostName: 'Nastya',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2003'
    }
  },
  {
    id: '6a55bede-b58f-4f4e-bdd4-45adc3b61f92',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    bedrooms: 3,
    maxAdults: 3,
    price: 104,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    goods: [
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7,
    host: {
      hostName: 'Nastya',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/2003'
    }
  },
  {
    id: '6a5sdfvde-b58f-4f4e-bdd4-45adc3b61f92',
    title: 'Cozy room',
    type: 'Room',
    price: 180,
    isPremium: true,
    isFavorite: false,
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    description: 'Wood and stone place.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402157,
        longitude: 6.776314654,
        zoom: 10
      },
    },
    location: {
      latitude: 51.225402157,
      longitude: 6.776314654,
      zoom: 10
    },
    host: {
      hostName: 'Ann',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: ['Wi-Fi',
      'Coffee machine',
      'Dishwasher',
    ],
  }
];
