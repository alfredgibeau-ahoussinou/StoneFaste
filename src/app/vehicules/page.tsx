'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, Filter, Search, Sparkles, Star } from 'lucide-react';
import { vehicles } from '@/data/vehicles';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import HoverCard from '@/components/HoverCard';

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
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-luxury text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <FadeInOnScroll delay={0.2}>
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-stonefast-gold mx-auto mb-6 animate-glow" />
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Nos{' '}
                  <span className="text-gradient-gold">véhicules</span>
                </h1>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-stonefast-gray-light max-w-3xl mx-auto leading-relaxed">
                Choisissez le véhicule qui correspond à vos besoins. 
                Une flotte premium pour une expérience exceptionnelle.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="glass rounded-2xl p-8 shadow-soft">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Barre de recherche */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stonefast-gray-muted w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un véhicule..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark placeholder-gray-400 bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Filtres par type */}
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-stonefast-gray-muted" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stonefast-blue focus:border-stonefast-blue text-stonefast-gray-dark bg-white/50 backdrop-blur-sm"
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
        </div>
      </section>

      {/* Liste des véhicules */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {filteredVehicles.length === 0 ? (
            <FadeInOnScroll delay={0.2}>
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-stonefast-gray-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Car className="w-12 h-12 text-stonefast-gray-muted" />
                </div>
                <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-4">
                  Aucun véhicule trouvé
                </h3>
                <p className="text-stonefast-gray-muted text-lg">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            </FadeInOnScroll>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <HoverCard key={vehicle.id} delay={index * 0.1}>
                  <div className="card-luxury group">
                    <div className="relative h-64 bg-stonefast-gray overflow-hidden rounded-t-2xl">
                      <img 
                        src="/2024-AMG-GLC-COUPE-LTG-01-DR.webp" 
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-stonefast-gold text-white px-3 py-1 rounded-full text-sm font-semibold shadow-elegant">
                        {vehicle.type === 'luxe' ? (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            Luxe
                          </div>
                        ) : vehicle.type}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-stonefast-gray-dark px-4 py-2 rounded-xl font-bold text-lg shadow-soft">
                        {vehicle.price}€/jour
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-stonefast-gray-dark mb-3">
                        {vehicle.name}
                      </h3>
                      <p className="text-stonefast-gray-muted mb-6 leading-relaxed">
                        {vehicle.description}
                      </p>
                      
                      {/* Caractéristiques principales */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-stonefast-gray-light rounded-xl">
                          <div className="text-lg font-bold text-stonefast-blue">
                            {vehicle.specifications.power}
                          </div>
                          <div className="text-sm text-stonefast-gray-muted">Puissance</div>
                        </div>
                        <div className="text-center p-3 bg-stonefast-gray-light rounded-xl">
                          <div className="text-lg font-bold text-stonefast-blue">
                            {vehicle.specifications.year}
                          </div>
                          <div className="text-sm text-stonefast-gray-muted">Année</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={`/vehicules/${vehicle.id}`}
                          className="btn-secondary flex-1 text-center"
                        >
                          Voir les détails
                        </Link>
                        <Link
                          href={`/reservation/informations?vehicle=${vehicle.id}&price=${vehicle.price}`}
                          className="btn-primary flex-1 text-center"
                        >
                          Réserver
                        </Link>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-luxury text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <FadeInOnScroll delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à réserver votre{' '}
              <span className="text-stonefast-gold-light">véhicule</span> ?
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.4}>
            <p className="text-xl mb-12 text-stonefast-gray-light max-w-2xl mx-auto">
              Commencez votre réservation en quelques clics
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.6}>
            <Link
              href="/reservation/informations"
              className="btn-luxury inline-flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Commencer la réservation
            </Link>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
} 