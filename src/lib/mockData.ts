export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  type: string;
  status: string;
  imageUrl: string;
  images: string[];
  description: string;
  amenities: string[];
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Condo near PSU',
    price: '2,500,000',
    location: 'Kho Hong',
    beds: 1,
    baths: 1,
    sqm: 35,
    type: 'Condo',
    status: 'For Sale',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600',
    ],
    description: `Perfect for students or investors! This modern 1-bedroom condo is located just a 5-minute walk from Prince of Songkla University (PSU). Fully furnished with modern appliances and high-speed internet ready.\n\nResidents have full access to a rooftop pool, a state-of-the-art fitness center, co-working spaces, and 24-hour security. Excellent rental yield history.`,
    amenities: ['Swimming Pool', 'Gym', 'Co-working Space', '24/7 Security', 'Keycard Access', 'Fully Furnished'],
  },
  {
    id: '2',
    title: 'Cozy Room for Rent near Downtown',
    price: '6,500',
    location: 'Downtown',
    beds: 1,
    baths: 1,
    sqm: 28,
    type: 'Room for Rent',
    status: 'For Rent',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    ],
    description: `Affordable and comfortable room available in the heart of Hat Yai Downtown. This space is ideal for young professionals or expats working in the city center. Features a newly renovated private bathroom.\n\nWalking distance to Lee Gardens Plaza, Kim Yong Market, and various street food stalls. Utilities are included up to a certain limit.`,
    amenities: ['Air Conditioning', 'En-suite Bathroom', 'Free Wi-Fi', 'Shared Kitchenette', 'Laundry Facilities nearby', 'CCTV Security'],
  },
  {
    id: '3',
    title: 'Luxury Villa with Private Pool',
    price: '12,900,000',
    location: 'Hatyai Nai',
    beds: 4,
    baths: 5,
    sqm: 320,
    type: 'House',
    status: 'For Sale',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687931-cebf0746e58e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
    ],
    description: `This stunning 4-bedroom villa offers the ultimate luxury living experience in Hat Yai. Located in a prestigious gated community just minutes away from Hatyai Nai and the airport, the property features a massive private swimming pool, landscaped tropical gardens, and high-end modern furnishings.\n\nThe ground floor boasts an open-concept living and dining area with double-height ceilings that flood the space with natural light. A fully equipped western kitchen comes with premium appliances. Upstairs, the master suite includes a walk-in closet and a spa-like en-suite bathroom with a soaking tub. Perfect for families or executives looking for exceptional quality and security.`,
    amenities: ['Private Swimming Pool', '24/7 Gated Security', 'Covered Parking (2 Cars)', 'Western Kitchen', 'Fully Furnished', 'Air Conditioning', 'Maid Quarters', 'High-Speed Internet Ready'],
  },
  {
    id: '4',
    title: 'Spacious Family House for Rent',
    price: '25,000',
    location: 'Central Fes Vicinity',
    beds: 3,
    baths: 3,
    sqm: 180,
    type: 'House',
    status: 'For Rent',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600040921028-21d3f945391e?auto=format&fit=crop&q=80&w=600',
    ],
    description: `A brand-new, unfurnished 3-bedroom detached house in a peaceful, secure compound right across from Central Festival Hat Yai. This property is ideal for families looking for a large living space with a decent-sized yard.\n\nEnjoy modern design with expansive living rooms, covered patio, and quick access to major highways. Friendly expat community and excellent local management.`,
    amenities: ['Large Garden', 'Pet Friendly', 'Covered Parking', 'Clubhouse Access', '24/7 Patrol', 'Balcony / Patio'],
  },
];
