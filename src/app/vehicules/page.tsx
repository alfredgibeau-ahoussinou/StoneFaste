'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, Filter, Search } from 'lucide-react';
import { vehicles } from '@/data/vehicles';

const vehicleTypes = [
  { id: 'all', label: 'Tous les véhicules' },
  { id: 'luxe', label: 'Luxe' }
];

export default function VehiculesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesType = selectedType === 'all' || vehicle.type === selectedType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stonefast-gray-light">
      {/* Hero Section */}
      <section className="bg-stonefast-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos véhicules
            </h1>
            <p className="text-xl text-stonefast-gray-light">
              Choisissez le véhicule qui correspond à vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stonefast-gray-dark w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un véhicule..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stonefast-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue"
              />
            </div>

            {/* Filtres par type */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-stonefast-gray-dark" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-stonefast-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-stonefast-blue"
              >
                {vehicleTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des véhicules */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-12">
              <Car className="w-16 h-16 text-stonefast-gray-dark mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">
                Aucun véhicule trouvé
              </h3>
              <p className="text-stonefast-gray-dark">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-stonefast-gray overflow-hidden">
                    <img 
                      src="/2024-AMG-GLC-COUPE-LTG-01-DR.webp" 
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stonefast-gray-dark mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-stonefast-gray-dark mb-4">
                      {vehicle.description}
                    </p>
                    
                    {/* Caractéristiques */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-stonefast-gray-light text-stonefast-gray-dark px-2 py-1 rounded text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-stonefast-blue">{vehicle.price}€/jour</span>
                      <Link
                        href={`/vehicules/${vehicle.id}`}
                        className="bg-stonefast-blue text-white px-4 py-2 rounded-lg hover:bg-stonefast-blue-dark transition-colors text-center block"
                      >
                        Voir les détails
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stonefast-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stonefast-gray-dark mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-lg text-stonefast-gray-dark mb-8">
            Notre équipe est là pour vous conseiller et vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation/informations"
              className="bg-stonefast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue-dark transition-colors duration-200"
            >
              Réserver un véhicule
            </Link>
            <Link
              href="/contact"
              className="border-2 border-stonefast-blue text-stonefast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stonefast-blue hover:text-white transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 