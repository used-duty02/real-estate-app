import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Waterfront Villa',
    description: 'Stunning waterfront villa with panoramic ocean views, private pool, and direct beach access. This luxurious property features 5 bedrooms, 6 bathrooms, a gourmet kitchen with top-of-the-line appliances, a home theater, wine cellar, and a spacious outdoor entertainment area. The master suite includes a private balcony, walk-in closet, and a spa-like bathroom with a soaking tub and rainfall shower.',
    price: 3500000,
    type: 'For Sale',
    category: 'Luxury',
    bedrooms: 5,
    bathrooms: 6,
    size: 5200,
    location: 'Miami Beach, FL',
    address: '123 Ocean Drive',
    city: 'Miami Beach',
    state: 'FL',
    zipCode: '33139',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257592-4a9a32f9141b?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257593-ca21f5f0d101?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: [
      'Private Pool',
      'Beach Access',
      'Home Theater',
      'Wine Cellar',
      'Smart Home System',
      'Gourmet Kitchen',
      '3-Car Garage',
      'Outdoor Kitchen'
    ],
    isFeatured: true,
    isFavorite: false,
    agent: {
      id: 1,
      name: 'Sarah Johnson',
      phone: '(305) 555-1234',
      email: 'sarah.johnson@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
    },
    createdAt: '2023-06-15T14:30:00Z'
  },
  {
    id: 2,
    title: 'Modern Downtown Penthouse',
    description: 'Spectacular penthouse in the heart of downtown with floor-to-ceiling windows offering breathtaking city views. This modern residence features an open floor plan, high ceilings, hardwood floors, and a gourmet kitchen with a large island. The primary suite includes a luxurious bathroom with a soaking tub and a walk-in closet. Building amenities include a rooftop pool, fitness center, and 24-hour concierge service.',
    price: 2100000,
    type: 'For Sale',
    category: 'Residential',
    bedrooms: 3,
    bathrooms: 3.5,
    size: 2800,
    location: 'Downtown, Chicago, IL',
    address: '456 Skyline Avenue',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: [
      'Rooftop Pool',
      'Fitness Center',
      '24-hour Concierge',
      'Private Terrace',
      'Floor-to-ceiling Windows',
      'Smart Home Features',
      'Wine Storage',
      'Pet Spa'
    ],
    isFeatured: true,
    isFavorite: true,
    agent: {
      id: 2,
      name: 'Michael Chen',
      phone: '(312) 555-6789',
      email: 'michael.chen@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop'
    },
    createdAt: '2023-07-22T10:15:00Z'
  },
  {
    id: 3,
    title: 'Elegant Brownstone Townhouse',
    description: 'Historic brownstone townhouse completely renovated with modern amenities while preserving its original charm. Features include a chef\'s kitchen, formal dining room, living room with a fireplace, and a private garden. The primary bedroom suite offers a spa-like bathroom and custom closets. Located in a prime neighborhood with easy access to parks, restaurants, and public transportation.',
    price: 4200000,
    type: 'For Sale',
    category: 'Residential',
    bedrooms: 4,
    bathrooms: 3.5,
    size: 3600,
    location: 'Brooklyn Heights, NY',
    address: '789 Historic Lane',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11201',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: [
      'Private Garden',
      'Fireplace',
      'Chef\'s Kitchen',
      'Original Hardwood Floors',
      'High Ceilings',
      'Crown Moldings',
      'Basement Storage',
      'Central Air Conditioning'
    ],
    isFeatured: false,
    isFavorite: false,
    agent: {
      id: 3,
      name: 'Emily Rodriguez',
      phone: '(718) 555-4321',
      email: 'emily.rodriguez@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop'
    },
    createdAt: '2023-08-05T09:45:00Z'
  },
  {
    id: 4,
    title: 'Contemporary Hillside Estate',
    description: 'Architectural masterpiece nestled in the hills with stunning views and ultimate privacy. This contemporary estate features walls of glass, soaring ceilings, and an open floor plan perfect for entertaining. The property includes a main house, guest house, infinity pool, outdoor kitchen, and meticulously landscaped grounds. State-of-the-art smart home technology throughout.',
    price: 7800000,
    type: 'For Sale',
    category: 'Luxury',
    bedrooms: 6,
    bathrooms: 8,
    size: 8500,
    location: 'Beverly Hills, CA',
    address: '1010 Summit Drive',
    city: 'Beverly Hills',
    state: 'CA',
    zipCode: '90210',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2675&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7f34b5063c8?q=80&w=2675&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2675&auto=format&fit=crop'
    ],
    amenities: [
      'Infinity Pool',
      'Guest House',
      'Home Gym',
      'Wine Cellar',
      'Media Room',
      'Outdoor Kitchen',
      'Smart Home System',
      'Security System'
    ],
    isFeatured: true,
    isFavorite: false,
    agent: {
      id: 4,
      name: 'James Wilson',
      phone: '(310) 555-9876',
      email: 'james.wilson@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop'
    },
    createdAt: '2023-09-12T16:20:00Z'
  },
  {
    id: 5,
    title: 'Luxury Waterfront Condo',
    description: 'Exquisite waterfront condo with panoramic bay views from every room. This luxury residence features an open floor plan, gourmet kitchen with top-of-the-line appliances, and a spacious balcony perfect for entertaining. Building amenities include a pool, fitness center, spa, and 24-hour concierge service.',
    price: 8500,
    type: 'For Rent',
    category: 'Residential',
    bedrooms: 2,
    bathrooms: 2.5,
    size: 1800,
    location: 'San Francisco, CA',
    address: '222 Bay View Drive',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94111',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: [
      'Pool',
      'Fitness Center',
      'Spa',
      '24-hour Concierge',
      'Parking',
      'Pet-Friendly',
      'Business Center',
      'Rooftop Terrace'
    ],
    isFeatured: false,
    isFavorite: true,
    agent: {
      id: 5,
      name: 'Olivia Park',
      phone: '(415) 555-5678',
      email: 'olivia.park@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop'
    },
    createdAt: '2023-10-08T11:30:00Z'
  },
  {
    id: 6,
    title: 'Prime Commercial Office Space',
    description: 'Premium office space in a Class A building located in the heart of the financial district. Features include floor-to-ceiling windows, modern finishes, and flexible floor plans. Building amenities include a conference center, fitness facility, on-site parking, and 24-hour security.',
    price: 12500,
    type: 'For Rent',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 2,
    size: 3500,
    location: 'Financial District, Boston, MA',
    address: '333 Commerce Street',
    city: 'Boston',
    state: 'MA',
    zipCode: '02110',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop'
    ],
    amenities: [
      'Conference Center',
      'Fitness Facility',
      'On-site Parking',
      '24-hour Security',
      'High-speed Internet',
      'Bike Storage',
      'On-site Management',
      'Catering Services'
    ],
    isFeatured: false,
    isFavorite: false,
    agent: {
      id: 6,
      name: 'Daniel Thompson',
      phone: '(617) 555-2468',
      email: 'daniel.thompson@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop'
    },
    createdAt: '2023-11-15T13:45:00Z'
  },
  {
    id: 7,
    title: 'Exclusive Beachfront Estate',
    description: 'Rare beachfront estate offering the ultimate in luxury and privacy. This magnificent property features a main residence, guest house, private beach access, infinity pool, and lush tropical gardens. The interior showcases custom finishes, soaring ceilings, and walls of glass that frame the spectacular ocean views.',
    price: 12500000,
    type: 'For Sale',
    category: 'Luxury',
    bedrooms: 7,
    bathrooms: 9,
    size: 10800,
    location: 'Malibu, CA',
    address: '444 Oceanfront Lane',
    city: 'Malibu',
    state: 'CA',
    zipCode: '90265',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2674&auto=format&fit=crop'
    ],
    amenities: [
      'Private Beach Access',
      'Infinity Pool',
      'Guest House',
      'Home Theater',
      'Wine Cellar',
      'Spa',
      'Tennis Court',
      'Boat Dock'
    ],
    isFeatured: true,
    isFavorite: false,
    agent: {
      id: 4,
      name: 'James Wilson',
      phone: '(310) 555-9876',
      email: 'james.wilson@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop'
    },
    createdAt: '2023-12-01T15:10:00Z'
  },
  {
    id: 8,
    title: 'Luxury High-Rise Apartment',
    description: 'Sophisticated apartment in a prestigious high-rise building with spectacular city views. This elegant residence features an open floor plan, gourmet kitchen, and luxurious finishes throughout. Building amenities include a rooftop pool, fitness center, resident lounge, and 24-hour doorman.',
    price: 6200,
    type: 'For Rent',
    category: 'Residential',
    bedrooms: 2,
    bathrooms: 2,
    size: 1500,
    location: 'Midtown, New York, NY',
    address: '555 Park Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10022',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=2671&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2671&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2671&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2671&auto=format&fit=crop'
    ],
    amenities: [
      'Rooftop Pool',
      'Fitness Center',
      'Resident Lounge',
      '24-hour Doorman',
      'Concierge Services',
      'Pet-Friendly',
      'Package Room',
      'Bike Storage'
    ],
    isFeatured: false,
    isFavorite: true,
    agent: {
      id: 3,
      name: 'Emily Rodriguez',
      phone: '(718) 555-4321',
      email: 'emily.rodriguez@luxuryrealty.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop'
    },
    createdAt: '2024-01-18T09:20:00Z'
  }
];

export const featuredProperties = properties.filter(property => property.isFeatured);
export const forSaleProperties = properties.filter(property => property.type === 'For Sale');
export const forRentProperties = properties.filter(property => property.type === 'For Rent');
export const luxuryProperties = properties.filter(property => property.category === 'Luxury');
export const commercialProperties = properties.filter(property => property.category === 'Commercial');
export const favoriteProperties = properties.filter(property => property.isFavorite);