export interface Vehicle {
  id: number;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    transmission: string;
    fuelType: string;
    seats: number;
    doors: number;
    year: number;
    mileage: string;
  };
  equipment: string[];
  gallery: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Mercedes GLC Coupé AMG 2024',
    type: 'luxe',
    description: 'SUV coupé de luxe avec performances AMG exceptionnelles',
    longDescription: 'Le Mercedes GLC Coupé AMG 2024 représente l\'excellence allemande en matière de SUV coupé de luxe. Avec son design audacieux et ses performances AMG exceptionnelles, ce véhicule offre une expérience de conduite incomparable.',
    price: 200,
    image: '/placeholder-car.jpg',
    features: ['AMG Performance', '4MATIC+', 'MBUX Navigation', 'Sièges sport', 'Toit panoramique', 'Système audio premium'],
    specifications: {
      engine: '2.0L Turbo 4-cylinder',
      power: '258 ch',
      transmission: '9G-TRONIC automatique',
      fuelType: 'Essence',
      seats: 5,
      doors: 5,
      year: 2024,
      mileage: '15,000 km'
    },
    equipment: [
      'Système de navigation MBUX',
      'Sièges chauffants et ventilés',
      'Toit panoramique électrique',
      'Système audio Burmester® Surround',
      'Caméra de recul',
      'Système de stationnement automatique',
      'Climatisation bi-zone',
      'Régulateur de vitesse adaptatif',
      'Système de freinage d\'urgence',
      'Airbags multiples'
    ],
    gallery: [
      '/2024-AMG-GLC-COUPE-LTG-01-DR.webp',
      '/2024-AMG-GLC-COUPE-LTG-02-DR.webp',
      '/2024-AMG-GLC-COUPE-FMG-001-1UP-DR.webp',
      '/2024-AMG-GLC-COUPE-FMG-002-2UP-DR.webp',
      '/2024-AMG-GLC-COUPE-FMG-003-2UP-DR.webp',
      '/iris.avif'
    ]
  }
];

export const getVehicleById = (id: number): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const getVehiclesByType = (type: string): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.type === type);
}; 